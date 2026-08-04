import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './gst.css';
//create function component 
function GSTCalculator()
{
    var [amount,setAmount] = useState(0);
    var [rate,setRate] = useState(0);
    var [type,setType] = useState(0);
    return (<div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5 mt-4">
            <h1 className="fw-bold mb-3">Free GST Calculator</h1>
            <p className="text-muted fs-5">Calculate GST in minutes without any complex math.</p>
        </div>
        {/* Main Calculator Component */}
        <div className="card calculator-card mx-auto bg-white" style={{ "max-width": "950px" }}>
            <div className="row g-0">
                {/* Left Side: Inputs */}
                <div className="col-md-7 p-4 p-lg-5">
                    {/* Amount Input */}
                    <div className="mb-4 pb-2">
                        <label className="form-label">Amount</label>
                        <div className="input-group input-group-lg">
                            <span className="input-group-text border-end-0 fs-5">₹</span>
                            <input type="text" className="form-control border-start-0 ps-0" defaultValue="10,000" readOnly />
                        </div>
                    </div>
                    {/* GST Percentage Dropdown */}
                    <div className="mb-4 pb-2">
                        <label htmlFor="gstRateSelect" className="form-label">GST %</label>
                        <select className="form-select form-select-lg" id="gstRateSelect">
                            <option value={0}>0%</option>
                            <option value={3}>3%</option>
                            <option value={5}>5%</option>
                            <option value={12}>12%</option>
                            <option value={18} selected>18%</option>
                            <option value={28}>28%</option>
                        </select>
                    </div>
                    {/* Tax Exclusive/Inclusive Dropdown */}
                    <div className="mb-2">
                        <label htmlFor="taxTypeSelect" className="form-label">Tax</label>
                        <select className="form-select form-select-lg" id="taxTypeSelect">
                            <option value="exclusive" selected>Exclusive</option>
                            <option value="inclusive">Inclusive</option>
                        </select>
                    </div>
                </div>
                {/* Right Side: Results Display */}
                <div className="col-md-5 p-4 p-lg-5 results-section d-flex flex-column justify-content-center text-center border-start">
                    {/* Actual Amount */}
                    <div className="w-100">
                        <h2 className="result-value">10,000</h2>
                        <p className="result-title">Actual Amount</p>
                    </div>
                    {/* Math Operator */}
                    <div className="math-symbol">+</div>
                    {/* GST Amount */}
                    <div className="w-100">
                        <h2 className="result-value">1,800</h2>
                        <p className="result-title">GST Amount</p>
                    </div>
                    {/* Math Operator */}
                    <div className="math-symbol">=</div>
                    {/* Total Amount */}
                    <div className="w-100 total-box mt-2">
                        <h2 className="result-value">11,800</h2>
                        <p className="result-title text-primary mb-0">Total Amount</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GSTCalculator />)
