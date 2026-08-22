import { Component } from "react";
import Menu from "./menu";

export default class InsertProduct extends Component {
    handleSubmit = (e) => {
        alert("Product added successfully!");
    };

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
                                        <h1 className="mb-0 fs-3">Product Management</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><a href="product.html">Products</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
                                            </ol>
                                        </nav>
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
                                                <h3 className="card-title fs-5 mb-0">Add Product</h3>
                                            </div>

                                            <div className="card-body">
                                                {/* Form */}
                                                <form action="product.html" method="GET" onSubmit={this.handleSubmit}>
                                                    <div className="row g-3 mb-3">
                                                        {/* Category select */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="category" className="form-label fw-semibold">Category</label>
                                                            <select className="form-select" id="category" required defaultValue="">
                                                                <option value="" disabled>Select category...</option>
                                                                <option value="Electronics">Electronics</option>
                                                                <option value="Apparel">Apparel</option>
                                                                <option value="Office Supplies">Office Supplies</option>
                                                                <option value="Home & Kitchen">Home & Kitchen</option>
                                                            </select>
                                                        </div>

                                                        {/* Name */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="name" className="form-label fw-semibold">Product Name</label>
                                                            <input type="text" className="form-control" id="name" placeholder="e.g. Wireless Bluetooth Headphones" required />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Price */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="price" className="form-label fw-semibold">Price ($)</label>
                                                            <input type="number" step="0.01" min="0" className="form-control" id="price" placeholder="0.00" required />
                                                        </div>

                                                        {/* Quantity */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                                                            <input type="number" min="0" className="form-control" id="quantity" placeholder="0" required />
                                                        </div>

                                                        {/* Weight */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="weight" className="form-label fw-semibold">Weight</label>
                                                            <input type="text" className="form-control" id="weight" placeholder="e.g. 0.25 kg" />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Size */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="size" className="form-label fw-semibold">Size</label>
                                                            <input type="text" className="form-control" id="size" placeholder="e.g. Medium, 15-inch" />
                                                        </div>

                                                        {/* Photo file upload */}
                                                        <div className="col-md-8">
                                                            <label htmlFor="photo" className="form-label fw-semibold">Product Photo</label>
                                                            <input type="file" className="form-control" id="photo" required />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Detail description */}
                                                        <div className="col-12">
                                                            <label htmlFor="detail" className="form-label fw-semibold">Product Detail / Description</label>
                                                            <textarea className="form-control" id="detail" rows="4" placeholder="Enter product description here..." required />
                                                        </div>
                                                    </div>

                                                    {/* Is Live radio group */}
                                                    <div className="mb-4">
                                                        <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="yes" value="Yes" defaultChecked />
                                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="no" value="No" />
                                                            <label className="form-check-label" htmlFor="no">No</label>
                                                        </div>
                                                    </div>

                                                    {/* Submit / cancel controls */}
                                                    <div className="text-end border-top pt-3">
                                                        <a href="product.html" className="btn btn-dark me-2">Cancel</a>
                                                        <button type="submit" className="btn btn-primary">Save Product</button>
                                                    </div>
                                                </form>
                                                {/* Form */}
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
