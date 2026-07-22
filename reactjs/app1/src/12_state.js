// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
class Product extends React.Component {
    constructor(props)
    {
        super(props); //required 
        //create property variables (we can access any method of same class)
        this.name = props.name;
        this.price = props.price;
        // create object named as state 
        this.state = {
            quantity : props.quantity,
            totalValue : props.price * props.quantity,
            soldQuantity:0
        }
    }
    //arrow function 
    updateQuantity = () => {
        //alert("button clicked " + this.name);
        if(this.state.quantity > 0)
        {
            // this.state.quantity = this.state.quantity - 1
            //state variables must be updated in special way
            this.setState({
                quantity : this.state.quantity - 1,
                soldQuantity: this.state.soldQuantity + 1
                
            },() => {
                //this arrow function will run only after state variables updated 
                this.setState({
                    totalValue: this.price * this.state.quantity
                })
            });
        }
    }
    render() {
        return (<div className="col-lg-3" >
            <div className="card shadow">
                <div className="card-header text-bg-primary">
                    <h1>{this.name}</h1>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Available Unit {this.state.quantity}</li>
                        <li className="list-group-item">Price {this.price}</li>
                        <li className="list-group-item">Sold Unit {this.state.soldQuantity}</li>
                        <li className="list-group-item">Total stock value {this.state.totalValue}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <button onClick={this.updateQuantity}  type="button" className="btn btn-primary">Sell 1 Unit</button>
                </div>
            </div>
        </div>)
    }
}
class Shop extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <Product name='Amul bread' price='80' quantity='5' /> 
                <Product name='Biscuits' price='20' quantity='100' /> 
                <Product name='Gathiya' price='100' quantity='50' /> 
                <Product name='Amul Milk' price='40' quantity='30' /> 
            </div>
        </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// this will actually run Website function
root.render(<Shop />)