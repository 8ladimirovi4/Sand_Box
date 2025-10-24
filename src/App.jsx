import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { Message } from 'primereact/message';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const menuItems = [
    {
      label: 'Главная',
      icon: 'pi pi-home',
      command: () => console.log('Главная')
    },
    {
      label: 'Компоненты',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Кнопки',
          icon: 'pi pi-circle',
          command: () => console.log('Кнопки')
        },
        {
          label: 'Формы',
          icon: 'pi pi-pencil',
          command: () => console.log('Формы')
        }
      ]
    },
    {
      label: 'Настройки',
      icon: 'pi pi-cog',
      command: () => console.log('Настройки')
    }
  ];

  const sampleData = [
    { id: 1, name: 'Иван Петров', email: 'ivan@example.com', status: 'active' },
    { id: 2, name: 'Мария Сидорова', email: 'maria@example.com', status: 'inactive' },
    { id: 3, name: 'Алексей Козлов', email: 'alex@example.com', status: 'active' }
  ];

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag 
        value={rowData.status === 'active' ? 'Активен' : 'Неактивен'} 
        severity={rowData.status === 'active' ? 'success' : 'danger'} 
      />
    );
  };

  const handleAddMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { 
        id: Date.now(), 
        text: inputValue, 
        timestamp: new Date().toLocaleTimeString() 
      }]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <Menubar model={menuItems} className="mb-4" />
      
      <div className="grid">
        <div className="col-12">
          <Message 
            severity="info" 
            text="Добро пожаловать в базовое приложение React с PrimeReact!" 
            className="mb-4" 
          />
        </div>

        <div className="col-12 md:col-6">
          <Card title="Форма ввода" className="h-full">
            <div className="p-fluid">
              <div className="field">
                <label htmlFor="input">Введите сообщение:</label>
                <InputText 
                  id="input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Введите текст..."
                  className="w-full"
                />
              </div>
              <Button 
                label="Добавить" 
                icon="pi pi-plus" 
                onClick={handleAddMessage}
                className="w-full"
              />
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6">
          <Panel header="Список сообщений" className="h-full">
            {messages.length === 0 ? (
              <p className="text-center text-500">Сообщений пока нет</p>
            ) : (
              <div className="message-list">
                {messages.map((message) => (
                  <div key={message.id} className="message-item p-2 mb-2 border-1 border-200 border-round">
                    <div className="flex justify-content-between align-items-center">
                      <span>{message.text}</span>
                      <small className="text-500">{message.timestamp}</small>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Panel>
        </div>

        <div className="col-12">
          <Card title="Таблица данных">
            <DataTable 
              value={sampleData} 
              paginator 
              rows={5} 
              rowsPerPageOptions={[5, 10, 25]}
              className="datatable-responsive"
            >
              <Column field="id" header="ID" sortable />
              <Column field="name" header="Имя" sortable />
              <Column field="email" header="Email" sortable />
              <Column field="status" header="Статус" body={statusBodyTemplate} />
            </DataTable>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
