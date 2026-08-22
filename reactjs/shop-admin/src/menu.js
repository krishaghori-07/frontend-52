import { Component } from "react";
class Menu extends Component {
    render() {
        return (<>
            <nav className="app-header navbar navbar-expand bg-body">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button" aria-label="Toggle sidebar">
                                <i className="bi bi-list" />
                            </a>
                        </li>
                        <li>
                            <h4>Admin panel for online shop</h4>
                        </li>
                    </ul>
                </div>
            </nav>
            <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
                <div className="sidebar-brand" />
                <div className="sidebar-wrapper">
                    <ul className="nav flex-column">
                        <li className="nav-item border-bottom">
                            <a href="dashboard.html" className="nav-link fs-5">Dashboard</a>
                        </li>
                        <li className="nav-item border-bottom">
                            <a href="category.html" className="nav-link fs-5 active bg-primary text-white">Categories</a>
                        </li>
                        <li className="nav-item border-bottom">
                            <a href="users.html" className="nav-link fs-5">Users</a>
                        </li>
                        <li className="nav-item border-bottom">
                            <a href="orders.html" className="nav-link fs-5">Orders</a>
                        </li>
                        <li className="nav-item border-bottom">
                            <a href="product.html" className="nav-link fs-5">Products</a>
                        </li>
                        <li className="nav-item border-bottom">
                            <a href="change-password.html" className="nav-link fs-5">Change Password</a>
                        </li>
                        <li className="nav-item border-bottom">>
                            <a href="" className="nav-link fs-5">Logout</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>)
    }
}
export default Menu;