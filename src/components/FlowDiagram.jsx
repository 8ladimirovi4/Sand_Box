import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import IFCViewer from './IFCViewer';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Начальный узел' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'Процесс 1' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    data: { label: 'Процесс 2' },
    position: { x: 400, y: 125 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Конечный узел' },
    position: { x: 250, y: 250 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];

function FlowDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showIFCViewer, setShowIFCViewer] = useState(false);
  const [ifcModel, setIfcModel] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleModelLoaded = (model) => {
    setIfcModel(model);
    console.log('IFC модель загружена:', model);
  };

  const toggleView = () => {
    setShowIFCViewer(!showIFCViewer);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Панель переключения режимов */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '10px'
      }}>
        <button
          onClick={toggleView}
          style={{
            padding: '10px 20px',
            backgroundColor: showIFCViewer ? '#007ad9' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {showIFCViewer ? 'Показать диаграмму' : 'Показать 3D модель'}
        </button>
      </div>

      {showIFCViewer ? (
        <IFCViewer onModelLoaded={handleModelLoaded} />
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      )}
    </div>
  );
}

export default FlowDiagram;
