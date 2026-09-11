import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { getBase } from "./common";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
import withHooks from "./hoc";

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: null,
            notFound: false
        };
    }

    fetchOrderDetail = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const orderId = this.props.params?.orderid || queryParams.get("id");

        if (!orderId) {
            this.setState({ notFound: true });
            return;
        }

        let apiAddress = getBase() + "orders.php?id=" + orderId;
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };

        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
                this.setState({ notFound: true });
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("Order not found");
                    this.setState({ notFound: true });
                }
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        order: response.data[0],
                        notFound: false
                    });
                }
            }
        }).catch((error) => {
            showError();
            this.setState({ notFound: true });
        });
    }

    componentDidMount() {
        this.fetchOrderDetail();
    }

    handlePrint = () => {
        window.print();
    };

    handleSendInvoice = () => {
        showMessage("Invoice sent successfully to customer!");
    };

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

    getPaymentStatusBadge = (status) => {
        switch (String(status)) {
            case '1':
                return <span className="badge text-bg-danger">Unpaid</span>;
            case '2':
                return <span className="badge text-bg-success">Paid</span>;
            default:
                return <span className="badge text-bg-secondary">Pending</span>;
        }
    }

    getPaymentMode = (mode) => {
        switch (String(mode)) {
            case '0':
                return "Cash on Delivery (COD)";
            case '1':
                return "Online Payment";
            default:
                return mode || "Standard";
        }
    }

    render() {
        const { order, notFound } = this.state;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <ToastContainer />
                <div className="app-wrapper">
                    <Menu />
                    <main className="app-main">
                        <div className="app-content-header d-print-none">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <h1 className="mb-0 fs-3">Order Details</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><Link to="/order">Orders</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Details</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">
                                
                                {/* Action bar */}
                                <div className="d-flex justify-content-between gap-2 mb-3 d-print-none">
                                    <Link to="/order" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1" aria-hidden="true" /> Back to Orders
                                    </Link>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-outline-secondary" onClick={this.handlePrint} type="button">
                                            <i className="bi bi-printer me-1" aria-hidden="true" /> Print
                                        </button>
                                        <button className="btn btn-primary" type="button" onClick={this.handleSendInvoice}>
                                            <i className="bi bi-send me-1" aria-hidden="true" /> Send Invoice
                                        </button>
                                    </div>
                                </div>

                                {/* Error Alert */}
                                {notFound && (
                                    <div id="errorAlert" className="alert alert-danger" role="alert">
                                        <h4 className="alert-heading">Order Not Found</h4>
                                        <p className="mb-0">The order ID requested does not exist or has been deleted.</p>
                                    </div>
                                )}

                                {/* Invoice Details Card */}
                                {order && (
                                    <div id="invoiceCard" className="card shadow-sm">
                                        <div className="card-body p-4 p-md-5">
                                            
                                            {/* Header */}
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <h2 className="h4 mb-0 text-primary fw-semibold">Online Shop Admin</h2>
                                                    <p className="text-secondary mb-0 small">
                                                        Support & Orders Department<br />
                                                        support@theeasylearnacademy.com
                                                    </p>
                                                </div>
                                                <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                                                    <h1 className="h2 mb-1">Invoice</h1>
                                                    <p className="text-secondary mb-1">
                                                        <span className="fw-semibold">Order ID: #</span><span>{order.id}</span>
                                                    </p>
                                                    <div className="d-flex justify-content-sm-end gap-1">
                                                        {this.getOrderStatusBadge(order.orderstatus)}
                                                        {this.getPaymentStatusBadge(order.paymentstatus)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Billing details */}
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <p className="text-secondary small mb-1 text-uppercase fw-semibold">Customer Details</p>
                                                    <p className="mb-1 fw-bold fs-6">{order.fullname}</p>
                                                    <p className="text-secondary small mb-1">
                                                        <i className="bi bi-telephone me-1" /> {order.mobile || "N/A"}
                                                    </p>
                                                    <p className="text-secondary small mb-0">
                                                        <i className="bi bi-geo-alt me-1" />
                                                        {order.address1}
                                                        {order.address2 && <>, {order.address2}</>}
                                                        <br />
                                                        {order.city} - {order.pincode}
                                                    </p>
                                                </div>
                                                <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                                                    <p className="text-secondary small mb-1 text-uppercase fw-semibold">Order Information</p>
                                                    <p className="mb-1"><strong>Order Date:</strong> {order.billdate}</p>
                                                    <p className="mb-1"><strong>Payment Mode:</strong> {this.getPaymentMode(order.paymentmode)}</p>
                                                </div>
                                            </div>

                                            {/* Order Details Table */}
                                            <div className="table-responsive mb-3">
                                                <table className="table align-middle mb-0">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Payment Details</th>
                                                            <th className="text-end">Total Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p className="mb-0 fw-semibold">Order #{order.id} - Direct Purchase</p>
                                                                {order.remarks && (
                                                                    <small className="text-muted">Remarks: {order.remarks}</small>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div>{this.getPaymentMode(order.paymentmode)}</div>
                                                                <small className="text-muted">Status: {order.paymentstatus === '2' ? 'Paid' : 'Unpaid'}</small>
                                                            </td>
                                                            <td className="text-end fw-bold fs-5 text-primary">
                                                                ₹{Number(order.amount).toLocaleString('en-IN')}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Totals */}
                                            <div className="row justify-content-end">
                                                <div className="col-md-5 col-lg-4">
                                                    <dl className="row mb-0">
                                                        <dt className="col-7 text-secondary fw-normal">Subtotal</dt>
                                                        <dd className="col-5 text-end mb-2">₹{Number(order.amount).toLocaleString('en-IN')}</dd>
                                                        <dt className="col-7 text-secondary fw-normal">Delivery Fee</dt>
                                                        <dd className="col-5 text-end mb-2 text-success">FREE</dd>
                                                        <dt className="col-7 fw-semibold border-top pt-2">Total Amount</dt>
                                                        <dd className="col-5 text-end fw-semibold border-top pt-2 mb-0 text-primary fs-5">
                                                            ₹{Number(order.amount).toLocaleString('en-IN')}
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>

                                            {/* Footer note */}
                                            <hr className="my-4" />
                                            <p className="text-secondary small mb-0">
                                                Thank you for shopping with us! If you have any inquiries regarding this order, please contact support.
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default withHooks(OrderDetail);
