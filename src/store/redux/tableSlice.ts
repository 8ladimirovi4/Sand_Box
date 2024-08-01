// formSlice.js
import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'store/createAppSlice';
import { FormAction, TableState } from 'store/redux/types';

const tableInitialState: TableState = {
    selected:1,
    data:[
      { id:1, name:"Alex Brown", email:"", age:25 },
      { id:2, name:"Dafna Korski", email:"dafna@yahoo.com", age:32 },
      { id:3, name:"Maksim Kozhukh", email:"mkozhukh@spam.com", age:27 }
    ],
    isLoading: false,
    error: undefined,
  };


  export const tableSlice = createAppSlice({
    name: 'DATA_TABLE',
    initialState: tableInitialState,
 
    reducers: (create) => ({
        setSelectedRow: create.reducer((state: TableState, action: PayloadAction<number>) => {
          state.selected = action.payload
return state
       }),
       setUserInfo: create.reducer((state: TableState, action: PayloadAction<FormAction>) => {
        console.log(action.payload)
        state.data.
        filter(row => row.id === state.selected).
        map(row => {row.name = action.payload.name, row.email = action.payload.email, row.age = action.payload.age})
        return
     }),
    }),

    selectors: {
      tablesValues: (state: TableState) => state
    },
  });
  export const tableSliceActions = tableSlice.actions;
  export const tableSliceSelectors = tableSlice.selectors;
  export default tableSlice;