import React, { useState } from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductCard from "../../components/ProductCard/ProductCard";
import Color from "../../components/Color/Color";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../../components/Container/Container";

const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const imageUrl =
    "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png";

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div id="image-magnifyer">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: imageUrl,
                    },
                    largeImage: {
                      src: imageUrl,
                      width: 1200,
                      height: 800,
                    },
                  }}
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  className="img-fluid"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">lkasdkasd</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    style={{ position: "unset" }}
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Categories:</h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tag:</h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">SKU:</h3>
                  <p className="product-data">DEF</p>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-secondary border-1 bg-white text-dark">
                      S
                    </span>
                    <span className="badge border border-secondary border-1 bg-white text-dark">
                      M
                    </span>
                    <span className="badge border border-secondary border-1 bg-white text-dark">
                      XL
                    </span>
                    <span className="badge border border-secondary border-1 bg-white text-dark">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center flex-row gap-15 my-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      className="form-control"
                      type="number"
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                    ></input>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns:</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within{" "}
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Thực sự sau Edward " Gigachad " Wu thì Thân Vũ Long là cái thằng
                nhân vật làm tôi muốn b..., tumlum thứ 2 ở cái bộ Kengan này,
                cách nói chuyện điềm tĩnh bất cần đời nhưng lại mạnh vô đối. Có
                lẽ hắn đã mạnh đến mức bỏ qua sự tồn tại của mọi thứ trên đời
                này, và chỉ có duy hắn ta tồn tại thôi. Nên hắn mới nhìn đời
                bằng con mắt và khuôn mặt ngáo ngáo vậy.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
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
      </Container>

      <Container class1="popular-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
