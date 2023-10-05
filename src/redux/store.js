// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice'; // Import the categories reducer

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer, // Include the categories reducer
  },
});

export default store;
