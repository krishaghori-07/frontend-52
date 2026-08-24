import { Component } from "react";
import { Link } from "react-router-dom";
class Menu extends Component {
    render() {
        return (<>
            <nav className="app-header navbar navbar-expand bg-body">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-lte-toggle="sidebar" to="#" role="button" aria-label="Toggle sidebar">
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
                            <Link to="/dashboard" className="nav-link fs-5">Dashboard</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/category" className="nav-link fs-5 active bg-primary text-white">Categories</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/user" className="nav-link fs-5">Users</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/order" className="nav-link fs-5">Orders</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/product" className="nav-link fs-5">Products</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/change-password" className="nav-link fs-5">Change Password</Link>
                        </li>
                        <li className="nav-item border-bottom">
                            <Link to="/logout" className="nav-link fs-5">Logout</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>)
    }
}
export default Menu;