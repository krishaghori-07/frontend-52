import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
    var [posts, setPosts] = useState([]);
    useEffect(() => {
        //call api 
        var apiAddress = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiAddress).then((response) => response.json()).then((data) => {
            //store state array
            setPosts(data);
        });

    });
    return (<div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Posts</h1>
                <hr />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => {
                            return (<tr>
                                <td >{item.id}</td>
                                <td >{item.userId}</td>
                                <td >{item.title}</td>
                                <td >{item.body}</td>
                                <td >
                                    <button type='button' className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
