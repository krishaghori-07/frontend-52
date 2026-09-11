import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { getBase } from "./common";
import { showError } from "./messages";
import { ToastContainer } from "react-toastify";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {
                categories: 0,
                products: 0,
                users: 0,
                orders: 0,
                daily: 0,
                weekly: 0,
                monthly: 0,
                yearly: 0
            }
        };
    }

    componentDidMount() {
        let apiAddress = getBase() + "summery.php";
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
            }
            else {
                let summaryData = response.data[1];
                this.setState({
                    summary: summaryData
                });
            }
        }).catch((error) => {
            showError();
        });
    }

    render() {
        const { summary } = this.state;

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
                                        <h1 className="mb-0 fs-3">Dashboard</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">
                                
                                {/* FIRST LINE: Category, Products, Users, Orders */}
                                <div className="row mb-3">
                                    
                                    {/* Category widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-primary shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">{summary.categories}</h3>
                                                <p className="mb-0 fs-6">Categories</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-tags-fill fs-1" />
                                            </div>
                                            <Link to="/category" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Categories <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Products widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-success shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">{summary.products}</h3>
                                                <p className="mb-0 fs-6">Products</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-box-seam-fill fs-1" />
                                            </div>
                                            <Link to="/product" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Products <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Users widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-warning shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">{summary.users}</h3>
                                                <p className="mb-0 fs-6">Users</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-people-fill fs-1" />
                                            </div>
                                            <Link to="/user" className="small-box-footer text-center py-2 text-dark text-decoration-none bg-black bg-opacity-10">
                                                Manage Users <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Orders widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-danger shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">{summary.orders}</h3>
                                                <p className="mb-0 fs-6">Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-cart-fill fs-1" />
                                            </div>
                                            <Link to="/order" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                                {/* SECOND LINE: Today order, Monthly order, Weekly order, Yearly order */}
                                <div className="row">
                                    
                                    {/* Today Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-info shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">{summary.daily}</h3>
                                                <p className="mb-0 fs-6">Today's Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-calendar2-check-fill fs-1" />
                                            </div>
                                            <Link to="/order" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Today's Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Weekly Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-secondary shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">₹{Number(summary.weekly).toLocaleString('en-IN')}</h3>
                                                <p className="mb-0 fs-6">Weekly Revenue</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-calendar3 fs-1" />
                                            </div>
                                            <Link to="/order" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Monthly Revenue widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-dark shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3 text-white">
                                                <h3 className="fs-2 fw-bold">₹{Number(summary.monthly).toLocaleString('en-IN')}</h3>
                                                <p className="mb-0 fs-6 text-white-50">Monthly Revenue</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-graph-up-arrow fs-1 text-white" />
                                            </div>
                                            <Link to="/order" className="small-box-footer text-center py-2 text-white text-decoration-none bg-white bg-opacity-25">
                                                View Monthly Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Yearly Revenue widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-success bg-gradient shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">₹{Number(summary.yearly).toLocaleString('en-IN')}</h3>
                                                <p className="mb-0 fs-6">Yearly Revenue</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-trophy-fill fs-1" />
                                            </div>
                                            <Link to="/order" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Yearly Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </Link>
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
