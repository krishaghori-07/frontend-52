import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteCart() {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <>
      <Header activePage="cart" />

      <div className="shopping-cart section">
        <div className="container">
          <div className="cart-list-head">
            {/* Cart List Title */}
            <div className="cart-list-title">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-3 col-12">
                  <p>Product Name</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Quantity</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Price</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Total</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <p>Remove</p>
                </div>
              </div>
            </div>
            {/* End Cart List Title */}

            {/* Cart Single List */}
            <div className="cart-single-list">
              <div className="row align-items-center">
                <div className="col-lg-1 col-md-1 col-12">
                  <a href="#/product-detail">
                    <img src={`${publicUrl}/assets/images/cart/01.jpg`} alt="Canon EOS M50" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                  <h5 className="product-name">
                    <a href="#/product-detail">Canon EOS M50 Mirrorless Camera</a>
                  </h5>
                </div>
                <div className="col-lg-2 col-md-2 col-12">2</div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>$910.00</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>$1820.00</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <a className="remove-item" href="#!">
                    <i className="lni lni-close"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-12"></div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="right">
                      <ul>
                        <li>Cart Subtotal<span>$2560.00</span></li>
                        <li>Shipping<span>Free</span></li>
                        <li className="last">You Pay<span>$2531.00</span></li>
                      </ul>
                      <div className="button">
                        <a href="#/checkout" className="btn">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Total Amount */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteCart;
