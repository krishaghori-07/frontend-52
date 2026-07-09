// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
import './clock.css'
// create user defined function 
function DigitalClock() {
    //create Date class object 
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let ampm = null;
    if (hour>12)
    {
        ampm = "PM";
    }
    else if(hour<12)
    {
        ampm = "am";
    }
    else 
    {
        ampm = "noon";
    }
    let page = (<div className="clock-container">
        <div className="clock">
            <div className="time">
                {hour} <span className="colon">:</span> {minute} <span className="colon">:</span> {second}
                <span className="ampm">{ampm}</span>
            </div>
        </div>
    </div>);
    return page;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// call function
var title = "the easylearn academy"
root.render(DigitalClock());
