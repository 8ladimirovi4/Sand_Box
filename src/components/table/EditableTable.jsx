import React, { useState } from 'react';
import { Table, Input, Button, Form } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const EditableTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  const [editingKey, setEditingKey] = useState('');
  const [form] = Form.useForm();

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="name"
            style={{ margin: 0 }}
            rules={[{ required: true, message: 'Please Input Name!' }]}
          >
            <Input />
          </Form.Item>
        ) : (
          record.name
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      render: (text) => text,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (text) => text,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
              icon={<SaveOutlined />}
            >
              Save
            </Button>
          </span>
        ) : (
          <Button
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: ({ children, ...restProps }) => {
              const { record, editable, dataIndex, title, editing } = restProps;
              if (!editable) {
                return <td {...restProps}>{children}</td>;
              }
              return (
                <td {...restProps}>
                  {editing ? (
                    <Form.Item
                      name={dataIndex}
                      style={{ margin: 0 }}
                      rules={[
                        {
                          required: true,
                          message: `Please Input ${title}!`,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  ) : (
                    children
                  )}
                </td>
              );
            },
          },
        }}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default EditableTable;
