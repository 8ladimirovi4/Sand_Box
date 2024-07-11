import React, { useState } from 'react';
import { Table, Tree } from 'antd';

const { TreeNode } = Tree;

const data = [
  {
    key: '1',
    name: 'Parent 1',
    treeData: [
      {
        key: '1-1',
        name: 'Child 1-1',
      },
      {
        key: '1-2',
        name: 'Child 1-2',
      },
    ],
  },
  {
    key: '2',
    name: 'Parent 2',
    treeData: [
      {
        key: '2-1',
        name: 'Child 2-1',
      },
    ],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a>Edit</a>&nbsp;
        <a>Delete</a>
      </span>
    ),
  },
];

const TreeTable = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleExpand = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
  };

  return (
    <Table
      dataSource={data}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <Tree
            showLine
            expandedKeys={expandedKeys}
            onExpand={handleExpand}
           
          />
        ),
      }}
    />
  );
};

export default TreeTable;
