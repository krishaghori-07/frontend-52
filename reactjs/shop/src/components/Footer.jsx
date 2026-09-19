import React from 'react';

function Footer() {
  const publicUrl = process.env.PUBLIC_URL || '';

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="footer-logo">
                  <a href="#/">
                    <img src={`${publicUrl}/assets/images/logo/white-logo.svg`} alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="bottom-inner">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-footer f-contact">
                  <h3>Get In Touch With Us</h3>
                  <p className="phone">Phone: +1 (900) 33 169 7720</p>
                  <ul>
                    <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                    <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                  </ul>
                  <p className="mail">
                    <a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Information</h3>
                  <ul>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Contact Us</a></li>
                    <li><a href="#!">Downloads</a></li>
                    <li><a href="#!">Sitemap</a></li>
                    <li><a href="#!">FAQs Page</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-content">
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
                <div className="payment-gateway">
                  <span>We Accept: </span>
                  <img src={`${publicUrl}/assets/images/footer/credit-cards-footer.png`} alt="Payment Gateways" />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="copyright">
                  <p>Designed and Developed by frontend 52</p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <ul className="socila">
                  <li><span>Follow Us On: </span></li>
                  <li><a href="#!"><i className="lni lni-facebook-filled"></i></a></li>
                  <li><a href="#!"><i className="lni lni-twitter-original"></i></a></li>
                  <li><a href="#!"><i className="lni lni-instagram"></i></a></li>
                  <li><a href="#!"><i className="lni lni-google"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
