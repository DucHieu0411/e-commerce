import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const CheckOut = () => {
  return (
    <div>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Ăng Híu</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item total-price">
                      <Link className="text-dark" to="/cart" href="/">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price active">
                      Shipping
                    </li>
                    &nbsp;/
                    <li
                      className="breadcrumb-item total-price active"
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Ăng Híu (kubi12335@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  className="d-flex flex-wrap justify-content-between gap-15"
                  action=""
                >
                  <div className="w-100">
                    <select className="form-control form-select" name="" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>

                  <div className="w-100">
                    <select
                      className="form-control form-select"
                      name=""
                      id=""
                    ></select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last name"
                    ></input>
                  </div>

                  <div className="w-100">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                    ></input>
                  </div>

                  <div className="w-100">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Appartment, suite, ect."
                    ></input>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    ></input>
                  </div>

                  <div className="flex-grow-1">
                    <select className="form-control form-select" name="" id="">
                      <option value="" selected disabled>
                        State
                      </option>
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Zip code"
                    ></input>
                  </div>

                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        className="text-dark d-flex align-items-center"
                        to="/cart"
                      >
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link className="button" to="/cart">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center gap-10 mb-2">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-5px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt="product"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">asdasdqw</h5>
                      <p className="total">s / #asdsad</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$1000</p>
                </div>
              </div>
              <div className="border-bottom d-flex justify-content-between align-items-center py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
