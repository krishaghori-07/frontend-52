import { Component } from "react";
import Menu from "./menu";

const productDatabase = {
    "201": {
        id: "201",
        category: "Electronics",
        name: "Wireless Bluetooth Headphones",
        photo: "http://www.picsum.photos/100",
        price: "99.00",
        qty: "45",
        weight: "0.25 kg",
        size: "Medium",
        detail: "High-quality wireless over-ear headphones with active noise cancellation and 40h battery life.",
        islive: "Yes"
    },
    "202": {
        id: "202",
        category: "Apparel",
        name: "Leather Trifold Wallet",
        photo: "http://www.picsum.photos/101",
        price: "89.99",
        qty: "12",
        weight: "0.10 kg",
        size: "Small",
        detail: "Genuine cowhide leather trifold wallet featuring multiple card slots and RFID protection.",
        islive: "Yes"
    },
    "203": {
        id: "203",
        category: "Office Supplies",
        name: "Mechanical Gaming Keyboard",
        photo: "http://www.picsum.photos/102",
        price: "120.00",
        qty: "28",
        weight: "1.10 kg",
        size: "Full Size",
        detail: "RGB mechanical keyboard with blue tactile switches, anti-ghosting keys, and aluminum top frame.",
        islive: "No"
    }
};

export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            notFound: false
        };
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get("id");
        const product = productDatabase[productId];
        if (product) {
            this.setState({ product });
        } else {
            this.setState({ notFound: true });
        }
    }

    handleSubmit = (e) => {
        alert("Product updated successfully!");
    };

    render() {
        const { product, notFound } = this.state;

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
                                                <li className="breadcrumb-item active" aria-current="page">Edit Product</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">
                                
                                {/* Error Alert */}
                                {notFound && (
                                    <div id="errorAlert" className="alert alert-danger" role="alert">
                                        <h4 className="alert-heading">Product Not Found</h4>
                                        <p className="mb-0">The product ID requested does not exist or has been deleted.</p>
                                    </div>
                                )}

                                {product && (
                                    <div id="editCard" className="card">
                                        <div className="card-header text-bg-primary">
                                            <h3 className="card-title fs-5 mb-0">Edit Product - <span>ID {product.id}</span></h3>
                                        </div>

                                        <div className="card-body">
                                            <div className="row">
                                                {/* Current Product Photo column */}
                                                <div className="col-md-3 text-center border-end mb-4 mb-md-0">
                                                    <h5 className="mb-3 mt-2 pb-2 border-bottom fw-semibold">Current Photo</h5>
                                                    <img id="editProductPreview" src={product.photo} className="img-fluid img-thumbnail shadow mb-3" style={{ maxHeight: "250px" }} alt="Product Image" />
                                                </div>

                                                {/* Form column */}
                                                <div className="col-md-9">
                                                    {/* Form */}
                                                    <form action="product.html" method="GET" onSubmit={this.handleSubmit}>
                                                        <div className="row g-3 mb-3">
                                                            {/* Category select */}
                                                            <div className="col-md-6">
                                                                <label htmlFor="category" className="form-label fw-semibold">Category</label>
                                                                <select className="form-select" id="category" defaultValue={product.category} required>
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
                                                                <input type="text" className="form-control" id="name" defaultValue={product.name} required />
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 mb-3">
                                                            {/* Price */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="price" className="form-label fw-semibold">Price ($)</label>
                                                                <input type="number" step="0.01" min="0" className="form-control" id="price" defaultValue={product.price} required />
                                                            </div>

                                                            {/* Quantity */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                                                                <input type="number" min="0" className="form-control" id="quantity" defaultValue={product.qty} required />
                                                            </div>

                                                            {/* Weight */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="weight" className="form-label fw-semibold">Weight</label>
                                                                <input type="text" className="form-control" id="weight" defaultValue={product.weight} />
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 mb-3">
                                                            {/* Size */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="size" className="form-label fw-semibold">Size</label>
                                                                <input type="text" className="form-control" id="size" defaultValue={product.size} />
                                                            </div>

                                                            {/* Photo file upload */}
                                                            <div className="col-md-8">
                                                                <label htmlFor="photo" className="form-label fw-semibold">Change Photo</label>
                                                                <input type="file" className="form-control" id="photo" />
                                                                <span className="text-secondary small">Leave blank to keep existing photo.</span>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 mb-3">
                                                            {/* Detail description */}
                                                            <div className="col-12">
                                                                <label htmlFor="detail" className="form-label fw-semibold">Product Detail / Description</label>
                                                                <textarea className="form-control" id="detail" rows="4" defaultValue={product.detail} required />
                                                            </div>
                                                        </div>

                                                        {/* Is Live radio group */}
                                                        <div className="mb-4">
                                                            <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="islive" id="yes" value="Yes" defaultChecked={product.islive === "Yes"} />
                                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="islive" id="no" value="No" defaultChecked={product.islive === "No"} />
                                                                <label className="form-check-label" htmlFor="no">No</label>
                                                            </div>
                                                        </div>

                                                        {/* Submit / cancel controls */}
                                                        <div className="text-end border-top pt-3">
                                                            <a href="product.html" className="btn btn-dark me-2">Cancel</a>
                                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                                        </div>
                                                    </form>
                                                    {/* Form */}
                                                </div>
                                            </div>
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
