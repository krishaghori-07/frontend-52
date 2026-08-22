import { Component } from "react";
import Menu from "./menu";

const orderDetails = {
    "10001": {
        id: "10001",
        date: "2026-08-20 14:32",
        customer: "Alice Johnson",
        status: "Delivered",
        payment: "Paid",
        subtotal: "$143.50",
        tax: "$15.00",
        total: "$158.50",
        items: [
            { name: "Wireless Bluetooth Headphones", qty: 1, price: "$99.00" },
            { name: "USB-C Fast Charger Cable (2m)", qty: 2, price: "$14.75" },
            { name: "Ergonomic Mouse Pad", qty: 1, price: "$15.00" }
        ],
        address: "123 Maple St, Springfield, IL 62701",
        email: "alice.j@example.com"
    },
    "10002": {
        id: "10002",
        date: "2026-08-21 09:15",
        customer: "Bob Smith",
        status: "Pending",
        payment: "Unpaid",
        subtotal: "$83.13",
        tax: "$6.86",
        total: "$89.99",
        items: [
            { name: "Leather Trifold Wallet", qty: 1, price: "$83.13" }
        ],
        address: "456 Oak Ave, Metropolis, NY 10001",
        email: "bob.smith@example.com"
    },
    "10003": {
        id: "10003",
        date: "2026-08-21 11:00",
        customer: "Charlie Brown",
        status: "Shipped",
        payment: "Paid",
        subtotal: "$295.61",
        tax: "$24.39",
        total: "$320.00",
        items: [
            { name: "Mechanical Gaming Keyboard", qty: 1, price: "$120.00" },
            { name: "Gaming Mouse RGB", qty: 1, price: "$80.00" },
            { name: "Large Mouse Mat", qty: 1, price: "$95.61" }
        ],
        address: "789 Pine Rd, Walnut Creek, CA 94596",
        email: "charlie@peanuts.com"
    }
};

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: null,
            notFound: false
        };
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const orderId = params.get("id");
        const order = orderDetails[orderId];
        if (order) {
            this.setState({ order });
        } else {
            this.setState({ notFound: true });
        }
    }

    handlePrint = () => {
        window.print();
    };

    handleSendInvoice = () => {
        alert("Invoice sent successfully!");
    };

    render() {
        const { order, notFound } = this.state;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
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
                                                <li className="breadcrumb-item"><a href="orders.html">Orders</a></li>
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
                                    <a href="orders.html" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1" aria-hidden="true" /> Back to Orders
                                    </a>
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
                                    <div id="invoiceCard" className="card">
                                        <div className="card-body p-4 p-md-5">
                                            
                                            {/* Header */}
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <h2 className="h4 mb-0 text-primary fw-semibold">Online Shop, Inc.</h2>
                                                    <p className="text-secondary mb-0 small">
                                                        123 Commerce Way, Suite 400<br />
                                                        Boston, MA 02110<br />
                                                        support@onlineshop.com
                                                    </p>
                                                </div>
                                                <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                                                    <h1 className="h2 mb-1">Invoice</h1>
                                                    <p className="text-secondary mb-0">
                                                        <span className="fw-semibold">#</span><span>{order.id}</span>
                                                    </p>
                                                    <span className={`badge mt-1 me-1 ${order.status === "Delivered" ? "text-bg-success" : order.status === "Pending" ? "text-bg-warning" : order.status === "Shipped" ? "text-bg-info" : "text-bg-secondary"}`}>
                                                        {order.status}
                                                    </span>
                                                    <span className={`badge mt-1 ${order.payment === "Paid" ? "text-bg-success" : "text-bg-danger"}`}>
                                                        {order.payment}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Billing details */}
                                            <div className="row mb-4">
                                                <div className="col-sm-6">
                                                    <p class="text-secondary small mb-1">Billed to</p>
                                                    <p className="mb-0 fw-semibold">{order.customer}</p>
                                                    <p className="text-secondary small mb-1">{order.email}</p>
                                                    <p className="text-secondary small mb-0">
                                                        {order.address.split(", ").map((line, idx) => (
                                                            <span key={idx}>
                                                                {line}
                                                                <br />
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                                <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                                                    <p className="text-secondary small mb-1">Order Date</p>
                                                    <p className="mb-0">{order.date}</p>
                                                </div>
                                            </div>

                                            {/* Items Table */}
                                            <div className="table-responsive mb-3">
                                                <table className="table align-middle mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-top-0">Product Description</th>
                                                            <th className="border-top-0 text-end" style={{ width: "6rem" }}>Qty</th>
                                                            <th className="border-top-0 text-end" style={{ width: "9rem" }}>Unit Price</th>
                                                            <th className="border-top-0 text-end" style={{ width: "9rem" }}>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.items.map((item, idx) => {
                                                            const itemSubtotal = parseFloat(item.price.replace("$", "")) * item.qty;
                                                            return (
                                                                <tr key={idx}>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold">{item.name}</p>
                                                                    </td>
                                                                    <td className="text-end">{item.qty}</td>
                                                                    <td className="text-end">{item.price}</td>
                                                                    <td className="text-end">${itemSubtotal.toFixed(2)}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Totals */}
                                            <div className="row justify-content-end">
                                                <div className="col-md-5 col-lg-4">
                                                    <dl className="row mb-0">
                                                        <dt className="col-7 text-secondary fw-normal">Subtotal</dt>
                                                        <dd className="col-5 text-end mb-2">{order.subtotal}</dd>
                                                        <dt className="col-7 text-secondary fw-normal">Tax (8.25%)</dt>
                                                        <dd className="col-5 text-end mb-2">{order.tax}</dd>
                                                        <dt className="col-7 fw-semibold border-top pt-2">Total</dt>
                                                        <dd className="col-5 text-end fw-semibold border-top pt-2 mb-0">{order.total} USD</dd>
                                                    </dl>
                                                </div>
                                            </div>

                                            {/* Footer note */}
                                            <hr className="my-4" />
                                            <p className="text-secondary small mb-0">
                                                Thanks for your business. Payment is due within 14 days of order. If you have any questions
                                                about this invoice, please contact{" "}
                                                <a href="mailto:billing@onlineshop.com">billing@onlineshop.com</a>.
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
