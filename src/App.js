import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books, { ...newBook, id: Date.now() }];
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              handleAddBook={handleAddBook}
              books={books}
              handleDeleteBook={handleDeleteBook}
            />
)}
        />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

function HomePage({ handleAddBook, books, handleDeleteBook }) {
  return (
    <>
      <BookForm onSubmit={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </>
  );
}

function CategoriesPage() {
  // ... your component code ...

  return <h1>Categories</h1>;
}

// Prop type validation
HomePage.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the shape of each book object
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default App;
