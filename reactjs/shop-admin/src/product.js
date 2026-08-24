import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: "201",
                    category: "Electronics",
                    name: "Wireless Bluetooth Headphones",
                    photo: "http://www.picsum.photos/100",
                    price: "$99.00",
                    qty: "45",
                    weight: "0.25 kg",
                    size: "Medium",
                    detail: "High-quality wireless over-ear headphones with active noise cancellation and 40h battery life.",
                    islive: "Yes"
                },
                {
                    id: "202",
                    category: "Apparel",
                    name: "Leather Trifold Wallet",
                    photo: "http://www.picsum.photos/101",
                    price: "$89.99",
                    qty: "12",
                    weight: "0.10 kg",
                    size: "Small",
                    detail: "Genuine cowhide leather trifold wallet featuring multiple card slots and RFID protection.",
                    islive: "Yes"
                },
                {
                    id: "203",
                    category: "Office Supplies",
                    name: "Mechanical Gaming Keyboard",
                    photo: "http://www.picsum.photos/102",
                    price: "$120.00",
                    qty: "28",
                    weight: "1.10 kg",
                    size: "Full Size",
                    detail: "RGB mechanical keyboard with blue tactile switches, anti-ghosting keys, and aluminum top frame.",
                    islive: "No"
                }
            ],
            selectedProduct: null
        };
    }

    showProductDetail = (product) => {
        this.setState({ selectedProduct: product });
    };

    deleteProduct = (productId) => {
        if (window.confirm(`Are you sure you want to delete product ID ${productId}?`)) {
            this.setState({
                products: this.state.products.filter(p => p.id !== productId)
            });
            alert("Product deleted successfully!");
        }
    };

    render() {
        const { products, selectedProduct } = this.state;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <div className="app-wrapper">
                    <Menu />
                    <main className="app-main">
                        <div className="app-content-header">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h1 className="mb-0 fs-3">Product Management</h1>
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
                                                    <h3 className="mb-0 fs-5">Existing Products</h3>
                                                    <div><Link to="/insert-product" className="btn btn-light btn-sm fw-semibold">Add new product</Link></div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                {/* TABLE */}
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Category</th>
                                                                <th>Name</th>
                                                                <th>Photo</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {products.map((prod) => (
                                                                <tr key={prod.id} id={`row-${prod.id}`}>
                                                                    <td>{prod.id}</td>
                                                                    <td>{prod.category}</td>
                                                                    <td>{prod.name}</td>
                                                                    <td>
                                                                        <img src={prod.photo} className="img-fluid img-thumbnail" style={{ maxHeight: "50px" }} alt={prod.name} />
                                                                    </td>
                                                                    <td>{prod.price}</td>
                                                                    <td>{prod.qty}</td>
                                                                    <td className="text-end">
                                                                        <div className="btn-group btn-group-sm">
                                                                            <button className="btn btn-outline-secondary" type="button" title="View Detail" data-bs-toggle="modal" data-bs-target="#productDetailModal" onClick={() => this.showProductDetail(prod)}>
                                                                                <i className="bi bi-eye" aria-hidden="true" />
                                                                            </button>
                                                                            <Link to="/edit-product" className="btn btn-outline-secondary" title="Edit">
                                                                                <i className="bi bi-pencil" aria-hidden="true" />
                                                                            </Link>
                                                                            <button className="btn btn-outline-secondary" type="button" title="Delete" onClick={() => this.deleteProduct(prod.id)}>
                                                                                <i className="bi bi-trash" aria-hidden="true" />
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
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

                {/* Product Detail Modal */}
                <div className="modal fade" id="productDetailModal" tabIndex="-1" aria-labelledby="productDetailModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title" id="productDetailModalLabel">Product Detail - {selectedProduct ? selectedProduct.name : ""}</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body text-center">
                                {selectedProduct && (
                                    <>
                                        <img id="modalProductPhoto" src={selectedProduct.photo} className="img-fluid img-thumbnail shadow mb-3" style={{ maxHeight: "200px" }} alt={selectedProduct.name} />
                                        <table className="table table-bordered text-start align-middle">
                                            <tbody>
                                                <tr>
                                                    <th>Product ID</th>
                                                    <td>{selectedProduct.id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Category</th>
                                                    <td>{selectedProduct.category}</td>
                                                </tr>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <td>{selectedProduct.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Price</th>
                                                    <td>{selectedProduct.price}</td>
                                                </tr>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <td>{selectedProduct.qty}</td>
                                                </tr>
                                                <tr>
                                                    <th>Weight</th>
                                                    <td>{selectedProduct.weight}</td>
                                                </tr>
                                                <tr>
                                                    <th>Size</th>
                                                    <td>{selectedProduct.size}</td>
                                                </tr>
                                                <tr>
                                                    <th>Description</th>
                                                    <td>{selectedProduct.detail}</td>
                                                </tr>
                                                <tr>
                                                    <th>Is Live</th>
                                                    <td>
                                                        <span className={`badge ${selectedProduct.islive === "Yes" ? "text-bg-success" : "text-bg-danger"}`}>
                                                            {selectedProduct.islive}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
