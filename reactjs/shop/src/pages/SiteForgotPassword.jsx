import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password recovery instructions sent to ${email}`);
  };

  return (
    <>
      <Header activePage="forgot-password" />

      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form className="card login-form" onSubmit={handleSubmit} method="post">
                <div className="card-body">
                  <div className="title">
                    <h3>Recover your account</h3>
                    <p>Forgot Password? No problem, we will help you recover your account.</p>
                  </div>

                  <div className="form-group input-group">
                    <label htmlFor="reg-email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="reg-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="button">
                    <button className="btn" type="submit">
                      Recover Account
                    </button>
                  </div>

                  <p className="outer-link mt-3">
                    Remember your password? <a href="#/login">Login here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteForgotPassword;
