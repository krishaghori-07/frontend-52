import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function SiteChangePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPasswords((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    alert('Password successfully changed!');
  };

  return (
    <>
      <Header activePage="change-password" />

      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form className="card login-form" onSubmit={handleSubmit} method="post">
                <div className="card-body">
                  <div className="title">
                    <h3>Change password</h3>
                  </div>

                  <div className="form-group input-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="currentPassword"
                      value={passwords.currentPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group input-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="newPassword"
                      value={passwords.newPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group input-group">
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="confirmNewPassword"
                      value={passwords.confirmNewPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="button">
                    <button className="btn" type="submit">
                      Save changes
                    </button>
                  </div>
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

export default SiteChangePassword;
