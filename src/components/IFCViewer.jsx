import React, { useEffect, useRef, useState } from 'react';
import { IFCLoader } from 'web-ifc-three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [elementProperties, setElementProperties] = useState(null);

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
        // Получаем все meshes из модели
        const allMeshes = [];
        ifcModelRef.current.traverse((child) => {
          if (child.isMesh) {
            allMeshes.push(child);
          }
        });
        
        console.log('Raycasting against', allMeshes.length, 'meshes');
        
        const intersects = raycaster.intersectObjects(allMeshes.length > 0 ? allMeshes : [ifcModelRef.current], true);
        
        console.log('Intersects found:', intersects.length);
        
        if (intersects.length > 0) {
          const intersection = intersects[0];
          
          console.log('Intersected object:', intersection.object);
          console.log('Face index:', intersection.faceIndex);
          
          try {
            let expressID = null;
            
            // Попытка получить Express ID из атрибутов геометрии
            // Правильный способ согласно реализации web-ifc-three
            if (intersection.object.geometry?.attributes) {
              const attrs = intersection.object.geometry.attributes;
              console.log('Available attributes:', Object.keys(attrs));
              
              // Ищем атрибут expressID (может быть с разными именами)
              const idAttr = attrs.expressID || attrs.id || attrs.IFC;
              
              if (idAttr && intersection.object.geometry.index) {
                console.log('Getting expressID from geometry using faceIndex');
                const geoIndex = intersection.object.geometry.index.array;
                const vertexIndex = geoIndex[3 * intersection.faceIndex];
                expressID = idAttr.getX(vertexIndex);
                console.log('Express ID from geometry:', expressID, 'vertexIndex:', vertexIndex);
              }
            }
            
            // Альтернативный способ - получение Express ID через userData
            if (!expressID && intersection.object.userData?.expressID) {
              console.log('Getting expressID from userData');
              expressID = intersection.object.userData.expressID;
            }

            // Еще один способ - через геометрию напрямую
            if (!expressID && intersection.object.geometry) {
              try {
                console.log('Attempting to get expressID via IFCManager');
                // Используем метод IFCManager для получения Express ID
                const geom = intersection.object.geometry;
                if (ifcLoader.ifcManager.getExpressId) {
                  expressID = ifcLoader.ifcManager.getExpressId(geom, intersection.faceIndex);
                  console.log('Express ID from IFCManager:', expressID);
                }
              } catch (e) {
                console.log('Alternative express ID retrieval failed:', e);
              }
            }

            console.log('Final Express ID:', expressID);
            console.log('Model ID:', modelIDRef.current);

            // Сбрасываем предыдущую подсветку
            if (selectedElementRef.current) {
             // selectedElementRef.current.material.emissive.setHex(0x000000);
            }

            // Подсвечиваем выбранный элемент
            if (intersection.object.material) {
             // intersection.object.material.emissive.setHex(0x00ff00);
              selectedElementRef.current = intersection.object;

              // Получаем свойства элемента
              if (expressID && modelIDRef.current !== null) {
                try {
                  const props = await ifcLoader.ifcManager.getItemProperties(modelIDRef.current, expressID);
                  console.log('Element properties:', props);
                  setElementProperties(props);
                  setSelectedElement({
                    expressID,
                    type: props.type || 'Unknown',
                    ...props
                  });
                } catch (err) {
                  console.error('Error getting properties:', err);
                  setElementProperties(null);
                  setSelectedElement(null);
                }
              }
            }
          } catch (error) {
            console.error('Error processing click:', error);
          }
        } else {
          // Клик по пустому пространству
          if (selectedElementRef.current) {
           // selectedElementRef.current.material.emissive.setHex(0x000000);
          }
          setSelectedElement(null);
          setElementProperties(null);
        }
      }
    };

    renderer.domElement.addEventListener('click', onMouseClick);

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Обработка изменения размера окна
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
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
      
      // Удаляем предыдущую модель если есть
      if (ifcModelRef.current) {
        sceneRef.current.remove(ifcModelRef.current);
        ifcModelRef.current = null;
      }

      // Сбрасываем выбор
      if (selectedElementRef.current) {
        selectedElementRef.current.material.emissive.setHex(0x000000);
      }
      setSelectedElement(null);
      setElementProperties(null);
      
      // Загружаем IFC модель
      const ifcModel = await ifcLoaderRef.current.loadAsync(url);
      
      // Сохраняем ссылку на модель
      ifcModelRef.current = ifcModel;
      
      // Сохраняем ID модели
      modelIDRef.current = ifcModel.modelID;
      
      // Выводим структуру модели для отладки
      console.log('=== IFC Model Structure ===');
      console.log('Model ID:', ifcModel.modelID);
      console.log('Model children count:', ifcModel.children.length);
      console.log('Model type:', ifcModel.type);
      
      // Логируем все дети модели
      ifcModel.traverse((child) => {
        if (child.isMesh) {
          console.log('Mesh found:', child.name, 'Type:', child.type);
          if (child.geometry) {
            console.log('  - Geometry has attributes:', Object.keys(child.geometry.attributes));
          }
          if (child.userData) {
            console.log('  - userData:', child.userData);
          }
        }
      });
      
      // Добавляем модель в сцену
      sceneRef.current.add(ifcModel);
      
      // Центрируем камеру на модели
      const box = new THREE.Box3().setFromObject(ifcModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5; // Добавляем отступ

      cameraRef.current.position.set(center.x, center.y, cameraZ);
      cameraRef.current.lookAt(center);

      // Уведомляем родительский компонент о загрузке модели
      if (onModelLoaded) {
        onModelLoaded(ifcModel);
      }

      // Освобождаем URL
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Ошибка загрузки IFC файла:', err);
      setError('Ошибка загрузки файла. Убедитесь, что файл является корректным IFC файлом.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Панель загрузки файла */}
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

      {/* Контейнер для 3D сцены */}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      {/* Панель свойств элемента */}
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
                if (selectedElementRef.current) {
                  selectedElementRef.current.material.emissive.setHex(0x000000);
                }
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

// Функция для отображения свойств объекта
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
