// create higher order components (function that can use hook when called from class component)
// useNavigate, cookies 
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
//arrow function
const withHooks = (WrappedComponent) => {
    //inner function
    return function EnhancedComponent(props) {

        // React Router
        const navigate = useNavigate();
        const params = useParams();

        // Cookies
        const [cookies, setCookie, removeCookie] = useCookies();

        return (
            <WrappedComponent
                {...props}
                navigate={navigate}
                params={params}
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
            />
        );
    };
};

export default withHooks;