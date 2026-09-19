import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
  };

  return (
    <>
      <Header activePage="login" />

      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form className="card login-form" onSubmit={handleSubmit} method="post">
                <div className="card-body">
                  <div className="title">
                    <h3>Login Now</h3>
                    <p>You can login using your social media account or email address.</p>
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

                  <div className="form-group input-group">
                    <label htmlFor="reg-pass">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-pass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex flex-wrap justify-content-between bottom-content">
                    <a className="lost-pass" href="#/forgot-password">
                      Forgot password?
                    </a>
                  </div>

                  <div className="button">
                    <button className="btn" type="submit">
                      Login
                    </button>
                  </div>

                  <p className="outer-link">
                    Don't have an account? <a href="#/register">Register here</a>
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

export default SiteLogin;
