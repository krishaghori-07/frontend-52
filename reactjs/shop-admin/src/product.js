import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { showError, showMessage } from "./messages";
import { getBase, getImageBase } from "./common";
export default class Product extends Component {

    componentDidMount() {
        //this method executes after render method execute 1st time 
        //api call (fetch data from server)
        let apiAddress = getBase() + "product.php";
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
                //there is error 
                showError(error);
            }
            else {
                //there is no error 
                //then get total 
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no product found");
                }
                else {
                    //there are products 
                    response.data.splice(0, 2); //delete 2 object from beginning 
                    showMessage("products fetched successfully")
                    this.setState({
                        products: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    showProductDetail = (product) => {
        this.setState({ selectedProduct: product });
    };

    deleteProduct = (productID) => {
        let apiAddress = getBase() + "delete_product.php?id" + productID;
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };

    }

    render() {
        const { products, selectedProduct } = this.state;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <ToastContainer />
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
                                                            {this.state.products.map((item) => {
                                                                return (<tr>
                                                                    <td>{item.id}</td>
                                                                    <td>{item.categorytitle}</td>
                                                                    <td>{item.title}</td>
                                                                    <td width='200px'>
                                                                        <img src={getImageBase() + "product/" + item.photo} alt="" className="img-fluid" />
                                                                    </td>
                                                                    <td>{item.price}</td>
                                                                    <td>{item.stock}</td>
                                                                    <td>
                                                                        <button onClick={() => this.deleteProduct(item.id)} type='button' className='btn btn-danger w-100'>Delete</button> <br />
                                                                        <Link className='btn btn-warning w-100'>Edit</Link> <br />
                                                                        <Link className='btn btn-secondary w-100'>View Detail</Link>
                                                                    </td>
                                                                </tr>)
                                                            })}
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
