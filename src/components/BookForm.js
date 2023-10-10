import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './form.css';

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
    <form className="add-form">
      <h2 className="form-header">Add a New Book</h2>
      <div className="add-form-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          className="form-input title-input-field"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
          className="form-input author-input-field"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
          className="form-input"
        />
        <button type="submit" onChange={handleSubmit} className="primary-action-button-big">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
