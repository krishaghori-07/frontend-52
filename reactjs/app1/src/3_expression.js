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
    <h1>Javascript expression (statement)</h1>
    <ul>
        <li>num1 = {num1}  num2 = {num2}</li>
        <li>Addition {num1+num2}</li>
        <li>Subtraction {num1-num2}</li>
        <li>Multiplication {num1*num2}</li>
        <li>Division {num1/num2}</li>
    </ul>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);
