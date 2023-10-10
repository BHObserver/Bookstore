import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <nav className="header">
    <a className="nav-brand" href="/">Bookstore CMS</a>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link to="/" className="header-link active">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className="header-link">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
