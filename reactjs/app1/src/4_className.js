// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// import css file from src (optional)
// always use ./ while importing files from src folder
import './index.css';
var num1 = 10; 
var num2 = 3;
// create variable and store output into it 
let output = (<div>
    <h1 className='heading'>apply css class</h1>
    <ul>
        <li className='list-item'>num1 = {num1}  num2 = {num2}</li>
        <li className='list-item'>Addition {num1+num2}</li>
        <li className='list-item'>Subtraction {num1-num2}</li>
        <li className='list-item'>Multiplication {num1*num2}</li>
        <li className='list-item'>Division {num1/num2}</li>
    </ul>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);
