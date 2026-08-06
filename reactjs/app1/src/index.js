import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './gst.css';
class AreaCalculator extends React.Component {
    constructor(props) {
        super(props);
        // create property variable
        this.length = React.createRef();
        this.width = React.createRef();
        this.state = {
            area: ''
        }
    }
    // arrow function
    calculateArea = (e) => {
        let temp = this.length.current.value * this.width.current.value;
        this.setState({
            area: temp
        });
        e.preventDefault();
    }
    render() {
        return (<div>
            {/* Top navbar (pure Bootstrap classes) */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">The EasyLearn Academy</span>
                </div>
            </nav>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-6 fw-bold">Rectangle Area Calculator</h1>
                    <p className="text-muted">Enter the length and width to see the formula used to work out the area.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Rectangle</h5>
                                <p className="card-subtitle text-muted mb-3">Area = Length × Width</p>
                                <form onSubmit={this.calculateArea}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="rectLength" className="form-label">Length</label>
                                            <input type="number" step="any" className="form-control" id="rectLength" placeholder="e.g. 10"
                                                ref={this.length}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="rectWidth" className="form-label">Width</label>
                                            <input type="number" step="any" className="form-control" id="rectWidth"
                                                ref={this.width}
                                                placeholder="e.g. 5" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4">Calculate Area</button>
                                    <h1>{this.state.area}</h1>
                                </form>
                            </div>
                        </div>
                        {/* Note: this page is UI/markup only (Bootstrap 5 classes). No JavaScript
       has been written, so the "Calculate Area" button does not compute a
       result yet — that logic can be wired up separately if needed. */}
                    </div>
                </div>
            </div>
            <footer className="text-center text-muted py-4">
                <small>The EasyLearn Academy — Bootstrap 5 UI Template</small>
            </footer>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AreaCalculator />)
