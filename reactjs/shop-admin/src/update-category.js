import { Component } from "react";
import Menu from "./menu";

export default class UpdateCategory extends Component {
    handleSubmit = (e) => {
        // Form submit placeholder matching base HTML page
    };

    render() {
        return (
            <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
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
                                                <h3 className="card-title fs-5">Edit category</h3>
                                            </div>

                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <h5 className="mb-1 mt-3 pb-2 border-bottom">Existing Image</h5> <br />
                                                        <img src="http://www.picsum.photos/300" className="img-fluid img-thumbnail shadow" alt="Category" />
                                                    </div>
                                                    <div className="col-10">
                                                        {/* form */}
                                                        <form onSubmit={this.handleSubmit}>
                                                            <div className="card-body">
                                                                <div className="mb-3">
                                                                    <label htmlFor="title" className="form-label">Edit category title</label>
                                                                    <input type="text" className="form-control" id="title" defaultValue="Mobiles" required />
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label htmlFor="photo" className="form-label">Change Photo</label>
                                                                    <input type="file" className="form-control" id="photo" />
                                                                </div>
                                                                <h6 className="text-secondary small text-uppercase mb-2 mt-3">Is Live</h6>
                                                                <div className="form-check mb-2">
                                                                    <input className="form-check-input" type="radio" name="islive" id="yes" defaultChecked />
                                                                    <label className="form-check-label" htmlFor="yes">Yes</label>
                                                                </div>
                                                                <div className="form-check mb-3">
                                                                    <input className="form-check-input" type="radio" name="islive" id="no" />
                                                                    <label className="form-check-label" htmlFor="no">No</label>
                                                                </div>
                                                            </div>
                                                            <div className="text-end">
                                                                <button type="submit" className="btn btn-primary me-2">Save changes</button>
                                                                <button type="reset" className="btn btn-dark">Clear all</button>
                                                            </div>
                                                        </form>
                                                        {/* form */}
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
