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
    deleteProduct = (productID) => {
        let apiAddress = getBase() + "delete_product.php?id=" + productID;
        console.log(apiAddress);
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };
        //delete product on server by calling api 
        axios(option).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                //there is error
                showError(error);
            }
            else {
                //there is no error, product deleted successfully
                let message = response.data[1]['message'];
                showMessage(message);
                //also delete product from state array 
                let remainingProducts = this.state.products.filter((item) => {
                    if (item.id !== productID) {
                        return item;
                    }
                });
                this.setState({
                    products: remainingProducts
                });
            }
        }).catch((error) => {
            showError();
        })

    }
    displayProducts = () => {
        return this.state.products.map((item) => {
            return (<tr key={item.id}>
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
        })
    }
    noProductFound = () => {
        return <tr><td colSpan='7' align="center">No product found</td></tr>
    }
    render() {

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
                                                            {
                                                                (this.state.products.length == 0) ? this.noProductFound() : this.displayProducts()
                                                            }
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



            </div>
        );
    }
}
