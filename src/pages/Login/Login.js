import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link className="button" to="/signup">
                        Sign up
                      </Link>
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

export default Login;
