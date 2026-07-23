// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// app life cycle
class DinningTable extends React.Component {
    // static variable
    static count = 1;
    // initialization 
    constructor(props) {
        super(props);
        console.log("constructor called....")
        this.name = props.name;
        this.tableno = DinningTable.count;
        DinningTable.count = DinningTable.count + 1;

        //create state object
        this.state = {
            //create state variable
            thali: 0,
            papad: 0,
            roti: 0,
            chas: 0,
            sweet: 0,
            total: 0
        }
    }
    // mounting
    componentWillMount() {
        console.log("componentWillMount method is called...");
    }
    componentDidMount() {
        console.log("componentDidMount method is called...");
    }
    // updating 
    shouldComponentUpdate(nextProp, nextState) {
        console.log('should Component update method is called');
        if (nextState.thali > 4)
            return false// state update is cancelled
        else
            return true; //state update is allowed
    }
    componentWillUpdate(nextProp, nextState) {
        console.log("componentWillUpdate method is called...");
    }
    componentDidUpdate(prevProp, prevState) {
        console.log("componentDidUpdate method is called...");
    }
    // unmounting
    componentWillUnmount() {
        console.log("componentWillUnmount method is called...");
    }
    //arrow function
    updateThali = () => {
        this.setState({
            thali: this.state.thali + 1
        });
    }
    updateRoti = () => {
        this.setState({
            roti: this.state.roti + 1
        });
    }
    updateChas = () => {
        this.setState({
            chas: this.state.chas + 1
        });
    }
    updatePapad = () => {
        this.setState({
            papad: this.state.papad + 1
        });
    }
    updateSweet = () => {
        this.setState({
            sweet: this.state.sweet + 1
        });
    }
    render() {
        console.log('render method is called.');
        return (<div className="col-12 col-md-6 col-lg-3">
            {/* Outer Main Card Container */}
            <div className="card border-dark rounded-5 overflow-hidden">
                {/* Card Header */}
                <div className="card-header bg-primary text-white text-center py-3 border-bottom border-dark border-2">
                    <h5 className="m-0 fw-bold fs-5">
                        <span className="badge bg-warning text-dark me-1">{this.tableno}</span> {this.name}
                    </h5>
                </div>
                {/* Card Body / Content Area */}
                <div className="card-body bg-white p-3">
                    {/* Thali (Full-width card button) */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <button onClick={this.updateThali} type="button" className="btn btn-danger w-100">
                                Thali
                                <span className="badge bg-dark text-white ms-2">
                                    {this.state.thali}
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Nested Grid for Items */}
                    <div className="row g-2">
                        {/* Left Column */}
                        <div className="col-6">
                            {/* Roti */}
                            <button onClick={this.updateRoti} type="button" className="btn btn-info w-100 mb-3">
                                roti <span className="badge bg-secondary ms-1">
                                    {this.state.roti}
                                </span>
                            </button>
                            {/* Butter Milk */}
                            <button onClick={this.updateChas} type="button" className="btn btn-secondary w-100 ">
                                chas
                                <span className="badge bg-dark text-white ms-2">
                                    {this.state.chas}
                                </span>
                            </button>
                        </div>
                        {/* Right Column */}
                        <div className="col-6">
                            {/* Papad */}
                            <button onClick={this.updatePapad} type="button" className="btn btn-warning w-100 mb-3">
                                papad
                                <span className="badge bg-dark text-white ms-2">
                                    {this.state.papad}
                                </span>
                            </button>
                            {/* Sweet */}
                            <button onClick={this.updateSweet} type="button" className="btn btn-success w-100">
                                sweet <span className="badge bg-dark text-white ms-2">
                                    {this.state.sweet}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Card Footer */}
                <div className="card-footer bg-dark text-white text-center py-3 border-top border-dark border-2">
                    <h5 className="m-0 fw-bold fs-5">
                        Total : <span className="text-warning">{this.state.total}</span>
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
                <DinningTable name='Lalji' />
                <DinningTable name='Mayur' />
                <DinningTable name='Karan' />
                <DinningTable name='Krisha' />
            </div> {/* /row */}
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Restaurant />)