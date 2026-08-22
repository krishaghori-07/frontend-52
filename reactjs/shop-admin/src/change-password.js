import { Component } from "react";
import Menu from "./menu";

export default class ChangePassword extends Component {
    validatePassword = (event) => {
        const oldPass = document.getElementById("oldPassword").value;
        const newPass = document.getElementById("newPassword").value;
        const confirmPass = document.getElementById("confirmPassword").value;

        if (newPass !== confirmPass) {
            alert("New password and confirm new password do not match!");
            event.preventDefault();
            return false;
        }

        if (oldPass === newPass) {
            alert("New password cannot be the same as old password!");
            event.preventDefault();
            return false;
        }

        alert("Password updated successfully!");
        return true;
    };

    render() {
        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <div className="app-wrapper">
                    <Menu />
                    <main className="app-main">
                        <div className="app-content-header">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <h1 className="mb-0 fs-3">Account Settings</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><a href="category.html">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 col-lg-5">
                                        <div className="card shadow">
                                            <div className="card-header text-bg-primary">
                                                <h3 className="card-title fs-5 mb-0">Change Password</h3>
                                            </div>

                                            <div className="card-body">
                                                {/* Form */}
                                                <form action="category.html" method="GET" onSubmit={this.validatePassword}>
                                                    
                                                    {/* Old Password */}
                                                    <div className="mb-3">
                                                        <label htmlFor="oldPassword" className="form-label fw-semibold">Old Password</label>
                                                        <div className="input-group">
                                                            <span className="input-group-text"><i className="bi bi-shield-lock" /></span>
                                                            <input type="password" className="form-control" id="oldPassword" placeholder="Enter old password" required />
                                                        </div>
                                                    </div>

                                                    {/* New Password */}
                                                    <div className="mb-3">
                                                        <label htmlFor="newPassword" className="form-label fw-semibold">New Password</label>
                                                        <div className="input-group">
                                                            <span className="input-group-text"><i className="bi bi-key" /></span>
                                                            <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                                                        </div>
                                                    </div>

                                                    {/* Confirm New Password */}
                                                    <div className="mb-4">
                                                        <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm New Password</label>
                                                        <div className="input-group">
                                                            <span className="input-group-text"><i className="bi bi-key-fill" /></span>
                                                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                                                        </div>
                                                    </div>

                                                    {/* Submit / cancel controls */}
                                                    <div className="text-end border-top pt-3">
                                                        <a href="category.html" className="btn btn-dark me-2">Cancel</a>
                                                        <button type="submit" className="btn btn-primary">Change Password</button>
                                                    </div>
                                                </form>
                                                {/* Form */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
