import React from 'react';
import ReactDOM from 'react-dom/client';
import './calculator.css';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        //create empty state object
        this.state = {
            answer : ''
        };
    }

    //arrow function (event is automatically received argument (implicit argument))
    calculateResult = (event) => {
        //display state variable
        console.log(this.state);
        event.preventDefault(); //compulsory otherwise page will refresh
        let result = null;
        if(this.state.operation === '1')
        {
            result = this.state.num1 + this.state.num2
        }
        else if(this.state.operation === '2')
        {
            result = this.state.num1 - this.state.num2
        }
        else if(this.state.operation === '3')
        {
            result = this.state.num1 * this.state.num2
        }
        else if(this.state.operation === '4')
        {
            result = this.state.num1 / this.state.num2
        }
        this.setState({
            answer: result
        }); //this will call render method 
    }

    //arrow function (event is automatically received argument (implicit argument))
    updateInput = (event) => {
        //create or update state variable
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-center">
                            <h4>Simple Calculator</h4>
                        </div>
                        <div className="card-body">
                            <form action="#" method="POST"
                                onSubmit={this.calculateResult}
                            >
                                {/* First Number */}
                                <div className="mb-4">
                                    <label htmlFor="num1" className="form-label">First Number</label>
                                    <input type="number" className="form-control" id="num1" name="num1"
                                        value={this.state.num1}
                                        onChange={(e) => this.updateInput(e)}
                                        placeholder="Enter first number"
                                        step="any" required />
                                </div>
                                {/* Second Number */}
                                <div className="mb-4">
                                    <label htmlFor="num2" className="form-label">Second Number</label>
                                    <input type="number" className="form-control" id="num2" name="num2"
                                        value={this.state.num2}
                                        onChange={(e) => this.updateInput(e)}
                                        placeholder="Enter second number"
                                        step="any" required />
                                </div>
                                {/* Operation */}
                                <div className="mb-4">
                                    <label className="form-label d-block">Operation</label>
                                    <div className="operation-group">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="operation"
                                                        value={this.state.operation}
                                                        onChange={(e) => this.updateInput(e)}
                                                        id="addition"
                                                        value="1" required />
                                                    <label className="form-check-label" htmlFor="addition">
                                                        Addition (+)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="operation"
                                                        value={this.state.operation}
                                                        onChange={(e) => this.updateInput(e)} required
                                                        id="subtraction"
                                                        value="2" />
                                                    <label className="form-check-label" htmlFor="subtraction">
                                                        Subtraction (-)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="operation"
                                                        value={this.state.operation}
                                                        onChange={(e) => this.updateInput(e)} required
                                                        id="multiplication"
                                                        value="3" />
                                                    <label className="form-check-label" htmlFor="multiplication">
                                                        Multiplication (×)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                        name="operation"
                                                        value={this.state.operation}
                                                        onChange={(e) => this.updateInput(e)}
                                                        id="division" required
                                                        value="4" />
                                                    <label className="form-check-label" htmlFor="division">
                                                        Division (÷)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-submit">
                                        Calculate
                                    </button>
                                </div>
                                <div className='text-center text-primary display-4'>
                                    {this.state.answer}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />)