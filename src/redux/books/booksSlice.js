import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
