import React from "react";
import Menu from "./menu";
import { getBase, getImageBase, verifyLogin } from "./common";
import withHooks from "./hoc";
import { showError } from "./messages";
import { ToastContainer } from "react-toastify";
import axios from "axios";
class ViewProductDetail extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        if (!this.props.cookies || !this.props.cookies['adminid']) {
            return;
        }
        //whenever we want to fetch and display data from server, we use componentDidMount method
        let productid = this.props.params.productid;
        let apiAddress = getBase() + "product.php?productid=" + productid;
        console.log(apiAddress);
        // call api 
        axios(apiAddress).then((response) => {
            console.log(response.data);
            //check error
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                //there is no error 
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no product found");
                }
                else {
                    //delete 2 objects
                    response.data.splice(0, 2);
                    this.setState({
                        products: [...this.state.products, response.data[0]]
                    });
                }
            }
        }).catch((error) => showError());
    }
    render() {
        let redirect = verifyLogin(this.props.cookies);
        if (redirect) return redirect;

        return (<div className="app-wrapper">
            <ToastContainer />
            <Menu />
            {/* Main Content */}
            <main className="app-main">
                <div className="app-content-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h1 className="mb-0 fs-3">Product Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb float-sm-end mb-0">
                                        <li className="breadcrumb-item"><a href="product.html">Products</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">View Detail</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-content">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between gap-2 mb-3">
                            <a href="product.html" className="btn btn-outline-secondary">
                                <i className="bi bi-arrow-left me-1" aria-hidden="true" /> Back to Products
                            </a>
                        </div>
                        <div className="card shadow-sm">
                            <div className="card-header text-bg-primary">
                                <h3 className="card-title fs-5 mb-0">Wireless Bluetooth Headphones</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {/* Left side: Photo (col-md-4) */}
                                    <div className="col-md-4 text-center border-end mb-4 mb-md-0">
                                        <h5 className="mb-3 mt-2 pb-2 border-bottom fw-semibold">Product Photo</h5>
                                        {this.state.products.length !=0 && <img src={getImageBase() + "product/" + this.state.products[0]['photo']} className="img-fluid img-thumbnail shadow mb-3" style={{ "max-height": "350px" }} alt="Product Photo" />}
                                    </div>
                                    {/* Right side: Product Fields (col-md-8) */}
                                    <div className="col-md-8">
                                        <h5 className="mb-3 mt-2 pb-2 border-bottom fw-semibold">Product Specifications</h5>
                                        <div className="table-responsive">
                                            {this.state.products.map((item) => {
                                                return (<table className="table table-striped table-bordered align-middle">
                                                    <tbody>
                                                        <tr>
                                                            <th style={{ "width": "30%" }}>Category</th>
                                                            <td>{item.categorytitle}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Product Name</th>
                                                            <td className="fw-semibold">
                                                                {item.title}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Price ($)</th>
                                                            <td>
                                                                {item.price}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Quantity</th>
                                                            <td>
                                                                {item.stock}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Weight</th>
                                                            <td>
                                                                {item.weight}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Size</th>
                                                            <td>
                                                                {item.size}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Product Detail / Description</th>
                                                            <td>
                                                                {item.detail}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Is Live</th>
                                                            <td>
                                                            {item.islive === '1' ? <span className="badge text-bg-success text-uppercase">Yes</span> : <span className="badge text-bg-success text-uppercase">No</span>}    
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>);
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        );
    }
}
export default withHooks(ViewProductDetail);