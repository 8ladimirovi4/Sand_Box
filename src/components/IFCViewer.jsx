import React, { useEffect, useRef, useState } from 'react';
import { IFCLoader } from 'web-ifc-three';
import * as THREE from 'three';

const IFCViewer = ({ onModelLoaded }) => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const ifcLoaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);
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
    </div>
  );
};

export default IFCViewer;
