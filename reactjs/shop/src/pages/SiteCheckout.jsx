import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteCheckout() {
  const [formData, setFormData] = useState({
    fullname: '',
    address1: '',
    address2: '',
    mobile: '',
    city: '',
    pincode: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <>
      <Header activePage="checkout" />

      <section className="checkout-wrapper section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="checkout-steps-form-style-1">
                <ul id="accordionExample">
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                    <h6
                      className="title"
                      role="button"
                      tabIndex={0}
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Your Personal Details
                    </h6>

                    <section
                      className="checkout-steps-form-content collapse show"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          {/* Full Name */}
                          <div className="col-12">
                            <div className="single-form form-default">
                              <label>Full Name</label>
                              <div className="form-input form">
                                <input
                                  type="text"
                                  name="fullname"
                                  placeholder="Full Name"
                                  value={formData.fullname}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Primary Address */}
                          <div className="col-12 col-md-6">
                            <div className="single-form form-default">
                              <label>Primary Address</label>
                              <div className="form-input form">
                                <input
                                  type="text"
                                  name="address1"
                                  placeholder="Primary Address"
                                  value={formData.address1}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Secondary Address */}
                          <div className="col-12 col-md-6">
                            <div className="single-form form-default">
                              <label>Secondary Address</label>
                              <div className="form-input form">
                                <input
                                  type="text"
                                  name="address2"
                                  placeholder="Secondary Address"
                                  value={formData.address2}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Mobile */}
                          <div className="col-12 col-md-4">
                            <div className="single-form form-default">
                              <label>Mobile Number</label>
                              <div className="form-input form">
                                <input
                                  type="tel"
                                  name="mobile"
                                  placeholder="Mobile Number"
                                  value={formData.mobile}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* City */}
                          <div className="col-12 col-md-4">
                            <div className="single-form form-default">
                              <label>City</label>
                              <div className="form-input form">
                                <input
                                  type="text"
                                  name="city"
                                  placeholder="City"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Pincode */}
                          <div className="col-12 col-md-4">
                            <div className="single-form form-default">
                              <label>Pincode</label>
                              <div className="form-input form">
                                <input
                                  type="text"
                                  name="pincode"
                                  placeholder="Pincode"
                                  value={formData.pincode}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Remarks */}
                          <div className="col-12">
                            <div className="single-form form-default">
                              <label>Remarks</label>
                              <div className="form-input form">
                                <textarea
                                  name="remarks"
                                  placeholder="Remarks"
                                  rows="4"
                                  value={formData.remarks}
                                  onChange={handleChange}
                                  required
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          {/* Submit / Next Step */}
                          <div className="col-12">
                            <div className="single-form button">
                              <button className="btn" type="submit">
                                Next Step
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </section>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="checkout-sidebar">
                <div className="checkout-sidebar-price-table mt-30">
                  <h5 className="title">Pricing Table</h5>

                  <div className="sub-total-price">
                    <div className="total-price">
                      <p className="value">Subtotal Price:</p>
                      <p className="price">$144.00</p>
                    </div>
                    <div className="total-price shipping">
                      <p className="value">Shipping:</p>
                      <p className="price">$10.50</p>
                    </div>
                    <div className="total-price discount">
                      <p className="value">Discount:</p>
                      <p className="price">$10.00</p>
                    </div>
                  </div>

                  <div className="total-payable">
                    <div className="payable-price">
                      <p className="value">Total Payable:</p>
                      <p className="price">$164.50</p>
                    </div>
                  </div>
                  <div className="price-table-btn button">
                    <button
                      type="button"
                      className="btn btn-alt w-100"
                      onClick={handleSubmit}
                    >
                      Checkout
                    </button>
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

export default SiteCheckout;
