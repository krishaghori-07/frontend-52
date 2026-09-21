import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { getBase, getImageBase } from '../common';
import axios from 'axios';
import { showError, showMessage } from '../messages';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
function SiteHome() {
  const publicUrl = process.env.PUBLIC_URL || '';
  //create state array 
  let [categories, setCategories] = useState([]);
  let [products, setProducts] = useState([]);
  let [isCategoryFetched, setIsCategoryFetched] = useState(false);
  let [isProductFetched, setIsProductFetched] = useState(false);

  let fetchCategory = function () {
    if (isCategoryFetched === false) {
      let apiAddress = getBase() + "category.php";
      let option = {
        method: 'get',
        responseType: 'json',
        url: apiAddress
      };

      axios(option).then((response) => {
        console.log(response.data);
        let data = response.data;
        let error = data[0]['error'];
        if (error != 'no') {
          showError(error);
        }
        else {
          let total = data[1]['total'];
          if (total === 0)
            showError('category not found');
          else {
            //delete 1st 2 object
            data.splice(0, 2);
            setCategories(data);
            setIsCategoryFetched(true);
          }
        }
      }).catch((error) => {
        showError();
        console.log(error);
      });
    }
  }
  let fetchProduct = function () {
    if (isProductFetched === false) {
      let apiAddress = getBase() + "product.php";
      let option =
      {
        method: 'get',
        responseType: 'json',
        url: apiAddress
      };

      axios(option).then((response) => {
        console.log(response.data);
        let data = response.data;
        let error = data[0]['error'];
        if (error != 'no') {
          showError(error);
        }
        else {
          let total = data[1]['total'];
          if (total === 0)
            showError('product not found');
          else {
            //delete 1st 2 object
            data.splice(0, 2);
            setProducts(data);
            setIsProductFetched(true);
          }
        }
      }).catch((error) => {
        showError();
        console.log(error);
      });
    }
  }
  useEffect(() => {
    fetchCategory();
    fetchProduct();
  })
  return (
    <>
      <Header activePage="home" />

      {/* Featured Categories Section */}
      <section className="featured-categories section">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Featured Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {categories.map((item) => {
              return (<div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                  <div className="card-body">
                    <a href="#/products">
                      <h3 className="my-2 text-center">{item.title}</h3>
                      <img src={getImageBase() + "category/" + item['photo']} className="img-fluid" alt="HeadPhone Category" />
                    </a>
                  </div>
                </div>
              </div>);
            })}
          </div>
        </div>
      </section>

      {/* Trending Product Section */}
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((item) => {
              return (<div className="col-lg-3 col-md-6 col-12">
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-image">
                    <img src={getImageBase() + "product/" + item.photo} alt="No Image Available" />
                    <div className="button">
                      <a href="#/product-detail" className="btn">
                        <i className="lni lni-cart"></i> Add to Cart
                      </a>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="category">{item.categorytitle}</span>
                    <h4 className="title">
                      <a href="#/product-detail">{item.title}</a>
                    </h4>
                    <div className="price">
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
              </div>)
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteHome;
