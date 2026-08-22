import { Component } from "react";
class ForgotPassword extends Component {
    render() {
        return (
            <div className="login-page bg-body-secondary">
                <main className="login-box">
                    <h3 className="login-logo">
                        <a href="../index2.html"><b>Forgot password? <br />Recover account.</b></a>
                    </h3>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <form action="../index3.html" method="post">
                                <label className="visually-hidden" htmlFor="loginEmail">Email</label>
                                <div className="input-group mb-3">
                                    <input id="loginEmail" type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-text">
                                        <span className="bi bi-envelope" />
                                    </div>
                                </div>
                                {/*begin::Row*/}
                                <div className="row">
                                    {/* /.col */}
                                    <div className="col-12">
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-warning">Recover account</button>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/*end::Row*/}
                            </form>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="login.html">Login as admin</a>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </main>
            </div>
        );
    }
}
export default ForgotPassword