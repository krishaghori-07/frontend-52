import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

function get() {
    return "http://www.theeasylearnacademy.com/shop/";
}
export function getBase() {
    let address = get() + "ws/";
    return address;
}
export function getImageBase() {
    let address = get() + "images/";
    return address;
}

/**
 * Verifies if admin is logged in.
 * If not logged in, returns <Navigate to="/login" replace /> for declarative redirection in render().
 * If logged in, returns null.
 * 
 * Usage in component render():
 * let redirect = verifyLogin(this.props.cookies);
 * if (redirect) return redirect;
 */
export function verifyLogin(arg) {
    let adminid;
    if (arg && arg.cookies) {
        adminid = arg.cookies['adminid'];
    } else if (arg && arg.props && arg.props.cookies) {
        adminid = arg.props.cookies['adminid'];
    } else if (arg && typeof arg === 'object' && 'adminid' in arg) {
        adminid = arg['adminid'];
    }
    console.log("adminid ", adminid);
    if (!adminid || adminid === undefined) {
        return <Navigate to="/login" replace />;
    }
    return null;
}

/**
 * Helper to check if logged in (boolean), useful in componentDidMount before API calls.
 */
export function isLoggedIn(arg) {
    return verifyLogin(arg) === null;
}