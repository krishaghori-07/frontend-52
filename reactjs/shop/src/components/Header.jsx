import React from 'react';
import Menu from './Menu';

function Header({ activePage = 'home' }) {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <header className="header navbar-area">
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center"></div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-7">
              <a className="navbar-brand" href="#/">
                <img src={`${publicUrl}/assets/images/logo/logo.svg`} alt="Logo" />
              </a>
            </div>
            <div className="col-lg-5 col-md-7 d-xs-none"></div>
            <div className="col-lg-4 col-md-2 col-5">
              <div className="middle-right-area">
                <div className="nav-hotline">
                  <h3>
                    <i className="lni lni-phone"></i>
                    <span>Hotline:</span> (+100) 123 456 7890
                  </h3>
                </div>
                <div className="navbar-cart">
                  <div className="wishlist">
                    <a href="#/cart">
                      <i className="lni lni-heart"></i>
                    </a>
                  </div>
                  <div className="cart-items">
                    <a href="#/cart" className="main-btn">
                      <i className="lni lni-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="nav-inner">
              <Menu activePage={activePage} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
