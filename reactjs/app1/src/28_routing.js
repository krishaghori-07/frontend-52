import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NorthAmerica from './north_america';
import Asia from './asia';
import Europe from './europe';
function PageNotFound()
{
    return (<div>
        <h1 align='center'>Page not found</h1>
        <hr/>
    </div>)
}
//define function for routing
function MyRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Asia/>} />
                <Route path="/europe" element={<Europe />} />
                <Route path="/asia" element={<Asia />} />
                <Route path="/north_america" element={<NorthAmerica />} />
                {/* define route for 404 error (page not found) */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />)
