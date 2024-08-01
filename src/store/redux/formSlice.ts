// formSlice.js
import { createAppSlice } from 'store/createAppSlice';
import { FormState } from './types';

const formInitialState: FormState = {
    data: {
        name: '',
        email: '',
        age: '',
    },
    isLoading: false,
    error: undefined,
  };


  export const formSlice = createAppSlice({
    name: 'FORM',
    initialState: formInitialState,
 
  
    selectors: {
      formValues: (state: FormState) => state
    },
  });
  export const formSliceActions = formSlice.actions;
  export const formSliceSelectors = formSlice.selectors;
  export default formSlice;