import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
function UseEffectExample()
{
    //create state variable 
    var [count,setCount] = useState(0);
    useEffect(() => {
        // useEffect hook will run before return statement run 1st time as well as for each time state variable change
        console.log("useEffect hook executed... ",Math.random());
        document.title = `count = ${count}`;
    });
    return (<div className='container'>
        <div className="row">
            <div className="col-12"><h1>useEffect example</h1>
                <button type='button' className='btn btn-primary' onClick={() => setCount(count + 1)}>Click me to change count</button>
            </div>
        </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectExample />)
