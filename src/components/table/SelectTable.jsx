import React from 'react';
import { Table, Select } from 'antd';

const { Option } = Select;

const SelectTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      render: (text, record) => (
        <Select
          defaultValue={record.position}
          onChange={(value) => handleSelectChange(value, record.key)}
        >
          <Option value="Manager">Manager</Option>
          <Option value="Developer">Developer</Option>
          <Option value="Designer">Designer</Option>
          <Option value="Tester">Tester</Option>
        </Select>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      position: 'Manager',
    },
    {
      key: '2',
      name: 'Jim Green',
      position: 'Developer',
    },
    {
      key: '3',
      name: 'Joe Black',
      position: 'Designer',
    },
    {
      key: '4',
      name: 'Tom Red',
      position: 'Tester',
    },
    {
      key: '5',
      name: 'Jack White',
      position: '', // Пустая строка, если позиция не задана
    },
  ];

  const handleSelectChange = (value, key) => {
    console.log(`Selected ${value} for row ${key}`);
    // Логика для обработки изменения значения
  };

  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default SelectTable;
