import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import ForgotPassword from './forgot_password';
import Category from './category';
import ChangePassword from './change-password';
import Dashboard from './dashboard';
import EditProduct from './edit-product';
import InsertCategory from './insert-category';
import InsertProduct from './insert-product';
import OrderDetail from './order-detail';
import Orders from './orders';
import Product from './product';
import UpdateCategory from './update-category';
import Users from './users';
import UpdateProduct from './update-product';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//create routing function 
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
            
            <Route path='/category' element={<Category />} />
            <Route path='/insert-category' element={<InsertCategory />} />
            <Route path='/update-category' element={<UpdateCategory />} />
            
            <Route path='/product' element={<Product />} />
            <Route path='/insert-product' element={<InsertProduct />} />
            <Route path='/edit-product' element={<EditProduct />} />
            
            <Route path='/order-detail' element={<OrderDetail />} />
            <Route path='/order' element={<Orders />} />
            
            <Route path='/user' element={<Users />} />

        </Routes>
    </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

