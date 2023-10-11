import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './container.css';
import './progress.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="book-details">
      <div className="book-content">
        <div className="book-meta">
          <h4 className="book-genre">{book.category}</h4>
          <h2 className="book-title">{book.title}</h2>
          <h6 className="book-author-name">{book.author}</h6>
          <div className="action-buttons">
            <button type="button" className="button-outline">Comments</button>
            <div className="vertical-divider" />
            <button
              type="button"
              className="button-outline"
              onClick={handleDeleteBook}
            >
              Delete
            </button>
            <div className="vertical-divider" />
            <button type="button" className="button-outline">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress-bar" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">
              { Math.floor(Math.random() * (75 - 40 + 1)) + 40 }
              %
            </p>
            <p className="completed-label">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-info">
            <div>
              <p className="chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">
                Chapter
                {' '}
                { Math.floor(Math.random() * 30) + 1 }
              </p>
            </div>
            <div>
              <button type="button" className="primary-action-button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default Book;
