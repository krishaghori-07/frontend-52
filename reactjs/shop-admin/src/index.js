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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ViewProductDetail from './view-product-detail';
//create routing function 
function MyRouter() {
    return (<CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/change-password' element={<ChangePassword />} />

                <Route path='/category' element={<Category />} />
                <Route path='/insert-category' element={<InsertCategory />} />
                <Route path='/update-category' element={<UpdateCategory />} />
                <Route path='/update-category/:categoryid' element={<UpdateCategory />} />

                <Route path='/product' element={<Product />} />
                <Route path='/insert-product' element={<InsertProduct />} />
                {/* dynamic route  */}
                <Route path='/edit-product/:productid' element={<EditProduct />} />
                <Route path='/view-product-detail/:productid' element={<ViewProductDetail />} />

                <Route path='/order-detail' element={<OrderDetail />} />
                <Route path='/order-detail/:orderid' element={<OrderDetail />} />
                <Route path='/order' element={<Orders />} />
                <Route path='/orders' element={<Orders />} />

                <Route path='/user' element={<Users />} />
            </Routes>
        </BrowserRouter>
    </CookiesProvider>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

