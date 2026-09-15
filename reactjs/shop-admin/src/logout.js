import { Component } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import withHooks from "./hoc";
import { showMessage } from "./messages";

class Logout extends Component {
    constructor(props) {
        super(props);
        // Clear adminid cookie across all paths
        const cookieStore = new Cookies();
        cookieStore.remove("adminid", { path: '/' });
        if (props.removeCookie) {
            props.removeCookie("adminid", { path: '/' });
        }
        showMessage("Logged out successfully");
    }

    render() {
        return <Navigate to="/login" replace />;
    }
}

export default withHooks(Logout);
