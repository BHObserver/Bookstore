import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: `item${books.length + 1}`,
      title,
      author,
    };

    // Dispatch the addBook action with the new book
    dispatch(addBook(newBook));

    // Clear the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthor}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
