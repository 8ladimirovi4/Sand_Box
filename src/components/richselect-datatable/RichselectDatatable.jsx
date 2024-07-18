import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';

export const richselectTableRows = [
  { id: 1, name: 'John Doe', age: 30, select: 'Option 1' },
  { id: 2, name: 'Jane Smith', age: 25, select: 'Option 2' },
  { id: 3, name: 'Sam Green', age: 35, select: '' },
];
export const richselectTablecolumns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'select', label: 'Select', options: ['Option 1', 'Option 2', 'Option 3'] },
];

const RichselectDatatable = ({ rows, columns }) => {
  const handleSelectChange = (event, rowIndex) => {
    // Обработчик изменения значения в select
    const { value } = event.target;
    console.log(`Row ${rowIndex} selected value: ${value}`);
    // Здесь можно обновить состояние или выполнить другую логику
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id === 'select' ? (
                    <Select
                      value={row.select}
                      onChange={(event) => handleSelectChange(event, rowIndex)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {column.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RichselectDatatable;
