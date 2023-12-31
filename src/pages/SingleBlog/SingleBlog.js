import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../../components/Container/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <IoIosArrowBack className="fs-5" />
                Go back
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                className="img-fluid w-100 my-4"
                src="images/blog-1.jpg"
                alt="blog"
              />
              <p>
                Your're only as good as your last collection, which is an
                enormous pressure. I think there is something about luxury -
                it's not something people need, but it's what they want. It
                really pulls at their heart. I have a fantastic relationship
                with money. Scelerisque sociosqu ullamcorper urna nisl mollis
                vestibulum pertium commodo inceptos cum condimentum placerat
                accumsan nisl ante vestibulum
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
