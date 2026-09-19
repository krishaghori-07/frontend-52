import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteHome() {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <>
      <Header activePage="home" />

      {/* Featured Categories Section */}
      <section className="featured-categories section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Featured Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="card shadow">
                <div className="card-body">
                  <a href="#/products">
                    <h3 className="my-2 text-center">HeadPhone</h3>
                    <img src="https://picsum.photos/300" className="img-fluid" alt="HeadPhone Category" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Product Section */}
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="product-image">
                  <img src={`${publicUrl}/assets/images/products/product-1.jpg`} alt="Xiaomi Mi Band 5" />
                  <div className="button">
                    <a href="#/product-detail" className="btn">
                      <i className="lni lni-cart"></i> Add to Cart
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="category">Watches</span>
                  <h4 className="title">
                    <a href="#/product-detail">Xiaomi Mi Band 5</a>
                  </h4>
                  <div className="price">
                    <span>$199.00</span>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteHome;
