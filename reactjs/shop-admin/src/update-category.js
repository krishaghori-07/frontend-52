import { Component } from "react";
import Menu from "./menu";
import axios from "axios";
import { getBase, getImageBase, verifyLogin } from "./common";
import { showError, showMessage } from "./messages";
import withHooks from "./hoc";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

class UpdateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            oldPhoto: '',
            photo: null,
            islive: '1'
        };
    }

    fetchCategory = () => {
        let categoryid = this.props.params?.categoryid || new URLSearchParams(window.location.search).get("id");
        if (!categoryid) {
            showError("Category ID not specified");
            return;
        }
        let apiAddress = getBase() + "category.php?id=" + categoryid;
        axios(apiAddress).then((response) => {
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
                    let category = response.data[0];
                    this.setState({
                        id: category['id'] || categoryid,
                        title: category['title'] || '',
                        oldPhoto: category['photo'] || '',
                        islive: category['islive'] !== undefined ? String(category['islive']) : '1'
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
        this.fetchCategory();
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

    onSubmitForm = (e) => {
        e.preventDefault();
        let categoryid = this.state.id || this.props.params?.categoryid || new URLSearchParams(window.location.search).get("id");
        let apiAddress = getBase() + "update_category.php";

        let form = new FormData();
        form.append("id", categoryid);
        form.append("title", this.state.title);
        form.append("islive", this.state.islive);

        const submitData = (formData) => {
            let option = {
                url: apiAddress,
                method: "post",
                responseType: "json",
                data: formData
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
                    if (success === 'yes') {
                        showMessage(message);
                        setTimeout(() => {
                            this.props.navigate("/category");
                        }, 2000);
                    }
                    else {
                        showError(message);
                    }
                }
            }).catch((error) => {
                showError();
            });
        };

        if (this.state.photo) {
            form.append("photo", this.state.photo);
            submitData(form);
        } else if (this.state.oldPhoto) {
            fetch(getImageBase() + "category/" + this.state.oldPhoto)
                .then(res => res.blob())
                .then(blob => {
                    let file = new File([blob], this.state.oldPhoto, { type: blob.type || "image/jpeg" });
                    form.append("photo", file);
                    submitData(form);
                })
                .catch(() => {
                    form.append("photo", this.state.photo);
                    submitData(form);
                });
        } else {
            form.append("photo", this.state.photo);
            submitData(form);
        }
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
                                                <li className="breadcrumb-item active" aria-current="page">Edit Category</li>
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
                                                <h3 className="card-title fs-5 mb-0">Edit Category</h3>
                                            </div>

                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-3 text-center mb-3 mb-md-0">
                                                        <h6 className="fw-semibold text-secondary text-uppercase small mb-2">Existing Photo</h6>
                                                        {this.state.oldPhoto ? (
                                                            <img
                                                                src={getImageBase() + "category/" + this.state.oldPhoto}
                                                                className="img-fluid img-thumbnail shadow-sm rounded"
                                                                alt={this.state.title || "Category Photo"}
                                                                style={{ maxHeight: '180px', objectFit: 'cover' }}
                                                            />
                                                        ) : (
                                                            <div className="p-4 bg-light border rounded text-muted">No photo uploaded</div>
                                                        )}
                                                    </div>

                                                    <div className="col-md-9">
                                                        <form onSubmit={this.onSubmitForm}>
                                                            <div className="mb-3">
                                                                <label htmlFor="title" className="form-label fw-semibold">Edit Category Title</label>
                                                                <input
                                                                    type="text"
                                                                    name="title"
                                                                    id="title"
                                                                    value={this.state.title}
                                                                    onChange={this.updateValue}
                                                                    className="form-control"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="photo" className="form-label fw-semibold">Change Photo (optional)</label>
                                                                <input
                                                                    type="file"
                                                                    name="photo"
                                                                    id="photo"
                                                                    onChange={this.updatePhoto}
                                                                    className="form-control"
                                                                />
                                                                <div className="form-text text-muted">Leave empty to keep existing photo.</div>
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
                                                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
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

export default withHooks(UpdateCategory);
