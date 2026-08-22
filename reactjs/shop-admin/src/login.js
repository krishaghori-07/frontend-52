import React from "react";
// create class component
class Login extends React.Component {
    render() {
        return (
            <div className="login-page bg-body-secondary">
                <main className="login-box">
                    <h1 className="login-logo">
                        <a href="../index2.html"><b>Admin Login</b></a>
                    </h1>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="../index3.html" method="post">
                                <label className="visually-hidden" htmlFor="loginEmail">Email</label>
                                <div className="input-group mb-3">
                                    <input id="loginEmail" type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-text">
                                        <span className="bi bi-envelope" />
                                    </div>
                                </div>
                                <label className="visually-hidden" htmlFor="loginPassword">Password</label>
                                <div className="input-group mb-3">
                                    <input id="loginPassword" type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-text">
                                        <span className="bi bi-lock-fill" />
                                    </div>
                                </div>
                                {/*begin::Row*/}
                                <div className="row">
                                    {/* /.col */}
                                    <div className="col-12">
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">Sign In</button>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/*end::Row*/}
                            </form>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </main>
            </div>
        );
    }
}
export default Login;