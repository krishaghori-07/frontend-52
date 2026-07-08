// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client';
let page = (
<div className='container'>
    {/* this is container */}
    <div className='row'>
        {/* this is row */}
        <div className="col-12">
            {/* this is col-12 */}
            <h1 className='text-uppercase text-danger'>Page title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque alias repudiandae nam veniam dicta asperiores ratione obcaecati tempora, voluptas reiciendis accusamus quidem. Reiciendis doloremque fugit aspernatur dignissimos quasi delectus.
            </p>
        </div>
    </div>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);
