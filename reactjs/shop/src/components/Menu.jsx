import React, { useState } from 'react';

function Menu({ activePage = 'home' }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#/', id: 'home' },
    { label: 'Products', href: '#/products', id: 'products' },
    { label: 'Product Detail', href: '#/product-detail', id: 'product-detail' },
    { label: 'Cart', href: '#/cart', id: 'cart' },
    { label: 'Checkout', href: '#/checkout', id: 'checkout' },
    { label: 'Login', href: '#/login', id: 'login' },
    { label: 'Register', href: '#/register', id: 'register' },
    { label: 'Change Password', href: '#/change-password', id: 'change-password' },
    { label: 'Forgot Password', href: '#/forgot-password', id: 'forgot-password' },
  ];

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
        className={`collapse navbar-collapse sub-menu-bar ${isNavOpen ? 'show' : ''}`}
        id="navbarSupportedContent"
      >
        <ul id="nav" className="navbar-nav ms-auto">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={link.href}
                className={activePage === link.id ? 'active' : ''}
                aria-label="Toggle navigation"
                onClick={() => setIsNavOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
