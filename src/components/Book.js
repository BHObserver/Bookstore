import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'; // Import your book-related actions

const Book = ({ book }) => {
  const dispatch = useDispatch();

  // Handle book deletion using Redux action
  const handleDeleteBook = () => {
    dispatch(removeBook(book.item_id)); // Dispatch the removeBook action from your Redux store
  };

  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button" onClick={handleDeleteBook}>Delete</button>
    </div>
  );
};

// Add prop validation
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Book;
