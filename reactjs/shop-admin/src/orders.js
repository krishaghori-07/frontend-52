import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./messages";
import { getBase, verifyLogin } from "./common";
import withHooks from "./hoc";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    componentDidMount() {
        if (!this.props.cookies || !this.props.cookies['adminid']) {
            return;
        }
        let apiAddress = getBase() + "orders.php";
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
                    showError("no order found");
                }
                else {
                    response.data.splice(0, 2);
                    showMessage("orders fetched successfully");
                    this.setState({
                        orders: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    getOrderStatusBadge = (status) => {
        switch (String(status)) {
            case '1':
                return <span className="badge text-bg-warning">Pending</span>;
            case '2':
                return <span className="badge text-bg-primary">Processing</span>;
            case '3':
                return <span className="badge text-bg-info">Shipped</span>;
            case '4':
                return <span className="badge text-bg-success">Delivered</span>;
            case '5':
                return <span className="badge text-bg-danger">Cancelled</span>;
            default:
                return <span className="badge text-bg-secondary">{status || "Unknown"}</span>;
        }
    }

    displayOrders = () => {
        return this.state.orders.map((item) => {
            return (
                <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{item.billdate}</td>
                    <td>{item.fullname}</td>
                    <td>{item.city}</td>
                    <td>{this.getOrderStatusBadge(item.orderstatus)}</td>
                    <td className="fw-semibold">₹{Number(item.amount).toLocaleString('en-IN')}</td>
                    <td className="text-end">
                        <Link to={"/order-detail?id=" + item.id} className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-eye me-1" /> View
                        </Link>
                    </td>
                </tr>
            );
        });
    }

    noOrderFound = () => {
        return (
            <tr>
                <td colSpan="7" className="text-center">No orders found</td>
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
                                        <h1 className="mb-0 fs-3">Order Management</h1>
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
                                                    <h3 className="mb-0 fs-5">Existing Orders</h3>
                                                    <span className="badge bg-light text-dark">
                                                        Total: {this.state.orders.length}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Order Date</th>
                                                                <th>Customer Name</th>
                                                                <th>City</th>
                                                                <th>Status</th>
                                                                <th>Total Amount</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.orders.length === 0
                                                                ? this.noOrderFound()
                                                                : this.displayOrders()}
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
export default withHooks(Orders);
