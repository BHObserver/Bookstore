import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { addBook } from '../redux/books/booksSlice';

function HomePage() {
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <BookList />
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default HomePage;
