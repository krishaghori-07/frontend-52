import { Component } from "react";
import Menu from "./menu";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./messages";
import { getBase, verifyLogin } from "./common";
import withHooks from "./hoc";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        if (!this.props.cookies || !this.props.cookies['adminid']) {
            return;
        }
        let apiAddress = getBase() + "users.php";
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };
        axios(option).then((response) => {
            console.log(response);
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no user found");
                }
                else {
                    response.data.splice(0, 2);
                    showMessage("users fetched successfully");
                    this.setState({
                        users: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    displayUsers = () => {
        return this.state.users.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <a href={`mailto:${item.email}`} className="text-decoration-none">
                            {item.email}
                        </a>
                    </td>
                    <td>{item.mobile || "N/A"}</td>
                </tr>
            );
        });
    }

    noUserFound = () => {
        return (
            <tr>
                <td colSpan="3" className="text-center">No users found</td>
            </tr>
        );
    }

    render() {
        let redirect = verifyLogin(this.props.cookies);
        if (redirect) return redirect;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <ToastContainer />
                <div className="app-wrapper">
                    <Menu />
                    <main className="app-main">
                        <div className="app-content-header">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <h1 className="mb-0 fs-3">User Management</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header text-bg-primary">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h3 className="mb-0 fs-5">Existing Users</h3>
                                                    <span className="badge bg-light text-dark">
                                                        Total: {this.state.users.length}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Email</th>
                                                                <th>Mobile</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.users.length === 0
                                                                ? this.noUserFound()
                                                                : this.displayUsers()}
                                                        </tbody>
                                                    </table>
                                                </div>
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
export default withHooks(Users);
