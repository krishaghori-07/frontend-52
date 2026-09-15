import { Component } from "react";
import Menu from "./menu";
import { getBase, verifyLogin } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
import withHooks from "./hoc";
import { Link } from "react-router-dom";

class InsertCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            photo: null,
            islive: 1
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
        let apiAddress = getBase() + "insert_category.php";
        let form = new FormData();
        form.append("title", this.state.title);
        form.append("photo", this.state.photo);
        form.append("islive", this.state.islive);

        let option = {
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: form,
        };

        axios(option).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
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
                    setTimeout(() => {
                        this.props.navigate("/category");
                    }, 2000);
                }
            }
        }).catch((error) => {
            showError();
            console.log(error);
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
                                        <h1 className="mb-0 fs-3">Category Management</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb float-sm-end mb-0">
                                                <li className="breadcrumb-item"><Link to="/category">Categories</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Add Category</li>
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
                                                <h3 className="card-title fs-5 mb-0">Add Category</h3>
                                            </div>

                                            <div className="card-body">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label fw-semibold">Category Title</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            id="title"
                                                            value={this.state.title}
                                                            onChange={this.updateValue}
                                                            className="form-control"
                                                            placeholder="e.g. Laptops, Smartphones"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="photo" className="form-label fw-semibold">Select Photo</label>
                                                        <input
                                                            type="file"
                                                            name="photo"
                                                            id="photo"
                                                            onChange={this.updatePhoto}
                                                            className="form-control"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <h6 className="text-secondary small text-uppercase fw-semibold mb-2">Is Live</h6>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="islive"
                                                                id="yes"
                                                                value="1"
                                                                checked={String(this.state.islive) === "1"}
                                                                onChange={this.updateValue}
                                                            />
                                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="islive"
                                                                id="no"
                                                                value="0"
                                                                checked={String(this.state.islive) === "0"}
                                                                onChange={this.updateValue}
                                                            />
                                                            <label className="form-check-label" htmlFor="no">No</label>
                                                        </div>
                                                    </div>

                                                    <div className="text-end border-top pt-3">
                                                        <Link to="/category" className="btn btn-dark me-2">Cancel</Link>
                                                        <button type="submit" className="btn btn-primary">Save Category</button>
                                                    </div>
                                                </form>
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

export default withHooks(InsertCategory);
