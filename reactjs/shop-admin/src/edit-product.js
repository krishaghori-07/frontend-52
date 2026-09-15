import { Component } from "react";
import Menu from "./menu";
import axios from "axios";
import { getBase, getImageBase, verifyLogin } from "./common";
import { showError, showMessage } from "./messages";
import withHooks from "./hoc";
import { ToastContainer } from "react-toastify";
import { data, Link } from "react-router-dom";

class EditProduct extends Component {
    constructor(props) {
        super(props);

        // state object
        this.state = {
            title: '',
            price: '',
            size: '',
            weight: '',
            oldPhoto: '',
            photo: null,
            categoryid: '',
            stock: '',
            detail: '',
            islive: '',
            categories: []
        };
    }

    fetchProduct = () => {
        let productid = this.props.params.productid;
        let apiAddress = getBase() + "product.php?productid=" + productid;
        console.log(apiAddress);
        // call api 
        axios(apiAddress).then((response) => {
            console.log(response.data);
            // check error
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                // there is no error 
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no product found");
                }
                else {
                    // delete 2 objects
                    response.data.splice(0, 2);
                    let product = response.data[0];
                    this.setState({
                        title: product['title'] || '',
                        price: product['price'] || '',
                        stock: product['stock'] || '',
                        size: product['size'] || '',
                        weight: product['weight'] || '',
                        detail: product['detail'] || '',
                        islive: product['islive'] !== undefined ? String(product['islive']) : '1',
                        oldPhoto: product['photo'] || '',
                        categoryid: product['categoryid'] !== undefined ? String(product['categoryid']) : ''
                    }, () => {
                        console.log("Product fetched:", product);
                    });
                }
            }
        }).catch((error) => showError());
    }

    fetchCategories = () => {
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
                    // remove 2 object from beginning 
                    response.data.splice(0, 2);
                    // store remaining data into state array 
                    this.setState({
                        categories: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    componentDidMount() {
        if (!this.props.cookies || !this.props.cookies['adminid']) {
            return;
        }
        // whenever we want to fetch and display data from server, we use componentDidMount method
        this.fetchProduct();
        this.fetchCategories();

    }

    updateValue = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
            ...(name === 'stock' ? { quantity: value } : {}),
            ...(name === 'quantity' ? { stock: value } : {}),
            ...(name === 'categoryid' ? { category: value } : {}),
            ...(name === 'category' ? { categoryid: value } : {})
        });
    }

    updatePhoto = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault(); // required 
        console.log(this.state);
        // call api 
        let apiAddress = getBase() + "update_product.php";
        /*
            •	name (required): Product name 
            •	photo (required): Product photo (file upload) 
            •	price (required): Product price 
            •	stock (required): Product stock quantity 
            •	detail (required): Product details 
            •	productid (required): Product ID 
            •	categoryid (required): Category ID 
            •	islive (required): Product live status (0 or 1)
        */
        //create object of formData class
        let form = new FormData();
        form.append("name",this.state.title);
        form.append("photo",this.state.photo);
        form.append("price",this.state.price);
        form.append("stock",this.state.stock);
        form.append("detail",this.state.detail);
        form.append("productid",this.props.params.productid);
        form.append("categoryid",this.state.categoryid);
        form.append("islive",this.state.islive);

        let option = {
            url: apiAddress,
            method: "post",
            responsetype: "json",
            data:form
        };

        axios(option).then((response) => {
            //when we received data from server
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error!=='no')
            {
                showError(error);
            }
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'yes')
                {
                    showMessage(message);
                    setTimeout(() => {
                        this.props.navigate("/product");
                    },2000)
                }
                else 
                {
                    showError(message);
                }
            }
        }).catch((error) => {
            showError(error);
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
                                                <li className="breadcrumb-item"><Link to="/product">Products</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Edit Product</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-content">
                            <div className="container-fluid">

                                <div id="editCard" className="card">
                                    <div className="card-header text-bg-primary">
                                        <h3 className="card-title fs-5 mb-0">Edit Product - <span>{this.state.title}</span></h3>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            {/* Current Product Photo column */}
                                            <div className="col-md-3 text-center border-end mb-4 mb-md-0">
                                                <h5 className="mb-3 mt-2 pb-2 border-bottom fw-semibold">Current Photo</h5>
                                                {this.state.oldPhoto ? (
                                                    <img id="editProductPreview"
                                                        src={getImageBase() + "product/" + this.state.oldPhoto} className="img-fluid img-thumbnail shadow mb-3" style={{ maxHeight: "250px" }} alt={this.state.title || "Product preview"} />
                                                ) : (
                                                    <div className="text-muted p-4 border rounded">No photo available</div>
                                                )}
                                            </div>

                                            {/* Form column */}
                                            <div className="col-md-9">
                                                {/* Form */}
                                                <form method="POST" onSubmit={this.onSubmitForm}>
                                                    <div className="row g-3 mb-3">
                                                        {/* Category select */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="category" className="form-label fw-semibold">Category</label>
                                                            <select
                                                                name="categoryid"
                                                                value={this.state.categoryid}
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-select" id="category" required>
                                                                <option value="">Select Category</option>
                                                                {this.state.categories.map((category_item) => {
                                                                    return <option key={category_item.id} value={category_item.id}>{category_item.title}</option>;
                                                                })}
                                                            </select>
                                                        </div>

                                                        {/* Name */}
                                                        <div className="col-md-6">
                                                            <label htmlFor="name" className="form-label fw-semibold">Product Name</label>
                                                            <input type="text"
                                                                name="title"
                                                                onChange={(e) => this.updateValue(e)}
                                                                className="form-control"
                                                                value={this.state.title}
                                                                id="name" required />
                                                        </div>
                                                        <div className="row g-3 mb-3">
                                                            {/* Price */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="price" className="form-label fw-semibold">Price ($)</label>
                                                                <input type="number" step="0.01" min="0"
                                                                    name='price'
                                                                    value={this.state.price}
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    className="form-control" id="price" required />
                                                            </div>

                                                            {/* Quantity */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="quantity" className="form-label fw-semibold">Quantity</label>
                                                                <input type="number" min="0"
                                                                    name="stock"
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    value={this.state.stock}
                                                                    className="form-control" id="quantity" required />
                                                            </div>

                                                            {/* Weight */}
                                                            <div className="col-md-4">
                                                                <label htmlFor="weight" className="form-label fw-semibold">Weight</label>
                                                                <input type="text"
                                                                    name="weight"
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    value={this.state.weight}
                                                                    className="form-control" id="weight" />
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
                                                                    className="form-control" id="size" />
                                                            </div>

                                                            {/* Photo file upload */}
                                                            <div className="col-md-8">
                                                                <label htmlFor="photo" className="form-label fw-semibold">Change Photo</label>
                                                                <input type="file"
                                                                    name="photo"
                                                                    onChange={(e) => this.updatePhoto(e)}
                                                                    className="form-control" id="photo" />
                                                                <span className="text-secondary small">Leave blank to keep existing photo.</span>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 mb-3">
                                                            {/* Detail description */}
                                                            <div className="col-12">
                                                                <label htmlFor="detail" className="form-label fw-semibold">Product Detail / Description</label>
                                                                <textarea
                                                                    name="detail"
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    className="form-control" id="detail" rows="4" required value={this.state.detail} />
                                                            </div>
                                                        </div>

                                                        {/* Is Live radio group */}
                                                        <div className="mb-4">
                                                            <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="islive" id="yes" value="1"
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    checked={String(this.state.islive) === '1'}
                                                                />
                                                                <label className="form-check-label" htmlFor="yes">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="islive" id="no" value="0"
                                                                    onChange={(e) => this.updateValue(e)}
                                                                    checked={String(this.state.islive) === '0'}
                                                                />
                                                                <label className="form-check-label" htmlFor="no">No</label>
                                                            </div>
                                                        </div>

                                                        {/* Submit / cancel controls */}
                                                        <div className="text-end border-top pt-3">
                                                            <Link to="/product" className="btn btn-dark me-2">Cancel</Link>
                                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                                        </div>
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
export default withHooks(EditProduct);