import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <Link to="/login">
                      <button className="button border-0" type="submit">
                        Reset
                      </button>
                    </Link>
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

export default ResetPassword;
