// formSlice.js
import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'store/createAppSlice';
import { FormAction, TablelateState } from './types';

const tableInitialState: TablelateState = {
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
 
    reducers: (create: any) => ({
        setSelectedRow: create.reducer((state: TablelateState, action: PayloadAction<number>) => {
          state.selected = action.payload

       }),
       setUserInfo: create.reducer((state: TablelateState, action: PayloadAction<FormAction>) => {
        console.log('===> state.selected', state.selected)
        state.data.
        filter(row => row.id === state.selected).
        map(row => {row.name = action.payload.name, row.email = action.payload.email, row.age = action.payload.age})
     }),
    }),

    selectors: {
      tablesValues: (state: TablelateState) => state
    },
  });
  export const tableSliceActions = tableSlice.actions;
  export const tableSliceSelectors = tableSlice.selectors;
  export default tableSlice;