import React, { useState, useCallback, useEffect } from 'react';
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
import IFCNode from './IFCNode';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: 'ifc-1',
    type: 'ifcNode',
    data: { 
      label: 'IFC Модель',
      onMetadataClick: null // Будет установлено в useEffect
    },
    position: { x: 200, y: 200 },
  },
];

const initialEdges = [];

// Определение типов узлов
const nodeTypes = {
  ifcNode: IFCNode,
};

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

  // Устанавливаем обработчик клика для IFCNode
  useEffect(() => {
    const handleMetadataClick = (metadata) => {
      console.log('Metadata clicked:', metadata);
    };

    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === 'ifc-1') {
          return {
            ...node,
            data: {
              ...node.data,
              onMetadataClick: handleMetadataClick
            }
          };
        }
        return node;
      })
    );
  }, []);

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
          nodeTypes={nodeTypes}
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
