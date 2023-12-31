import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/Meta/Meta";
import Color from "../../components/Color/Color";
import Container from "../../components/Container/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="cross position-absolute"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 &.0 1GB RAM 8GB ROM 7Inch with Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                className="cross position-absolute"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 &.0 1GB RAM 8GB ROM 7Inch with Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
