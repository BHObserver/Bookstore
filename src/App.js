import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import Navigation from './components/Navigation'; // Import Navigation

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        {' '}
        {/* Include the Navigation component */}
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/categories"
            element={<CategoriesPage />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
