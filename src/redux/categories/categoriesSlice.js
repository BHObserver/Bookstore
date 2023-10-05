// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], // Initialize categories as an empty array
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
