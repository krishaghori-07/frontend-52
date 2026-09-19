import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Menu({ activePage = 'home' }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className={`navbar-toggler mobile-menu-btn ${isNavOpen ? 'active' : ''}`}
        type="button"
        onClick={toggleNav}
        aria-controls="navbarSupportedContent"
        aria-expanded={isNavOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      <div
        className='collapse navbar-collapse sub-menu-bar' 
        id="navbarSupportedContent" >
        <ul id="nav" className="navbar-nav ms-auto">
          <Link
            to="/" className='nav-link'
            aria-label="Toggle navigation" >
              Home 
          </Link>
           <Link
            to="/shop" className='nav-link'
            aria-label="Toggle navigation" >
              Shop 
          </Link>
           <Link
            to="/login" className='nav-link'
            aria-label="Toggle navigation" >
              Login 
          </Link>
           <Link
            to="/register" className='nav-link'
            aria-label="Toggle navigation" >
              Register 
          </Link>
           <Link
            to="/forgot-password" className='nav-link'
            aria-label="Toggle navigation" >
              Forgot password 
          </Link>
           <Link
            to="/Cart" className='nav-link'
            aria-label="Toggle navigation" >
              Cart 
          </Link>
           <Link
            to="/checkout" className='nav-link'
            aria-label="Toggle navigation" >
              Checkout 
          </Link>
           <Link
            to="/change-password" className='nav-link'
            aria-label="Toggle navigation" >
              Change Password 
          </Link>
           <Link
            to="/" className='nav-link'
            aria-label="Toggle navigation" >
              Logout   
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
