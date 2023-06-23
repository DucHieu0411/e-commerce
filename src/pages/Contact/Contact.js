import React from "react";
import Meta from "../../components/Meta/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../../components/Container/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us"} />
      <BreadCrumb title="Contact us" />
      <Container class1="contact-wrapper py-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.62160093107!2d108.16550619000284!3d16.04724730332652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1687250175837!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreencreen=""
              loading="lazy"
              referrerPolicypolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between gap-15">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Number Phone"
                    />
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
                  <div>
                    <button className="button">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        K249/28-11, Hà Huy Tập, P.Hòa Khê, Q.Thanh Khê
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+84 0935014524">+84 0935014524</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:kubi12335@gmail.com">
                        kubi12335@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday | 10AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
