import { Component } from "react";
import Menu from "./menu";

export default class Dashboard extends Component {
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
                                        <h1 className="mb-0 fs-3">Dashboard</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                                                <h3 class="fs-1 fw-bold">8</h3>
                                                <p className="mb-0 fs-6">Categories</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-tags-fill fs-1" />
                                            </div>
                                            <a href="category.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Categories <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Products widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-success shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">145</h3>
                                                <p className="mb-0 fs-6">Products</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-box-seam-fill fs-1" />
                                            </div>
                                            <a href="product.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Products <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Users widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-warning shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">1,204</h3>
                                                <p className="mb-0 fs-6">Users</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-people-fill fs-1" />
                                            </div>
                                            <a href="users.html" className="small-box-footer text-center py-2 text-dark text-decoration-none bg-black bg-opacity-10">
                                                Manage Users <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Orders widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-danger shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-1 fw-bold">3,450</h3>
                                                <p className="mb-0 fs-6">Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-cart-fill fs-1" />
                                            </div>
                                            <a href="orders.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                Manage Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                {/* SECOND LINE: Today order, Monthly order, Quarterly order, Yearly order */}
                                <div className="row">
                                    
                                    {/* Today Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-info shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">32</h3>
                                                <p className="mb-0 fs-6">Today's Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-calendar2-check-fill fs-1" />
                                            </div>
                                            <a href="orders.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Today's Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Monthly Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-secondary shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">1,240</h3>
                                                <p className="mb-0 fs-6">Monthly Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-calendar3 fs-1" />
                                            </div>
                                            <a href="orders.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Monthly Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Quarterly Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-dark shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3 text-white">
                                                <h3 className="fs-2 fw-bold">4,150</h3>
                                                <p className="mb-0 fs-6 text-white-50">Quarterly Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-graph-up-arrow fs-1 text-white" />
                                            </div>
                                            <a href="orders.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-white bg-opacity-25">
                                                View Quarterly Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Yearly Order widget */}
                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                        <div className="small-box text-bg-primary bg-gradient shadow-sm h-100 d-flex flex-column justify-content-between">
                                            <div className="inner p-3">
                                                <h3 className="fs-2 fw-bold">18,400</h3>
                                                <p className="mb-0 fs-6">Yearly Orders</p>
                                            </div>
                                            <div className="small-box-icon position-absolute top-0 end-0 p-3 opacity-25">
                                                <i className="bi bi-trophy-fill fs-1" />
                                            </div>
                                            <a href="orders.html" className="small-box-footer text-center py-2 text-white text-decoration-none bg-black bg-opacity-25">
                                                View Yearly Orders <i className="bi bi-arrow-right-circle-fill ms-1" />
                                            </a>
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
