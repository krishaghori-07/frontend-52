import React from "react";
import { getBase } from './common';
import axios from 'axios';
import { showError, showMessage } from './messages';
import { ToastContainer } from "react-toastify";
import withHooks from "./hoc";
// create class component
class Login extends React.Component {
    constructor(props) {
        super(props); //required
        this.state = {};
    }
    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    doLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
        //admin@gmail.com
        //123123
        //[{"error":"input missing"}]
        //[{"error":"no"},{"success":"no"},{"message":"invalid login attempt"}]
        // [{"error":"no"},{"success":"yes"},{"message":"login successful"},{"id":"2"}]
        let apiAddress = getBase() + "admin_login.php";
        //create formData class object
        let form = new FormData();
        form.append("email",this.state.email);
        form.append("password",this.state.password);
        let option = {
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data:form
        };
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error!=='no')
            {
                showError(error);
            }
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no')
                {
                    showError(message);
                }
                else 
                {
                   // create cookies
                    this.props.setCookie("adminid",response.data[3]['id']);
                    console.log("admin id",this.props.cookies['adminid']);
                    showMessage(message);
                    // pause code for 2 seconds 
                    setTimeout(() => {
                        //change screen to dashboard
                        this.props.navigate("/dashboard");
                    },3000);
                }
            }
        }).catch((error) => {
            showError();
        });
    }
    render() {
        return (
            <div className="login-page bg-body-secondary">
                <ToastContainer />
                <main className="login-box">
                    <h1 className="login-logo">
                        <a><b>Admin Login</b></a>
                    </h1>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={this.doLogin} method="post">
                                <label className="visually-hidden" htmlFor="loginEmail">Email</label>
                                <div className="input-group mb-3">
                                    <input id="loginEmail" type="email"
                                        name="email" value={this.state.email}
                                        onChange={(e) => this.updateValue(e)}
                                        className="form-control" placeholder="Email" />
                                    <div className="input-group-text">
                                        <span className="bi bi-envelope" />
                                    </div>
                                </div>
                                <label className="visually-hidden" htmlFor="loginPassword">Password</label>
                                <div className="input-group mb-3">
                                    <input id="loginPassword" type="password"
                                        name="password" value={this.state.password}
                                        onChange={(e) => this.updateValue(e)}
                                        className="form-control" placeholder="Password" />
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
export default withHooks(Login);