import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";
const ForgotPassWord = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form className="d-flex flex-column gap-15" action="">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center gap-15 mt-3">
                    <Link to="/reset-password">
                      <button className="button border-0" type="submit">
                        Sumbit
                      </button>
                    </Link>
                    <Link to="/login">Back to login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassWord;
