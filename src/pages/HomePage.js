import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { addBook, removeBook } from '../redux/books/booksSlice';

function HomePage() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <BookForm onSubmit={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
}

export default HomePage;
