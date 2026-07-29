import React from 'react';
import ReactDOM from 'react-dom/client';
class MyMenu extends React.Component {

    constructor(props) {
        //create state variable
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    doLogin = () => {
        // alert("You have logged in successfully");
        this.setState({
            isLoggedIn: true
        });
    }

    doLogout = () => {
        // alert("You have logged out successfully");
        this.setState({
            isLoggedIn: false
        });
    }
    GuestMenu() {
        //alert("Guest Menu");
        return (
            <>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Register</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Forgot password</a>
                </li>
                <li className="nav-item">
                    <a onClick={this.doLogin} href="#" className="nav-link text-white">Login</a>
                </li>
            </>
        );
    }
    UserMenu(){
        //alert("User Menu");
        return (<>
            <li className="nav-item">
                <a href="#" className="nav-link text-white">Cart</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-white">Checkout</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link text-white">Change password</a>
            </li>
            <li className="nav-item">
                <a onClick={this.doLogout} href="#" className="nav-link text-white">Logout</a>
            </li>
        </>)

    }
    render() {
        return (<nav className="navbar navbar-expand-lg" style={{ "background-color": "chocolate" }}>
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-white">the easy learn acedemy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="coolapse" data-bs-target="#navbarsupportedcontent" aria-controls="navbarsupportedcontent" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsupportedcontent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">About us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Shop</a>
                        </li>
                        {(this.state.isLoggedIn == true) ? this.UserMenu() : this.GuestMenu()}

                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyMenu />)