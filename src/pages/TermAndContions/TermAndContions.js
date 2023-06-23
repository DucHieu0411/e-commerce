import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Container from "../../components/Container/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Contions"} />
      <BreadCrumb title="Term And Contions" />
      <Container className="policy-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
