import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/CustomInput/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container className="login-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form className="d-flex flex-column gap-15" action="">
                <CustomInput type="text" name="name" placeholder="First name" />

                <CustomInput type="text" name="name" placeholder="Last name" />

                <CustomInput
                  type="tel"
                  name="number"
                  placeholder="Phone number"
                />

                <CustomInput
                  type="date"
                  name="bday"
                  min="1975-01-01"
                  max="2077-12-31"
                />

                <CustomInput type="email" name="email" placeholder="Email" />

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <CustomInput
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                />
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
      </Container>
    </>
  );
};

export default SignUp;
