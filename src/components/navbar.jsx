import React from 'react';
import './navbar.css'; // link to custom CSS

const Navbar = () => {
  return (
    <>
      {/* Top navbar */}
      <div className="navbar-top bg-white border-bottom">
        <div className="container d-flex align-items-center justify-content-between py-2">
          
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img 
              src="https://img.icons8.com/ios-filled/50/228B22/shopping-cart.png" 
              alt="FreshCart" 
              width="30" 
              height="30"
              className="me-2"
            />
            <h4 className="mb-0 fw-bold text-dark">FreshCart</h4>
          </div>

          {/* Search Bar */}
          <div className="search-container flex-grow-1 mx-4">
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search for products"
              />
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="d-flex ms-5 align-items-center gap-3">
            <a href="#" className="text-decoration-none text-muted small">
              <i className="bi bi-geo-alt"></i> Set A Location
            </a>
            <a href="#" className="text-decoration-none text-muted small">
              Register
            </a>
            <a href="#" className="text-decoration-none text-muted small">
              <i className="bi bi-cart"></i> $93.55
            </a>
            <button className="btn btn-dark rounded-3">Sign In</button>
          </div>

        </div>
      </div>

      {/* Bottom navbar */}
      <div className="navbar-bottom bg-white">
        <div className="container d-flex align-items-center py-2">
          
          {/* All Categories Button */}
          <button className="btn btn-success me-3 rounded-3">
            <i className="bi bi-list"></i> All Categories
          </button>

          {/* Menu Links */}
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Shop</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Shop 1</a></li>
                <li><a className="dropdown-item" href="#">Shop 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Stores</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Store 1</a></li>
                <li><a className="dropdown-item" href="#">Store 2</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Mega menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Docs</a>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;
