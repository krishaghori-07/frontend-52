import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteRegister() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Account registered successfully for ${formData.email}!`);
  };

  return (
    <>
      <Header activePage="register" />

      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <div className="register-form">
                <div className="title">
                  <h3>No Account? Register</h3>
                  <p>Registration takes less than a minute but gives you full control over your orders.</p>
                </div>
                <form className="row" onSubmit={handleSubmit} method="post">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">E-mail Address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        className="form-control"
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit">
                      Register
                    </button>
                  </div>
                  <p className="outer-link">
                    Already have an account? <a href="#/login">Login Now</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteRegister;
