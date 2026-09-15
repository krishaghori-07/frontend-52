import { Component } from "react";
import Menu from "./menu";
import { getBase, verifyLogin } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
import withHooks from "./hoc";
class InsertProduct extends Component {
    handleSubmit = (e) => {
        alert("Product added successfully!");
    };
    constructor(props) {
        super(props);
        this.state = {
            categories: [], // stores categories fetched from server
            category: '',    // Maps to <select id="category"> (defaultValue is "")
            name: '',        // Maps to <input id="name">
            price: '',       // Maps to <input id="price">
            quantity: '',    // Maps to <input id="quantity">
            weight: '',      // Maps to <input id="weight">
            size: '',        // Maps to <input id="size">
            photo: null,     // Maps to <input id="photo" type="file"> (null is best for file objects)
            detail: '',      // Maps to <textarea id="detail">
            islive: 1    // Maps to <input name="islive"> (defaultChecked is on "Yes")
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
        //call api to insert product on server
        let apiAddress = getBase() + "insert_product.php";
        console.log(apiAddress);
        //to pass input in api, 1st create object 
        let form = new FormData();
        //once object is created store input into it
        form.append("name", this.state.name);
        form.append("photo", this.state.photo);
        form.append("price", this.state.price);
        form.append("stock", this.state.quantity);
        form.append("detail", this.state.detail);
        form.append("categoryid", this.state.category);
        form.append("islive", this.state.islive);
        console.log(form);
        let option = {
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form,
        };

        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            console.log(error);
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    //user navigate after 2 seconds pause 
                    setTimeout(() => {
                        // then display product screen to user 
                        this.props.navigate("/product");
                    },2000);
                }
            }
        }).catch((error) => {
            showError();
            console.log(error);
        });
    }

    componentDidMount() {
        if (!this.props.cookies || !this.props.cookies['adminid']) {
            return;
        }
        let apiAddress = getBase() + "category.php";
        let option = {
            url: apiAddress,
            responsetype: 'json',
            method: 'get'
        };
        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError('no category found');
                }
                else {
                    //remove 2 object from beginning 
                    response.data.splice(0, 2);
                    //store remaining data into state array 
                    this.setState({
                        categories: response.data
                    });

                }
            }
        }).catch((error) => {
            showError();
        });
    }
   
    render() {
        let redirect = verifyLogin(this.props.cookies);
        if (redirect) return redirect;

        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
                <div className="app-wrapper">
                    <ToastContainer />
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
                                                                {this.state.categories.map((item) => {
                                                                    return <option key={item.id} value={item.id}>{item.title}</option>
                                                                })}
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
                                                                onChange={(e) => this.updateValue(e)}
                                                                value={this.state.price}
                                                                className="form-control" id="price" placeholder="0.00" required />
                                                        </div>

                                                        {/* Quantity */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                                                            <input type="number" min="0"
                                                                name="quantity"
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control"
                                                                value={this.state.quantity}
                                                                id="quantity" placeholder="0" required />
                                                        </div>

                                                        {/* Weight */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="weight" className="form-label fw-semibold">Weight</label>
                                                            <input type="text"
                                                                name="weight"
                                                                onChange={(e) => this.updateValue(e)}
                                                                value={this.state.weight}
                                                                className="form-control" id="weight" placeholder="e.g. 0.25 kg" />
                                                        </div>
                                                    </div>

                                                    <div className="row g-3 mb-3">
                                                        {/* Size */}
                                                        <div className="col-md-4">
                                                            <label htmlFor="size" className="form-label fw-semibold">Size</label>
                                                            <input type="text"
                                                                name="size"
                                                                onChange={(e) => this.updateValue(e)}
                                                                value={this.state.size}
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
                                                                className="form-control" id="detail" rows="4"
                                                                value={this.state.detail}
                                                                name="detail"
                                                                onChange={(e) => this.updateValue(e)}
                                                                placeholder="Enter product description here..." required />
                                                        </div>
                                                    </div>

                                                    {/* Is Live radio group */}
                                                    <div className="mb-4">
                                                        <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="yes" value="1"
                                                                value={this.state.islive}
                                                                onChange={(e) => this.updateValue(e)}
                                                                required />
                                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="islive" id="no" value="0"
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
export default withHooks(InsertProduct);
