import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {
  SiteHome,
  SiteProducts,
  SiteProductDetail,
  SiteCart,
  SiteCheckout,
  SiteLogin,
  SiteForgotPassword,
  SiteChangePassword,
  SiteRegister,
} from './pages';
const root = ReactDOM.createRoot(document.getElementById('root'));
//define function for routes
function MyRouter()
{
    return (<BrowserRouter>
      <Routes>
          <Route path='/' element={<SiteHome />} />
          <Route path='/shop' element={<SiteProducts /> } />
          <Route path='/product-detail' element={<SiteProductDetail /> } />
          <Route path='/cart' element={<SiteCart /> } />
          <Route path='/checkout' element={<SiteCheckout /> } />
          <Route path='/login' element={<SiteLogin /> } />
          <Route path='/forgot-password' element={<SiteForgotPassword /> } />
          <Route path='/change-password' element={<SiteChangePassword /> } />
          <Route path='/register' element={<SiteRegister /> } />
          {/* <Route path='' element={<PageNotFound /> } /> */}
      </Routes>
    </BrowserRouter>)
}
root.render(<MyRouter />);
