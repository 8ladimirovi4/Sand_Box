import React, { useEffect, useRef, useState, useCallback } from 'react';
import { IFCLoader } from 'web-ifc-three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// === НОВЫЙ РЕКУРСИВНЫЙ КОМПОНЕНТ ДЛЯ УЗЛА ДЕРЕВА ===
const TreeNode = ({ node, onToggleVisibility, visibleMap, onToggleExpand, expandedSet }) => {
  if (!node) return null;

  const isExpanded = expandedSet.has(node.id);
  const hasChildren = node.children && node.children.length > 0;

  // Определяем, видим ли сам узел (и все его дочерние меши)
  const isChecked = (() => {
    if (!node.expressID || !visibleMap.expressIDToUUID) return true;
    const uuids = visibleMap.expressIDToUUID.get(String(node.expressID));
    if (!uuids || uuids.length === 0) return true; // Если нет мешей, считаем видимым
    return uuids.every(uuid => visibleMap.visibility.get(uuid) !== false);
  })();

  return (
    <div style={{ paddingLeft: `${node.level > 0 ? 15 : 0}px` }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', padding: '2px 0' }}>
        {/* Кнопка для сворачивания/разворачивания */}
        <div 
          style={{ width: '15px', cursor: hasChildren ? 'pointer' : 'default', userSelect: 'none' }}
          onClick={() => hasChildren && onToggleExpand(node.id)}
        >
          {hasChildren ? (isExpanded ? '▼' : '►') : ''}
        </div>
        
        {/* Чекбокс видимости */}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onToggleVisibility(node, e.target.checked)}
          style={{ marginRight: '8px', cursor: 'pointer' }}
        />
        
        {/* Имя элемента */}
        <label style={{ 
          fontSize: '12px', 
          color: node.level === 0 ? '#333' : '#666', 
          fontWeight: node.level === 0 ? 'bold' : 'normal',
          cursor: 'pointer',
          flex: 1,
          wordBreak: 'break-word'
        }}>
          {node.type ? `${node.type} ` : ''}{node.name || `Element ${node.id}`}
        </label>
      </div>
      
      {/* Рендеринг дочерних элементов, если узел раскрыт */}
      {isExpanded && hasChildren && (
        <div>
          {node.children.map(child => (
            <TreeNode 
              key={child.id}
              node={child}
              onToggleVisibility={onToggleVisibility}
              visibleMap={visibleMap}
              onToggleExpand={onToggleExpand}
              expandedSet={expandedSet}
            />
          ))}
        </div>
      )}
    </div>
  );
};


const IFCViewer = ({ onModelLoaded }) => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const ifcLoaderRef = useRef(null);
  const controlsRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const ifcModelRef = useRef(null);
  const selectedElementRef = useRef(null);
  const modelIDRef = useRef(null);
  
  // Карта для всех мешей модели по их UUID
  const meshMapRef = useRef(new Map());
  // Карта для связи expressID с UUID мешей
  const expressIDToUUIDMapRef = useRef(new Map());

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [elementProperties, setElementProperties] = useState(null);
  
  // === ИЗМЕНЕННЫЕ СОСТОЯНИЯ ДЛЯ ДЕРЕВА ===
  const [modelTree, setModelTree] = useState(null); // Хранит все дерево, а не плоский список
  const [meshVisibilityMap, setMeshVisibilityMap] = useState(new Map()); // Видимость каждого меша
  const [expandedNodes, setExpandedNodes] = useState(new Set()); // ID раскрытых узлов

  // ... (весь useEffect для инициализации сцены остается без изменений)
    useEffect(() => {
    if (!containerRef.current) return;

    // Создание сцены
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Создание камеры
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Создание рендерера
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Настройка освещения
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Инициализация IFCLoader
    const ifcLoader = new IFCLoader();
    ifcLoader.ifcManager.setWasmPath('/wasm/');
    ifcLoaderRef.current = ifcLoader;

    // Инициализация OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controlsRef.current = controls;

    // Инициализация Raycaster
    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;

    // Обработчик клика
    const onMouseClick = async (event) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseRef.current, camera);
      
      if (ifcModelRef.current) {
        const intersects = raycaster.intersectObjects([ifcModelRef.current], true);
        
        if (intersects.length > 0) {
          const intersection = intersects[0];
          const expressID = ifcLoader.ifcManager.getExpressId(intersection.object.geometry, intersection.faceIndex);

          if (expressID !== undefined) {
             try {
                const props = await ifcLoader.ifcManager.getItemProperties(modelIDRef.current, expressID);
                setElementProperties(props);
                setSelectedElement({ expressID, ...props });
              } catch (err) {
                console.error('Error getting properties:', err);
                setElementProperties(null);
                setSelectedElement(null);
              }
          }
        } else {
          setSelectedElement(null);
          setElementProperties(null);
        }
      }
    };

    renderer.domElement.addEventListener('click', onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', onMouseClick);
      if (controls) controls.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleFileLoad = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      const url = URL.createObjectURL(file);
      
      if (ifcModelRef.current) {
        sceneRef.current.remove(ifcModelRef.current);
        ifcModelRef.current = null;
      }
      setSelectedElement(null);
      setElementProperties(null);
      setModelTree(null);
      
      const ifcModel = await ifcLoaderRef.current.loadAsync(url);
      ifcModelRef.current = ifcModel;
      modelIDRef.current = ifcModel.modelID;
      
      const meshMap = new Map();
      const visibilityMap = new Map();
      const expressIDMap = new Map();
      
      ifcModel.traverse((child) => {
        if (child.isMesh) {
          meshMap.set(child.uuid, child);
          visibilityMap.set(child.uuid, true);
          
          const ids = child.geometry.attributes.expressID.array;
          const uniqueIds = [...new Set(ids)];
          uniqueIds.forEach(id => {
            if (!expressIDMap.has(String(id))) {
              expressIDMap.set(String(id), []);
            }
            expressIDMap.get(String(id)).push(child.uuid);
          });
        }
      });
      
      meshMapRef.current = meshMap;
      expressIDToUUIDMapRef.current = expressIDMap;
      setMeshVisibilityMap(visibilityMap);
      
      const spatialStructure = await ifcLoaderRef.current.ifcManager.getSpatialStructure(ifcModel.modelID, true);
      
      const buildTree = (item, level = 0) => {
        const type = item.type.replace('IFC', '');
        let name = '';
        if (item.Name) name = item.Name.value;
        else if (item.LongName) name = item.LongName.value;
        
        const node = {
          id: String(item.expressID),
          name: name || type,
          type: type,
          expressID: item.expressID,
          level: level,
          children: item.children.map(child => buildTree(child, level + 1))
        };
        return node;
      };
      
      const tree = buildTree(spatialStructure);
      setModelTree(tree);
      
      // Раскрываем корневой элемент по умолчанию
      setExpandedNodes(new Set([tree.id]));

      sceneRef.current.add(ifcModel);
      
      const box = new THREE.Box3().setFromObject(ifcModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5;

      cameraRef.current.position.set(center.x, center.y, center.z + cameraZ);
      controlsRef.current.target.copy(center);
      controlsRef.current.update();

      if (onModelLoaded) onModelLoaded(ifcModel);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Ошибка загрузки IFC файла:', err);
      setError('Ошибка загрузки файла. Убедитесь, что файл является корректным IFC файлом.');
    } finally {
      setIsLoading(false);
    }
  };

  // === НОВАЯ ФУНКЦИЯ ДЛЯ ИЕРАРХИЧЕСКОГО ПЕРЕКЛЮЧЕНИЯ ВИДИМОСТИ ===
  const toggleElementVisibility = useCallback((node, checked) => {
    const visibilityMap = new Map(meshVisibilityMap);
    const expressIDMap = expressIDToUUIDMapRef.current;
    
    // Рекурсивная функция для применения видимости
    const applyVisibility = (currentNode) => {
      const nodeID = String(currentNode.expressID);
      if (expressIDMap.has(nodeID)) {
        const uuids = expressIDMap.get(nodeID);
        uuids.forEach(uuid => {
          const mesh = meshMapRef.current.get(uuid);
          if (mesh) {
            mesh.visible = checked;
            visibilityMap.set(uuid, checked);
          }
        });
      }
      // Применяем то же состояние для всех дочерних элементов
      if (currentNode.children) {
        currentNode.children.forEach(child => applyVisibility(child));
      }
    };
    
    applyVisibility(node);
    setMeshVisibilityMap(visibilityMap);
  }, [meshVisibilityMap]);

  // Функция для сворачивания/разворачивания узлов
  const handleToggleExpand = useCallback((nodeId) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* ... (панель загрузки файла остается без изменений) */}
        <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Загрузка IFC файла</h3>
        <input
          ref={inputRef}
          type="file"
          accept=".ifc"
          onChange={handleFileLoad}
          style={{ marginBottom: '10px' }}
        />
        {isLoading && (
          <div style={{ color: '#007ad9', fontSize: '14px' }}>
            Загрузка файла...
          </div>
        )}
        {error && (
          <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '10px' }}>
            {error}
          </div>
        )}
      </div>

      {/* === ОБНОВЛЕННАЯ ПАНЕЛЬ ДЕРЕВА ЭЛЕМЕНТОВ === */}
      {modelTree && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          width: '320px',
          maxHeight: '50%',
          overflowY: 'auto',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Элементы модели</h3>
          <div style={{ maxHeight: 'calc(50vh - 80px)', overflowY: 'auto' }}>
            <TreeNode 
              node={modelTree}
              onToggleVisibility={toggleElementVisibility}
              visibleMap={{
                visibility: meshVisibilityMap,
                expressIDToUUID: expressIDToUUIDMapRef.current
              }}
              onToggleExpand={handleToggleExpand}
              expandedSet={expandedNodes}
            />
          </div>
        </div>
      )}

      {/* Контейнер для 3D сцены */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* ... (панель свойств остается без изменений) */}
       {elementProperties && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '300px',
          maxHeight: '80%',
          overflowY: 'auto',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{ margin: 0, fontSize: '16px' }}>Свойства элемента</h3>
            <button 
              onClick={() => {
                setElementProperties(null);
                setSelectedElement(null);
              }}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
            Express ID: {selectedElement?.expressID}
          </div>
          <div style={{ maxHeight: 'calc(80vh - 100px)', overflowY: 'auto' }}>
            {renderProperties(elementProperties)}
          </div>
        </div>
      )}
    </div>
  );
};

// ... (функция renderProperties остается без изменений)
const renderProperties = (obj, depth = 0) => {
  if (!obj || typeof obj !== 'object') {
    return <span>{String(obj)}</span>;
  }

  if (depth > 5) {
    return <span>...</span>;
  }

  return Object.entries(obj).map(([key, value]) => {
    // Пропускаем технические поля
    if (key.startsWith('$') || key === 'type') {
      return null;
    }

    const isObject = value && typeof value === 'object';
    const isArray = Array.isArray(value);

    return (
      <div key={key} style={{ marginLeft: `${depth * 15}px`, marginBottom: '8px' }}>
        <div style={{ fontWeight: isObject || isArray ? 'bold' : 'normal', color: '#333' }}>
          {key}:
        </div>
        {isArray ? (
          <div style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
            Array[{value.length}]
          </div>
        ) : isObject ? (
          <div style={{ marginLeft: '10px' }}>
            {renderProperties(value, depth + 1)}
          </div>
        ) : (
          <div style={{ marginLeft: '10px', fontSize: '13px', color: '#666' }}>
            {String(value)}
          </div>
        )}
      </div>
    );
  }).filter(Boolean);
};


export default IFCViewer;