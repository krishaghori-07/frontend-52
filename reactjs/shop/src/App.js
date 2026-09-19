import React, { useState, useEffect } from 'react';
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

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
    return hash || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <SiteHome />;
      case 'products':
        return <SiteProducts />;
      case 'product-detail':
        return <SiteProductDetail />;
      case 'cart':
        return <SiteCart />;
      case 'checkout':
        return <SiteCheckout />;
      case 'login':
        return <SiteLogin />;
      case 'forgot-password':
        return <SiteForgotPassword />;
      case 'change-password':
        return <SiteChangePassword />;
      case 'register':
        return <SiteRegister />;
      default:
        return <SiteHome />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

export default App;
