import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//create function component 

function ScoreBoard()
{
    //create hook 
    var [four,setFour] = useState(0);

    return (<div className='container'>
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-header text-bg-danger">Virat kohli</div>
                    <div className='card-body'>
                        <button onClick={() => setFour(four + 1)} className='btn btn-primary w-100'>4 X {four}</button>
                    </div>
                    <div className="card-footer">
                        Total Run :- {four * 4} 
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ScoreBoard />)
// include button for 1,2,3,6s and count how 1,2,3,6 has been score by player also update total accordingly 