import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { getBase, getImageBase } from '../common';
import { showError, showMessage } from '../messages';
import { useParams } from 'react-router-dom';
function SiteProducts() {
  //create state array 
  let [products, setProducts] = useState([]);
  let [isProductFetched, setIsProductFetched] = useState(false);
  const { categoryid } = useParams();

  let FetchProducts = function () {

    if (isProductFetched === false) {
      let apiAddress;
      if (categoryid === undefined) {
        apiAddress = getBase() + "product.php";
      }
      else {
        apiAddress = getBase() + "product.php?categoryid=" + categoryid;
      }
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
    FetchProducts();
  });
  return (
    <>
      <Header activePage="products" />

      <section className="product-grids section">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4">Products</h3>
              <div className="product-grids-head">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-grid"
                    role="tabpanel"
                    aria-labelledby="nav-grid-tab"
                  >
                    <div className="row">
                      {products.map((item) => {
                        return (<div className="col-lg-4 col-md-6 col-12">
                          {/* Start Single Product */}
                          <div className="single-product">
                            <div className="product-image">
                              <img
                                src={getImageBase() + "product/" + item.photo} alt="image not found"
                              />
                              <div className="button">
                                <a href="#/cart" className="btn">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SiteProducts;
