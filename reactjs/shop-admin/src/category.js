import { Component } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./messages";
import { getBase, getImageBase } from "./common";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        let apiAddress = getBase() + "category.php";
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
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0) {
                    showError("no category found");
                }
                else {
                    response.data.splice(0, 2);
                    showMessage("categories fetched successfully");
                    this.setState({
                        categories: response.data
                    });
                }
            }
        }).catch((error) => {
            showError();
        });
    }

    deleteCategory = (categoryId) => {
        let apiAddress = getBase() + "delete_category.php?id=" + categoryId;
        console.log(apiAddress);
        let option = {
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        };
        axios(option).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let message = response.data[1]['message'];
                showMessage(message);
                let remainingCategories = this.state.categories.filter((item) => {
                    return item.id !== categoryId;
                });
                this.setState({
                    categories: remainingCategories
                });
            }
        }).catch((error) => {
            showError();
        });
    }

    displayCategories = () => {
        return this.state.categories.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        {item.islive === "1" || item.islive === 1 ? (
                            <span className="badge text-bg-success">Yes</span>
                        ) : (
                            <span className="badge text-bg-danger">No</span>
                        )}
                    </td>
                    <td style={{ width: '120px' }}>
                        <img
                            src={getImageBase() + "category/" + item.photo}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: '60px', objectFit: 'cover' }}
                        />
                    </td>
                    <td className="text-end">
                        <div className="btn-group btn-group-sm">
                            <button
                                onClick={() => this.deleteCategory(item.id)}
                                type="button"
                                className="btn btn-outline-danger"
                                title="Delete"
                            >
                                <i className="bi bi-trash" aria-hidden="true" />
                            </button>
                            <Link
                                to={"/update-category/" + item.id}
                                className="btn btn-outline-secondary"
                                title="Edit"
                            >
                                <i className="bi bi-pencil" aria-hidden="true" />
                            </Link>
                        </div>
                    </td>
                </tr>
            );
        });
    }

    noCategoryFound = () => {
        return (
            <tr>
                <td colSpan="5" className="text-center">No category found</td>
            </tr>
        );
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
                                        <h1 className="mb-0 fs-3">Category Management</h1>
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
                                                    <h3 className="mb-0 fs-5">Existing Categories</h3>
                                                    <div>
                                                        <Link to="/insert-category" className="btn btn-light btn-sm fw-semibold">Add new category</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Title</th>
                                                                <th>Status</th>
                                                                <th>Photo</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.categories.length === 0
                                                                ? this.noCategoryFound()
                                                                : this.displayCategories()}
                                                        </tbody>
                                                    </table>
                                                </div>
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