import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'store/createAppSlice';
import { v4 } from 'uuid';
import { TemplateAction, TemplateState } from './types';
import { getTemplateAPI } from './API';

const templateInitialState: TemplateState = {
  data: {
    id: '',
    text: '',
    fact: ''
  },
  isLoading: false,
  error: undefined,
};

export const templateSlice = createAppSlice({
  name: 'TEMPLATE',
  initialState: templateInitialState,
  reducers: (create) => ({
    getTemplate: create.asyncThunk(
      async (arg: any, { rejectWithValue }) => {
        const response = await getTemplateAPI(rejectWithValue);
        return response;
      },
      {
        pending: (state: TemplateState) => {
          state.isLoading = true;
          state.error = undefined;
        },
        fulfilled: (state: TemplateState, action: PayloadAction<TemplateAction>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.data.id = v4();
        },
        rejected: (state: TemplateState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      }
    ),
  }),
  selectors: {
    template: (state: TemplateState) => state,
  },
});
export const templateSliceActions = templateSlice.actions;
export const templateSliceSelectors = templateSlice.selectors;
export default templateSlice;
