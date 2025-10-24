import React, { useRef, useState, useEffect } from 'react';
import { Handle, Position } from '@xyflow/react';
import { IFCLoader } from 'web-ifc-three';
import * as THREE from 'three';

const IFCNode = ({ data, isConnectable }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const ifcLoaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasModel, setHasModel] = useState(false);
  const [model, setModel] = useState(null);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Создание мини-сцены для узла
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    sceneRef.current = scene;

    // Создание камеры
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Создание рендерера
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(200, 150);
    renderer.setClearColor(0xf8f9fa, 1);
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Настройка освещения
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Инициализация IFCLoader
    const ifcLoader = new IFCLoader();
    ifcLoader.ifcManager.setWasmPath('/wasm/');
    ifcLoaderRef.current = ifcLoader;

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.005; // Медленное вращение модели
      }
      renderer.render(scene, camera);
    };
    animate();

    // Очистка при размонтировании
    return () => {
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
      
      // Загружаем IFC модель
      const ifcModel = await ifcLoaderRef.current.loadAsync(url);
      
      // Удаляем предыдущую модель если есть
      if (model) {
        sceneRef.current.remove(model);
      }
      
      // Добавляем новую модель в сцену
      sceneRef.current.add(ifcModel);
      setModel(ifcModel);
      setHasModel(true);
      
      // Извлекаем метаданные
      const extractedMetadata = await extractMetadata(ifcModel);
      
      // Центрируем камеру на модели
      const box = new THREE.Box3().setFromObject(ifcModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5;

      cameraRef.current.position.set(center.x, center.y, cameraZ);
      cameraRef.current.lookAt(center);

      // Освобождаем URL
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Ошибка загрузки IFC файла:', err);
      setError('Ошибка загрузки файла');
    } finally {
      setIsLoading(false);
    }
  };

  const clearModel = () => {
    if (model) {
      sceneRef.current.remove(model);
      setModel(null);
      setHasModel(false);
      setMetadata(null);
    }
  };

  const extractMetadata = async (ifcModel) => {
    try {
      const metadata = {
        name: 'IFC Модель',
        description: 'Загруженная IFC модель',
        elementCount: 0,
        typeCount: 0,
        materials: {},
        properties: {},
        project: {
          name: 'IFC Проект',
          description: 'Загруженный IFC файл'
        }
      };

      // Подсчитываем элементы и собираем информацию
      const types = new Set();
      const materials = new Set();
      
      ifcModel.traverse((child) => {
        if (child.isMesh) {
          metadata.elementCount++;
          
          // Собираем информацию о материалах
          if (child.material) {
            const materialName = child.material.name || 'Материал без названия';
            materials.add(materialName);
            
            if (!metadata.materials[materialName]) {
              metadata.materials[materialName] = 0;
            }
            metadata.materials[materialName]++;
          }
          
          // Собираем типы элементов
          if (child.userData && child.userData.ifcType) {
            types.add(child.userData.ifcType);
          }
        }
      });

      metadata.typeCount = types.size;
      metadata.materialCount = materials.size;

      // Получаем размер файла из userData модели
      if (ifcModel.userData && ifcModel.userData.fileSize) {
        metadata.fileSize = ifcModel.userData.fileSize;
      }

      // Добавляем информацию о геометрии
      const box = new THREE.Box3().setFromObject(ifcModel);
      const size = box.getSize(new THREE.Vector3());
      metadata.dimensions = {
        width: size.x.toFixed(2),
        height: size.y.toFixed(2),
        depth: size.z.toFixed(2)
      };

      // Добавляем статистику
      metadata.statistics = {
        totalElements: metadata.elementCount,
        uniqueTypes: metadata.typeCount,
        uniqueMaterials: metadata.materialCount,
        boundingBox: metadata.dimensions
      };

      // Добавляем единицы измерения (по умолчанию метры)
      metadata.units = {
        length: 'метры',
        area: 'квадратные метры',
        volume: 'кубические метры',
        angle: 'градусы'
      };

      setMetadata(metadata);
      return metadata;
    } catch (error) {
      console.error('Ошибка извлечения метаданных:', error);
      
      // Возвращаем базовые метаданные даже при ошибке
      const fallbackMetadata = {
        name: 'IFC Модель',
        description: 'Загруженная IFC модель',
        elementCount: 0,
        typeCount: 0,
        materials: {},
        properties: {},
        project: {
          name: 'IFC Проект',
          description: 'Загруженный IFC файл'
        },
        error: 'Не удалось извлечь полные метаданные'
      };
      
      setMetadata(fallbackMetadata);
      return fallbackMetadata;
    }
  };

  const handleModelClick = () => {
    if (metadata && data.onMetadataClick) {
      data.onMetadataClick(metadata);
    }
  };

  return (
    <div style={{
      background: 'white',
      border: '2px solid #007ad9',
      borderRadius: '8px',
      padding: '10px',
      minWidth: '220px',
      minHeight: '180px',
      position: 'relative',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{ background: '#007ad9' }}
      />
      
      <div style={{ marginBottom: '10px' }}>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '14px', 
          color: '#007ad9',
          textAlign: 'center'
        }}>
          IFC Модель
        </h4>
        
        {!hasModel && (
          <div style={{ textAlign: 'center' }}>
            <input
              type="file"
              accept=".ifc"
              onChange={handleFileLoad}
              style={{ 
                fontSize: '12px',
                marginBottom: '8px',
                width: '100%'
              }}
            />
            {isLoading && (
              <div style={{ color: '#007ad9', fontSize: '12px' }}>
                Загрузка...
              </div>
            )}
            {error && (
              <div style={{ color: '#e74c3c', fontSize: '12px' }}>
                {error}
              </div>
            )}
          </div>
        )}
        
        {hasModel && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={clearModel}
              style={{
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
                marginBottom: '8px'
              }}
            >
              Удалить модель
            </button>
          </div>
        )}
      </div>

      {/* Контейнер для 3D превью */}
      <div 
        ref={containerRef} 
        onClick={handleModelClick}
        style={{ 
          width: '200px', 
          height: '150px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden',
          margin: '0 auto',
          cursor: hasModel ? 'pointer' : 'default'
        }} 
        title={hasModel ? 'Кликните для просмотра метаданных' : ''}
      />
      
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{ background: '#007ad9' }}
      />
    </div>
  );
};

export default IFCNode;
