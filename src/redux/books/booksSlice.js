import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Pc00pbzd4SGxBguXgNNm/books';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const fetchBooks = createAsyncThunk('books/getBook', async () => {
  try {
    const response = await axios.get(apiURL);
    const { data } = response;
    const extractedObjects = Object.entries(data)
      // eslint-disable-next-line camelcase
      .flatMap(([item_id, array]) => array.map((item) => ({ item_id, ...item })));

    return extractedObjects;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('books/addBookToAPI', async (book) => {
  await axios.post(apiURL, book);
  return book;
});

export const removeBook = createAsyncThunk('books/removeBookFromAPI', async (itemId) => {
  await axios.delete(`${apiURL}/${itemId}`);
  return itemId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
        state.loading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        // Remove the book with the matching itemId from the state
        state.books = state.books.filter((book) => book.item_id !== action.payload);
        state.loading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
