// Тестовые данные
const testData = [
  { id: 1, name: 'Сигнал 1', category: 'Температура', status: 'Активен', value: 25.5 },
  { id: 2, name: 'Сигнал 2', category: 'Давление', status: 'Неактивен', value: 1.2 },
  { id: 3, name: 'Сигнал 3', category: 'Температура', status: 'Активен', value: 30.1 },
  { id: 4, name: 'Сигнал 4', category: 'Скорость', status: 'Активен', value: 150 },
  { id: 5, name: 'Сигнал 5', category: 'Давление', status: 'Ошибка', value: 0.8 },
  { id: 6, name: 'Сигнал 6', category: 'Скорость', status: 'Активен', value: 200 },
  { id: 7, name: 'Сигнал 7', category: 'Температура', status: 'Неактивен', value: 18.3 },
  { id: 8, name: 'Сигнал 8', category: 'Уровень', status: 'Активен', value: 75 },
  { id: 9, name: 'Сигнал 9', category: 'Уровень', status: 'Ошибка', value: 95 },
  { id: 10, name: 'Сигнал 10', category: 'Скорость', status: 'Активен', value: 180 }
];

// Функция обработки фильтрации
const handleFilterChange = (filteredData) => {
  console.log('Отфильтрованные данные:', filteredData);
  console.log('Количество элементов:', filteredData.length);
  
  // Здесь можно обновить состояние или передать данные в родительский компонент
  // setFilteredData(filteredData);
  // onDataChange?.(filteredData);
};

// Полный пример компонента для тестирования
import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'primereact/multiselect';

export const MultiSelectComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [availableOptions, setAvailableOptions] = useState([]);
  const [filteredData, setFilteredData] = useState(testData);

  // Получение уникальных категорий для фильтра
  useEffect(() => {
    const uniqueCategories = [...new Set(testData.map(item => item.category))];
    const options = uniqueCategories.map(category => ({
      label: category,
      value: category
    }));
    setAvailableOptions(options);
  }, []);

  const handleFilterChange = (e) => {
    setSelectedFilters(e.value);
    
    // Фильтрация данных
    const filtered = e.value.length > 0 
      ? testData.filter(item => e.value.includes(item.category))
      : testData;
    
    setFilteredData(filtered);
    
    // Логирование для отладки
    console.log('Выбранные фильтры:', e.value);
    console.log('Отфильтрованные данные:', filtered);
  };

  return (
    <div className="p-fluid">
      <h3>Тест фильтра MultiSelect</h3>
      
      <MultiSelect
        value={selectedFilters}
        options={availableOptions}
        onChange={handleFilterChange}
        placeholder="Введите для поиска категорий..."
        filter
        filterBy="label"
        showClear
        display="chip"
        maxSelectedLabels={3}
        className="w-full"
      />
      
      <div style={{ marginTop: '20px' }}>
        <h4>Результаты фильтрации ({filteredData.length} элементов):</h4>
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          {filteredData.map(item => (
            <div key={item.id} style={{ 
              padding: '8px', 
              border: '1px solid #ddd', 
              margin: '4px 0',
              borderRadius: '4px'
            }}>
              <strong>{item.name}</strong> - {item.category} 
              <span style={{ 
                color: item.status === 'Активен' ? 'green' : 
                      item.status === 'Ошибка' ? 'red' : 'gray',
                marginLeft: '10px'
              }}>
                ({item.status})
              </span>
              <span style={{ float: 'right' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};