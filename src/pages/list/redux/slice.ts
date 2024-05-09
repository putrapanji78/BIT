import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IList} from '../types';
import {initialState} from './state';

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<IList[]>) => {
      state.lists.push(...action.payload);
    },
    updateList(state, action: PayloadAction<{id: number; newList: IList}>) {
      const {id, newList} = action.payload;
      state.lists = state.lists.map(item => (item.id === id ? newList : item));
    },
    deleteList(state, action: PayloadAction<number>) {
      const idDelete = action.payload;
      state.lists = state.lists.filter(item => item.id !== idDelete);
    },
  },
});
export const { deleteList, updateList, addList} = listSlice.actions;
export default listSlice.reducer;

