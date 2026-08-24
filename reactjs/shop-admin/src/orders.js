import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
export default class Orders extends Component {
    render() {
        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <div className="app-wrapper">
                    <Menu />
                    <main className="app-main">
                        <div className="app-content-header">
                            <div className="container-fluid">
                                <div className="row">
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
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                {/* TABLE */}
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Order Date</th>
                                                                <th>Customer Name</th>
                                                                <th>Status</th>
                                                                <th>Payment Status</th>
                                                                <th>Total Amount</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>10001</td>
                                                                <td>2026-08-20 14:32</td>
                                                                <td>Alice Johnson</td>
                                                                <td>
                                                                    <span className="badge text-bg-success">Delivered</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge text-bg-success">Paid</span>
                                                                </td>
                                                                <td>$158.50</td>
                                                                <td className="text-end">
                                                                    <Link to={"/order-detail"} className="btn btn-sm btn-outline-primary">
                                                                        <i className="bi bi-eye me-1" /> View
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>10002</td>
                                                                <td>2026-08-21 09:15</td>
                                                                <td>Bob Smith</td>
                                                                <td>
                                                                    <span className="badge text-bg-warning">Pending</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge text-bg-danger">Unpaid</span>
                                                                </td>
                                                                <td>$89.99</td>
                                                                <td className="text-end">
                                                                    <a href="order-detail.html?id=10002" className="btn btn-sm btn-outline-primary">
                                                                        <i className="bi bi-eye me-1" /> View
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>10003</td>
                                                                <td>2026-08-21 11:00</td>
                                                                <td>Charlie Brown</td>
                                                                <td>
                                                                    <span className="badge text-bg-info">Shipped</span>
                                                                </td>
                                                                <td>
                                                                    <span className="badge text-bg-success">Paid</span>
                                                                </td>
                                                                <td>$320.00</td>
                                                                <td className="text-end">
                                                                    <a href="order-detail.html?id=10003" className="btn btn-sm btn-outline-primary">
                                                                        <i className="bi bi-eye me-1" /> View
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* TABLE */}
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
