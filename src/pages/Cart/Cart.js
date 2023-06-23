/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>

            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img
                    className="img-fluid"
                    src="images/watch.jpg"
                    alt="product image"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">asdqwezxc</h5>
                  <p className="color">qwe</p>
                  <p className="size">asd</p>
                </div>
              </h4>
              <h4 className="cart-col-2">
                <h5 className="price">$100</h5>
              </h4>
              <h4 className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </h4>
              <h4 className="cart-col-4">
                <h5 className="price">$100</h5>
              </h4>
            </div>

            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img
                    className="img-fluid"
                    src="images/watch.jpg"
                    alt="product image"
                  />
                </div>
                <div className="w-75">
                  <h5 className="title">asdqwezxc</h5>
                  <p className="color">qwe</p>
                  <p className="size">asd</p>
                </div>
              </h4>
              <h4 className="cart-col-2">
                <h5 className="price">$100</h5>
              </h4>
              <h4 className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </h4>
              <h4 className="cart-col-4">
                <h5 className="price">$100</h5>
              </h4>
            </div>
          </div>

          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link className="button" to="/product">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link className="button" to="/checkout">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
