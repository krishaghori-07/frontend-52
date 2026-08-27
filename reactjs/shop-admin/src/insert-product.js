import { Component } from "react";
import Menu from "./menu";

export default class InsertProduct extends Component {
    handleSubmit = (e) => {
        alert("Product added successfully!");
    };
    constructor(props) {
        super(props);
        this.state = {
            category: '',    // Maps to <select id="category"> (defaultValue is "")
            name: '',        // Maps to <input id="name">
            price: '',       // Maps to <input id="price">
            quantity: '',    // Maps to <input id="quantity">
            weight: '',      // Maps to <input id="weight">
            size: '',        // Maps to <input id="size">
            photo: null,     // Maps to <input id="photo" type="file"> (null is best for file objects)
            detail: '',      // Maps to <textarea id="detail">
            islive: 'Yes'    // Maps to <input name="islive"> (defaultChecked is on "Yes")
        };
    }

    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updatePhoto = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
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
                                                            <select
                                                            name="category"
                                                            onChange={(e) => this.updateValue(e)}
                                                            className="form-select" id="category" required defaultValue="">
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
                                                            <input type="text"
                                                                name="name"
                                                                value={this.state.name}
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control" id="name" placeholder="e.g. Wireless Bluetooth Headphones" required />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Price */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="price" className="form-label fw-semibold">Price ($)</label>
                                                            <input type="number" step="0.01" min="0"
                                                                name="price"
                                                                value={this.state.price}
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control" id="price" placeholder="0.00" required />
                                                        </div>

                                                        {/* Quantity */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                                                            <input type="number" min="0" 
                                                            name="quantity"
                                                            className="form-control"
                                                                value={this.state.quantity}
                                                                onChange={(e) => this.updateValue(e)}
                                                                id="quantity" placeholder="0" required />
                                                        </div>

                                                        {/* Weight */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="weight" className="form-label fw-semibold">Weight</label>
                                                            <input type="text"
                                                                name="weight"
                                                                value={this.state.weight}
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control" id="weight" placeholder="e.g. 0.25 kg" />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Size */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="size" className="form-label fw-semibold">Size</label>
                                                            <input type="text"
                                                                name="size"
                                                                value={this.state.size}
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control" id="size" placeholder="e.g. Medium, 15-inch" />
                                                        </div>

                                                        {/* Photo file upload */}
                                                        <div className="col-md-8">
                                                            <label htmlFor="photo" className="form-label fw-semibold">Product Photo</label>
                                                            <input type="file"
                                                                name="photo"
                                                                onChange={(e) => this.updatePhoto(e)}
                                                                className="form-control" id="photo" required />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Detail description */}
                                                        <div className="col-12">
                                                            <label htmlFor="detail" className="form-label fw-semibold">Product Detail / Description</label>
                                                            <textarea 
                                                            name="detail"
                                                            className="form-control" id="detail" rows="4"
                                                                value={this.state.detail}
                                                                onChange={(e) => this.updateValue(e)}
                                                                placeholder="Enter product description here..." required />
                                                        </div>
                                                    </div>

                                                    {/* Is Live radio group */}
                                                    <div className="mb-4">
                                                        <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="yes" value="Yes"
                                                                value={this.state.islive}
                                                                onChange={(e) => this.updateValue(e)}
                                                                required />
                                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="no" value="No"
                                                                value={this.state.islive}
                                                                onChange={(e) => this.updateValue(e)}
                                                                required
                                                            />
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
