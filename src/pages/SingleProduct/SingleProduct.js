import React, { useState } from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <div className="description-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Thực sự sau Edward " Gigachad " Wu thì Thân Vũ Long là cái
                  thằng nhân vật làm tôi muốn b..., tumlum thứ 2 ở cái bộ Kengan
                  này, cách nói chuyện điềm tĩnh bất cần đời nhưng lại mạnh vô
                  đối. Có lẽ hắn đã mạnh đến mức bỏ qua sự tồn tại của mọi thứ
                  trên đời này, và chỉ có duy hắn ta tồn tại thôi. Nên hắn mới
                  nhìn đời bằng con mắt và khuôn mặt ngáo ngáo vậy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <Rating name="size-medium" defaultValue={2} />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link className="text-decoration-underline">
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form className="d-flex flex-column gap-15" action="">
                    <div>
                      <Rating name="size-medium" defaultValue={2} />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-100"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Navdeep</h6>
                      <Rating name="size-medium" defaultValue={2} />
                    </div>
                    <p className="mt-3">Ăng Híu Da Den</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="popular-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
