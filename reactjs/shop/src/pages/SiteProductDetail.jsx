import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteProductDetail() {
  const publicUrl = process.env.PUBLIC_URL || '';

  const thumbnails = [
    `${publicUrl}/assets/images/product-details/01.jpg`,
    `${publicUrl}/assets/images/product-details/02.jpg`,
    `${publicUrl}/assets/images/product-details/03.jpg`,
    `${publicUrl}/assets/images/product-details/04.jpg`,
    `${publicUrl}/assets/images/product-details/05.jpg`,
  ];

  const [currentImg, setCurrentImg] = useState(thumbnails[0]);

  return (
    <>
      <Header activePage="product-detail" />

      <section className="item-details section">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-images">
                  <main id="gallery">
                    <div className="main-img">
                      <img src={currentImg} id="current" alt="Product Main" />
                    </div>
                    <div className="images">
                      {thumbnails.map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          className="img"
                          alt={`Thumbnail ${index + 1}`}
                          onClick={() => setCurrentImg(imgSrc)}
                          style={{ cursor: 'pointer' }}
                        />
                      ))}
                    </div>
                  </main>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="product-info">
                  <h2 className="title">GoPro Karma Camera Drone</h2>
                  <p className="category">
                    <i className="lni lni-tag"></i> Drones: <a href="#!">Action cameras</a>
                  </p>
                  <h3 className="price">$850<span>$945</span></h3>
                  <p className="info-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p>
                    <a href="#/cart" className="btn btn-primary">
                      <i className="lni lni-cart"></i> Add to cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-details-info">
            <div className="single-block">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="info-body custom-responsive-margin">
                    <h4>Details</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="info-body">
                    <h4>Specifications</h4>
                    <ul className="normal-list">
                      <li><span>Weight:</span> 35.5oz (1006g)</li>
                      <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                      <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                      <li><span>Operating Frequency:</span> 2.4GHz</li>
                      <li><span>Manufacturer:</span> GoPro, USA</li>
                    </ul>
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

export default SiteProductDetail;
