import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Last name"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="date"
                      name="bday"
                      min="1975-01-01"
                      max="2077-12-31"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div>
                    <div className="d-flex flex-column justify-content-center align-items-center gap-15 mt-3">
                      <button className="button border-0" type="submit">
                        Create
                      </button>
                      <Link to="/login">Back to login</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
