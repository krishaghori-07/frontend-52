// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
// import css file from src (optional)
// always use ./ while importing files from src folder
import './index.css';
// create variable and store output into it 
let output = <div><h1>2nd example</h1><hr/>hello everyone <p>Ankit Patel</p></div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);
