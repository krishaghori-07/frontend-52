// create class 
import { Component } from "react";
import Menu from "./menu";
export default class Category extends Component {
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
                                                <div className="d-flex justify-content-between">
                                                    <h3 className>Existing Categories</h3>
                                                    <div><a href="insert-category.html" className="btn btn-light">Add new cateogry</a></div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {/* TABLE */}
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Title</th>
                                                                <th>Status</th>
                                                                <th>Photo</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    Mobiles
                                                                </td>
                                                                <td>
                                                                    <span className="badge text-bg-success"> Yes </span>
                                                                </td>
                                                                <td>
                                                                    <img src="http://www.picsum.photos/100" className="img-fluid" />
                                                                </td>
                                                                <td className="text-end">
                                                                    <div className="btn-group btn-group-sm">
                                                                        <button className="btn btn-outline-secondary" type="button" title="Delete">
                                                                            <i className="bi bi-trash" aria-hidden="true" />
                                                                        </button>
                                                                        <button className="btn btn-outline-secondary" type="button" title="Edit">
                                                                            <i className="bi bi-pencil" aria-hidden="true" />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
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