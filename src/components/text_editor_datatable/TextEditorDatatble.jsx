import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

export const textEditorTableColumns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' },
  ];
  
  export const textEditorTableRows = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Sam Green', age: 35, email: 'sam@example.com' },
  ];

const TextEditorDatatable = ({ initialRows, columns }) => {
  const [rows, setRows] = useState(initialRows);
  const [editIdx, setEditIdx] = useState(-1);

  const handleChange = (e, rowIndex, columnId) => {
    const { value } = e.target;
    const updatedRows = rows.map((row, index) =>
      index === rowIndex ? { ...row, [columnId]: value } : row
    );
    setRows(updatedRows);
  };

  const startEditing = (index) => {
    setEditIdx(index);
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {editIdx === rowIndex ? (
                    <TextField
                      value={row[column.id]}
                      onChange={(e) => handleChange(e, rowIndex, column.id)}
                    />
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
              <TableCell>
                {editIdx === rowIndex ? (
                  <IconButton onClick={stopEditing}>
                    <SaveIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => startEditing(rowIndex)}>
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TextEditorDatatable;
