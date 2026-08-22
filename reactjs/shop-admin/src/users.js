import { Component } from "react";
import Menu from "./menu";

export default class Users extends Component {
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
                                        <h1 className="mb-0 fs-3">User Management</h1>
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
                                                    <h3 className="mb-0 fs-5">Existing Users</h3>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                {/* TABLE */}
                                                <div className="table-responsive">
                                                    <table className="table align-middle mb-0 table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Email</th>
                                                                <th>Created At</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1001</td>
                                                                <td>john.doe@example.com</td>
                                                                <td>2026-08-15 10:24:12</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1002</td>
                                                                <td>sarah.connor@example.com</td>
                                                                <td>2026-08-16 14:15:30</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1003</td>
                                                                <td>bruce.wayne@gotham.com</td>
                                                                <td>2026-08-18 09:05:00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1004</td>
                                                                <td>tony.stark@starkindustries.com</td>
                                                                <td>2026-08-20 18:42:55</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1005</td>
                                                                <td>clark.kent@dailyplanet.com</td>
                                                                <td>2026-08-21 11:30:20</td>
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
