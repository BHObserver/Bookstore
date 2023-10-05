import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'; // Import your book-related actions
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  // Handle book deletion using Redux action
  const handleDeleteBook = (id) => {
    dispatch(removeBook(id)); // Dispatch the removeBook action from your Redux store
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={() => handleDeleteBook(book.id)} />
      ))}
    </div>
  );
};

export default BookList;
