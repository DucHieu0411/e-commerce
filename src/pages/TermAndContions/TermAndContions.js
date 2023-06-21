import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Contions"} />
      <BreadCrumb title="Term And Contions" />
      <section className="policy-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndContions;
