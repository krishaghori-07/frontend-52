// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
class DinningTable extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (<div className="col-12 col-md-6 col-lg-3">
            {/* Outer Main Card Container */}
            <div className="card border-dark rounded-5 overflow-hidden">
                {/* Card Header */}
                <div className="card-header bg-primary text-white text-center py-3 border-bottom border-dark border-2">
                    <h5 className="m-0 fw-bold fs-5">
                        <span className="badge bg-warning text-dark me-1">1</span> Karan Bhatt
                    </h5>
                </div>
                {/* Card Body / Content Area */}
                <div className="card-body bg-white p-3">
                    {/* Thali (Full-width card button) */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <button type="button" className="btn btn-danger w-100">
                                Thali <span className="badge bg-dark text-white ms-2">3</span>
                            </button>
                        </div>
                    </div>
                    {/* Nested Grid for Items */}
                    <div className="row g-2">
                        {/* Left Column */}
                        <div className="col-6">
                            {/* Roti */}
                            <button type="button" className="btn btn-info w-100 mb-3">
                                roti <span className="badge bg-secondary ms-1">0</span>
                            </button>
                            {/* Butter Milk */}
                            <button type="button" className="btn btn-secondary w-100 ">
                                butter milk
                            </button>
                        </div>
                        {/* Right Column */}
                        <div className="col-6">
                            {/* Papad */}
                            <button type="button" className="btn btn-warning w-100 mb-3">
                                papad
                            </button>
                            {/* Sweet */}
                            <button type="button" className="btn btn-success w-100">
                                sweet
                            </button>
                        </div>
                    </div>
                </div>
                {/* Card Footer */}
                <div className="card-footer bg-dark text-white text-center py-3 border-top border-dark border-2">
                    <h5 className="m-0 fw-bold fs-5">
                        Total : <span className="text-warning">1200</span>
                    </h5>
                </div>
            </div> {/* /Card Container */}
        </div>);
    }
}
class Restaurant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row mt-5">
                <DinningTable />
                <DinningTable />
            </div> {/* /row */}
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Restaurant />)