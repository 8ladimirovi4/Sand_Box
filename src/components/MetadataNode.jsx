import React from 'react';
import { Handle, Position } from '@xyflow/react';

const MetadataNode = ({ data, isConnectable }) => {
  const { metadata, isLoading, error } = data;

  const formatValue = (value) => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  };

  const renderMetadataSection = (title, items) => {
    if (!items || Object.keys(items).length === 0) return null;
    
    return (
      <div style={{ marginBottom: '12px' }}>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '14px', 
          color: '#007ad9',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '4px'
        }}>
          {title}
        </h4>
        <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
          {Object.entries(items).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '4px' }}>
              <strong style={{ color: '#333' }}>{key}:</strong>
              <span style={{ color: '#666', marginLeft: '8px' }}>
                {formatValue(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      background: 'white',
      border: '2px solid #28a745',
      borderRadius: '8px',
      padding: '15px',
      minWidth: '300px',
      maxWidth: '400px',
      position: 'relative',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxHeight: '500px',
      overflowY: 'auto'
    }}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ background: '#28a745' }}
      />
      
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ 
          margin: '0 0 12px 0', 
          fontSize: '16px', 
          color: '#28a745',
          textAlign: 'center',
          borderBottom: '2px solid #28a745',
          paddingBottom: '8px'
        }}>
          Метаданные IFC
        </h3>
        
        {isLoading && (
          <div style={{ 
            textAlign: 'center', 
            color: '#007ad9', 
            fontSize: '14px',
            padding: '20px'
          }}>
            Загрузка метаданных...
          </div>
        )}
        
        {error && (
          <div style={{ 
            textAlign: 'center', 
            color: '#e74c3c', 
            fontSize: '14px',
            padding: '20px'
          }}>
            Ошибка: {error}
          </div>
        )}
        
        {metadata && !isLoading && !error && (
          <div>
            {renderMetadataSection('Общая информация', {
              'Название': metadata.name || metadata.title,
              'Описание': metadata.description,
              'Версия IFC': metadata.ifcVersion,
              'Автор': metadata.author,
              'Организация': metadata.organization,
              'Дата создания': metadata.creationDate,
              'Дата модификации': metadata.modificationDate
            })}
            
            {renderMetadataSection('Единицы измерения', {
              'Длина': metadata.units?.length,
              'Площадь': metadata.units?.area,
              'Объем': metadata.units?.volume,
              'Угол': metadata.units?.angle
            })}
            
            {renderMetadataSection('Статистика', {
              'Количество элементов': metadata.elementCount,
              'Количество типов': metadata.typeCount,
              'Количество материалов': metadata.materialCount,
              'Размер файла': metadata.fileSize,
              'Размеры модели': metadata.dimensions ? 
                `${metadata.dimensions.width} × ${metadata.dimensions.height} × ${metadata.dimensions.depth}` : 'N/A'
            })}
            
            {renderMetadataSection('Проект', {
              'Название проекта': metadata.project?.name,
              'Описание проекта': metadata.project?.description,
              'Местоположение': metadata.project?.location,
              'Клиент': metadata.project?.client
            })}
            
            {metadata.materials && Object.keys(metadata.materials).length > 0 && 
              renderMetadataSection('Материалы', metadata.materials)
            }
            
            {metadata.properties && Object.keys(metadata.properties).length > 0 && 
              renderMetadataSection('Свойства', metadata.properties)
            }
            
            {metadata.error && 
              renderMetadataSection('Предупреждения', {
                'Ошибка извлечения': metadata.error
              })
            }
          </div>
        )}
        
        {!metadata && !isLoading && !error && (
          <div style={{ 
            textAlign: 'center', 
            color: '#6c757d', 
            fontSize: '14px',
            padding: '20px'
          }}>
            Кликните на IFC модель для загрузки метаданных
          </div>
        )}
      </div>
      
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ background: '#28a745' }}
      />
    </div>
  );
};

export default MetadataNode;
