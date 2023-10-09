import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = Math.floor(Math.random() * (10 ** 8)).toString(16);
    const newBook = {
      item_id: uniqueId,
      title,
      author,
      category,
    };

    // Dispatch the addBook action with the new book
    dispatch(addBook(newBook));

    // Clear the form inputs
    setTitle('');
    setAuthor('');
    setCategory('');
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
      <input
        type="text"
        placeholder="Catagory"
        value={category}
        onChange={handleCategory}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
