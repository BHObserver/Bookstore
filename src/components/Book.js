import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (
  <div>
    <p>{book.title}</p>
    <p>{book.author}</p>
    <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

// Add prop validation
Book.propTypes = {
  onDelete: PropTypes.func.isRequired, // onDelete should be a function and is required
  book: PropTypes.shape({
    title: PropTypes.string.isRequired, // title should be a string and is required
    author: PropTypes.string.isRequired, // author should be a string and is required
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // id can be a string or number and is required
  }).isRequired,
};

export default Book;
