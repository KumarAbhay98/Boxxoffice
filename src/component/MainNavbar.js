import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`custom-navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="navbrand">
          Boxxoffice
        </Link>
        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/TrendingMovies" className="nav-link">
            More Movies
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
export default Navbar2;
