import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteProducts() {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <>
      <Header activePage="products" />

      <section className="product-grids section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4">Products</h3>
              <div className="product-grids-head">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-grid"
                    role="tabpanel"
                    aria-labelledby="nav-grid-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Product */}
                        <div className="single-product">
                          <div className="product-image">
                            <img
                              src={`${publicUrl}/assets/images/products/product-1.jpg`}
                              alt="Xiaomi Mi Band 5"
                            />
                            <div className="button">
                              <a href="#/cart" className="btn">
                                <i className="lni lni-cart"></i> Add to Cart
                              </a>
                            </div>
                          </div>
                          <div className="product-info">
                            <span className="category">Watches</span>
                            <h4 className="title">
                              <a href="#/product-detail">Xiaomi Mi Band 5</a>
                            </h4>
                            <ul className="review">
                              <li><i className="lni lni-star-filled"></i></li>
                              <li><i className="lni lni-star-filled"></i></li>
                              <li><i className="lni lni-star-filled"></i></li>
                              <li><i className="lni lni-star-filled"></i></li>
                              <li><i className="lni lni-star"></i></li>
                              <li><span>4.0 Review(s)</span></li>
                            </ul>
                            <div className="price">
                              <span>$199.00</span>
                            </div>
                          </div>
                        </div>
                        {/* End Single Product */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteProducts;
