// IFCViewer.jsx
import React, { useEffect, useRef, useState, Fragment } from "react";
import * as THREE from "three";
import { IFCLoader } from "web-ifc-three/IFCLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HIGHLIGHT_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.45,
  depthTest: false,
});

const IFCViewer = ({
  wasmPath = "/wasm/",
  onModelLoaded,
}) => {
  // Refs для three и загрузчика
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const ifcLoaderRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const modelRef = useRef(null);
  const selectedSubsetRef = useRef(null);

  // Карты для быстрого доступа
  const meshMapRef = useRef(new Map()); // uuid -> mesh
  const expressToUUIDsRef = useRef(new Map()); // expressID -> [uuids]

  // Состояния UI
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [treeRoot, setTreeRoot] = useState(null);
  const [expandedIds, setExpandedIds] = useState({});
  const [meshVisibilityMap, setMeshVisibilityMap] = useState({});
  const [selectedProps, setSelectedProps] = useState(null);
  const [selectedExpressId, setSelectedExpressId] = useState(null);

  // Инициализация сцены, камеры, рендера, IFCLoader
  useEffect(() => {
    if (!containerRef.current) return;

    // Сцена и камера
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(10, 10, 10);
    cameraRef.current = camera;

    // Рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Свет
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(10, 10, 5);
    dir.castShadow = true;
    scene.add(dir);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    // Raycaster
    raycasterRef.current = new THREE.Raycaster();

    // IFCLoader
    const ifcLoader = new IFCLoader();
    // указываем путь к web-ifc.wasm
    ifcLoader.ifcManager.setWasmPath(wasmPath);
    ifcLoaderRef.current = ifcLoader;

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Очистка
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch {}
      }
    };
  }, [wasmPath]);

  // --- Вспомогательные функции для работы с деревом ---

  // Построить TreeNode из spatial structure, рекурсивно
  const buildTreeFromSpatial = (item, level = 0) => {
    const typeRaw = item.type || "";
    const type = String(typeRaw).replace(/^IFC/i, "");
    // Попробуем получить читабельное имя
    let name = "";
    if (item.Name) name = item.Name?.value ?? item.Name;
    else if (item.LongName) name = item.LongName?.value ?? item.LongName;
    else if (item.Description) name = item.Description?.value ?? item.Description;
    if (!name) name = type || `Node ${item.expressID ?? Math.random()}`;

    const nodeId = item.expressID ? String(item.expressID) : `${type}-${Math.random().toString(36).slice(2, 8)}`;

    const node = {
      id: nodeId,
      expressID: item.expressID ?? null,
      name: name,
      type,
      level,
      children: [],
    };

    if (Array.isArray(item.children) && item.children.length > 0) {
      node.children = item.children.map((c) => buildTreeFromSpatial(c, level + 1));
    }

    return node;
  };

  // Собрать все expressID из поддерева (рекурсивно)
  const collectExpressIDs = (node, result = new Set()) => {
    if (node.expressID != null) result.add(node.expressID);
    node.children.forEach((ch) => collectExpressIDs(ch, result));
    return result;
  };

  // Получить массив uuid (mesh) по expressID (используем карту)
  const getUUIDsForExpress = (expressID) => {
    const map = expressToUUIDsRef.current;
    const key = String(expressID);
    return map.has(key) ? map.get(key) : [];
  };

  // Рекурсивный переключатель видимости по узлу (expressID может быть null для чисто логических узлов)
  const setVisibilityByNode = (node, visible) => {
    // получаем все expressIDs из поддерева
    const expressIDs = collectExpressIDs(node);
    const uuidList = [];
    expressIDs.forEach((id) => {
      const uuids = getUUIDsForExpress(id);
      uuids.forEach((u) => uuidList.push(u));
    });

    // если узел не имеет expressID и нет потомков с expressID,
    // можем попытаться найти по node.id как uuid
    if (uuidList.length === 0) {
      const mesh = meshMapRef.current.get(node.id);
      if (mesh) uuidList.push(node.id);
    }

    // применяем видимость
    const newVisibility = { ...meshVisibilityMap };
    uuidList.forEach((uuid) => {
      const mesh = meshMapRef.current.get(uuid);
      if (mesh) {
        mesh.visible = visible;
        newVisibility[uuid] = visible;
      }
    });
    setMeshVisibilityMap(newVisibility);
  };

  // Функция переключения чекбокса узла
  const onToggleNode = (node, checked) => {
    // переключаем узел и всех потомков
    // рекурсивно идём и ищем все expressID в поддереве
    setVisibilityByNode(node, checked);
  };

  // --- Загрузка файла и постобработка ---

  const handleFile = async (file) => {
    if (!file || !ifcLoaderRef.current || !sceneRef.current) return;
    setIsLoading(true);
    setError(null);

    try {
      // Очистим предыдущую модель и карты
      if (modelRef.current && sceneRef.current) {
        sceneRef.current.remove(modelRef.current);
        modelRef.current.traverse((child) => {
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.material) {
            const m = child.material;
            try {
              m.dispose();
            } catch {}
          }
        });
        meshMapRef.current.clear();
        expressToUUIDsRef.current.clear();
        setTreeRoot(null);
        setMeshVisibilityMap({});
        setSelectedProps(null);
        setSelectedExpressId(null);
      }

      const url = URL.createObjectURL(file);
      const ifcModel = await ifcLoaderRef.current.loadAsync(url);
      URL.revokeObjectURL(url);

      // Сохраним модель и modelID
      modelRef.current = ifcModel;
      if (sceneRef.current) sceneRef.current.add(ifcModel);

      // Заполним meshMap и express->uuid карту
      ifcModel.traverse((child) => {
        if (child.isMesh) {
          const mesh = child;
          meshMapRef.current.set(mesh.uuid, mesh);

          // атрибут expressID может быть в geometry.attributes.expressID
          const idsAttr = mesh.geometry.attributes?.expressID;
          if (idsAttr) {
            const arr = idsAttr.array;
            const unique = Array.from(new Set(Array.from(arr)));
            unique.forEach((idNum) => {
              const key = String(idNum);
              if (!expressToUUIDsRef.current.has(key)) expressToUUIDsRef.current.set(key, []);
              expressToUUIDsRef.current.get(key).push(mesh.uuid);
            });
          }
        }
      });

      // Создаём начальную карту видимости (все true)
      const initialVis = {};
      for (const uuid of meshMapRef.current.keys()) initialVis[uuid] = true;
      setMeshVisibilityMap(initialVis);

      // Получаем пространственную структуру (spatial tree)
      try {
        const spatial = await ifcLoaderRef.current.ifcManager.getSpatialStructure(ifcModel.modelID, true);
        const root = buildTreeFromSpatial(spatial, 0);
        setTreeRoot(root);

        // автоматически раскрыть корень
        setExpandedIds({ [root.id]: true });
      } catch (e) {
        // Фоллбэк: если spatial не доступен, создать плоский список по meshMap
        const pseudoRoot = {
          id: "root",
          name: "Model",
          type: "MODEL",
          level: 0,
          children: Array.from(meshMapRef.current.entries()).map(([uuid, mesh], idx) => ({
            id: uuid,
            expressID: null,
            name: mesh.name || `Mesh ${idx}`,
            type: mesh.type || "Mesh",
            level: 1,
            children: [],
          })),
        };
        setTreeRoot(pseudoRoot);
        setExpandedIds({ [pseudoRoot.id]: true });
      }

      // Центрируем камеру на объекте
      const box = new THREE.Box3().setFromObject(ifcModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5;
      if (cameraRef.current) {
        cameraRef.current.position.set(center.x, center.y, cameraZ);
        cameraRef.current.lookAt(center);
      }

      // Callback для родителя
      if (onModelLoaded) onModelLoaded(ifcModel);
    } catch (err) {
      console.error("IFC load error:", err);
      setError("Ошибка загрузки IFC. Проверьте файл и путь к web-ifc.wasm.");
    } finally {
      setIsLoading(false);
    }
  };

  // Обработчик input file
  const onFileInputChange = (e) => {
    const f = e.target.files?.[0] ?? null;
    handleFile(f);
  };

  // --- Обработка клика по сцене для получения expressID и свойств ---
  useEffect(() => {
    const handler = async (event) => {
      if (!containerRef.current || !cameraRef.current || !raycasterRef.current || !ifcLoaderRef.current || !modelRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (raycasterRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      }
      // для точности — ищем среди всех mesh'ей модели
      const allMeshes = Array.from(meshMapRef.current.values());
      const intersects = raycasterRef.current ? raycasterRef.current.intersectObjects(allMeshes, true) : [];
      if (!intersects || intersects.length === 0) {
        // клик по пустому месту — сброс выбора
        setSelectedProps(null);
        setSelectedExpressId(null);
        // удалить подсветку
        if (selectedSubsetRef.current && modelRef.current) {
          try {
            ifcLoaderRef.current.ifcManager.removeSubset(modelRef.current.modelID, selectedSubsetRef.current.material);
          } catch {}
          selectedSubsetRef.current = null;
        }
        return;
      }

      const intersection = intersects[0];
      const picked = intersection.object;

      // Попробуем получить expressID:
      let expressID = null;
      try {
        // Если геометрия имеет attribute expressID
        const geomAttrs = picked.geometry.attributes;
        if (geomAttrs && geomAttrs.expressID) {
          // faceIndex -> vertex index -> expressID value
          const idx = intersection.faceIndex;
          const indexArr = picked.geometry.index?.array;
          if (indexArr) {
            const vertexIndex = indexArr[3 * idx]; // индекс первой вершины полигона
            expressID = geomAttrs.expressID.getX(vertexIndex);
          }
        }
      } catch (e) {
        // игнорируем
      }

      // Альтернативный способ — через IFCManager.getExpressId(geometry, faceIndex)
      try {
        if (!expressID && ifcLoaderRef.current.ifcManager.getExpressId) {
          expressID = ifcLoaderRef.current.ifcManager.getExpressId(picked.geometry, intersection.faceIndex);
        }
      } catch (e) {}

      // Ещё способ: userData может содержать expressID
      if (!expressID && picked.userData?.expressID) {
        expressID = picked.userData.expressID;
      }

      if (!expressID) {
        console.warn("Не удалось получить expressID для выбранного объекта");
        setSelectedProps(null);
        setSelectedExpressId(null);
        return;
      }

      // Получаем свойства
      try {
        if (!modelRef.current) return;
        const props = await ifcLoaderRef.current.ifcManager.getItemProperties(modelRef.current.modelID, expressID, true);
        setSelectedProps(props);
        setSelectedExpressId(expressID);
      } catch (err) {
        console.error("Error getItemProperties", err);
        setSelectedProps(null);
        setSelectedExpressId(expressID);
      }

      // Подсветим элемент с помощью createSubset
      try {
        // Удалим предыдущий subset
        if (selectedSubsetRef.current && modelRef.current) {
          try {
            ifcLoaderRef.current.ifcManager.removeSubset(modelRef.current.modelID, selectedSubsetRef.current.material);
          } catch {}
          selectedSubsetRef.current = null;
        }

        // Получим все uuids для expressID
        const uuids = getUUIDsForExpress(expressID);
        // Если нет прямых uuid — попробуем создать subset по ids
        // createSubset принимает ids (expressIDs)
        if (!modelRef.current || !sceneRef.current) return;
        const subset = ifcLoaderRef.current.ifcManager.createSubset({
          modelID: modelRef.current.modelID,
          ids: [expressID],
          scene: sceneRef.current,
          removePrevious: true,
          material: HIGHLIGHT_MATERIAL,
        });

        // Сохраняем
        if (subset) {
          selectedSubsetRef.current = subset;
        }
      } catch (e) {
        console.warn("Subset highlight failed:", e);
      }
    };

    // Повесим слушатель клика на canvas
    const canvas = rendererRef.current?.domElement;
    canvas?.addEventListener("click", handler);
    return () => {
      canvas?.removeEventListener("click", handler);
    };
  }, [meshVisibilityMap]); // пересоздаётся при изменении видимости (но это не критично)

  // --- UI: Рендер дерева рекурсивно ---
  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderNode = (node) => {
    const isExpanded = !!expandedIds[node.id];
    const hasChildren = node.children.length > 0;

    // чекбокс: вычислим агрегированную видимость всех связанных mesh'ей
    const checked = (() => {
      // получаем expressIDs в поддереве
      const ids = collectExpressIDs(node);
      if (ids.size > 0) {
        // для каждого expressID получаем uuid'ы и проверяем их видимость
        let allVisible = true;
        let anyExists = false;
        ids.forEach((id) => {
          const uuids = getUUIDsForExpress(id);
          if (uuids.length > 0) anyExists = true;
          uuids.forEach((u) => {
            const v = meshVisibilityMap[u];
            if (v === false) allVisible = false;
          });
        });
        if (anyExists) return allVisible;
      }
      // fallback: если node.id возможно является uuid
      const mv = meshVisibilityMap[node.id];
      return mv !== false;
    })();

    return (
      <div key={node.id}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "3px 4px",
            paddingLeft: `${node.level * 12}px`,
            gap: 8,
          }}
        >
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(node.id)}
              style={{
                width: 18,
                height: 18,
                padding: 0,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                lineHeight: 1,
              }}
              title={isExpanded ? "Свернуть" : "Развернуть"}
            >
              {isExpanded ? "▾" : "▸"}
            </button>
          ) : (
            <div style={{ width: 18 }} />
          )}

          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onToggleNode(node, e.target.checked)}
            style={{ cursor: "pointer" }}
          />

          <div style={{ flex: 1, fontSize: 13, color: node.level === 0 ? "#222" : "#444" }}>
            <strong style={{ fontWeight: node.level === 0 ? 600 : 400 }}>{node.type ? `${node.type} ` : ""}</strong>
            <span>{node.name}</span>
            {node.expressID != null ? <span style={{ marginLeft: 6, color: "#888", fontSize: 11 }}>#{node.expressID}</span> : null}
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div>
            {node.children.map((c) => (
              <Fragment key={c.id}>{renderNode(c)}</Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Простая отрисовка свойств объекта
  const renderProperties = (obj, depth = 0) => {
    if (!obj || typeof obj !== "object") return <div style={{ marginLeft: depth * 10 }}>{String(obj)}</div>;
    if (depth > 6) return <div style={{ marginLeft: depth * 10 }}>...</div>;

    return Object.entries(obj).map(([k, v]) => {
      if (k.startsWith("$") || k === "type") return null;
      const isObj = v && typeof v === "object";
      return (
        <div key={k} style={{ marginLeft: depth * 8, marginBottom: 6 }}>
          <div style={{ fontSize: 12, color: "#333", fontWeight: isObj ? 600 : 500 }}>{k}:</div>
          {isObj ? renderProperties(v, depth + 1) : <div style={{ color: "#555", fontSize: 13 }}>{String(v)}</div>}
        </div>
      );
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", fontFamily: "Inter, Roboto, Arial" }}>
      {/* Панель загрузки */}
      <div
        style={{
          position: "absolute",
          left: 12,
          top: 12,
          zIndex: 1200,
          background: "rgba(255,255,255,0.95)",
          padding: 12,
          borderRadius: 8,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: 8, fontWeight: 600 }}>Загрузка IFC</div>
        <input accept=".ifc" type="file" onChange={onFileInputChange} />
        {isLoading && <div style={{ marginTop: 8, color: "#0078ff" }}>Загрузка...</div>}
        {error && <div style={{ marginTop: 8, color: "#e54848" }}>{error}</div>}
      </div>

      {/* Панель дерева */}
      {treeRoot && (
        <div
          style={{
            position: "absolute",
            left: 12,
            bottom: 12,
            width: 340,
            maxHeight: "60vh",
            overflow: "auto",
            zIndex: 1200,
            background: "rgba(255,255,255,0.98)",
            padding: 12,
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ marginBottom: 8, fontWeight: 600 }}>Элементы модели</div>
          <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
            Узлов: {/* подсчитать бы — можно рекурсивно, но опустим для компактности */}{" "}
          </div>
          <div>{renderNode(treeRoot)}</div>
        </div>
      )}

      {/* Панель свойств */}
      {selectedProps && (
        <div
          style={{
            position: "absolute",
            right: 12,
            top: 12,
            width: 360,
            maxHeight: "80vh",
            overflow: "auto",
            zIndex: 1200,
            background: "rgba(255,255,255,0.98)",
            padding: 12,
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontWeight: 700 }}>Свойства</div>
            <div style={{ color: "#666", fontSize: 12 }}>ExpressID: {selectedExpressId}</div>
          </div>
          <div style={{ fontSize: 13, color: "#333" }}>{renderProperties(selectedProps)}</div>
          <div style={{ marginTop: 12 }}>
            <button
              onClick={() => {
                setSelectedProps(null);
                setSelectedExpressId(null);
                // убрать подсветку
                if (ifcLoaderRef.current && modelRef.current && selectedSubsetRef.current) {
                  try {
                    ifcLoaderRef.current.ifcManager.removeSubset(modelRef.current.modelID, selectedSubsetRef.current.material);
                  } catch {}
                  selectedSubsetRef.current = null;
                }
              }}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                background: "#f3f4f6",
                cursor: "pointer",
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Контейнер сцены */}
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default IFCViewer;
