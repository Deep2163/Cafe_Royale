import React from "react";
import "../../css/user/footer.css";

import spoons_bg from "../../images/user/spoons_bg.png";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="d-flex justify-content-end">
          <img
            src={spoons_bg}
            alt=""
            width="45%"
            style={{ opacity: "0.4", zIndex: "-2" }}
            srcSet=""
          />
        </div>

        <section className="position-relative">
          <div className="container bg px-5 fs-6`">
            <div className="row text-white py-5">
              <div className="col-md-3 right_border">
                <h2 className="mb-4 footer_headings">About Us</h2>
                <p className="pe-5 fw-light">
                  "Indulge in the finest blends and unforgettable moments at
                  Cafe Royale - where every cup is a celebration."
                </p>
                <button className="contacts mx-1">
                  <i className="fa-brands fa-facebook"></i>
                </button>
                <button className="contacts mx-1">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="contacts mx-1">
                  <i className="fa-brands fa-youtube"></i>
                </button>
                <button className="contacts mx-1">
                  <i className="fa-brands fa-linkedin"></i>
                </button>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
                <div className="text-start">
                  <h2 className="mb-4 footer_headings">Explore</h2>
                  <ul className="fw-light">
                    <li>
                      <Link to="/user/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/user/chef">Chef</Link>
                    </li>
                    <li>
                      <Link to="/user/menuuser">Menu</Link>
                    </li>
                    <li>
                      <Link to="/user/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/user/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h2 className="mb-4 footer_headings">Contact Info</h2>
                <div className="d-flex">
                  <button className="contacts">
                    <i className="fa-solid fa-location-dot fs-5"></i>
                  </button>
                  <span className="px-3 fw-light">
                    Cafe Royale. Near Sarvajanik College, Athwalines, Surat.
                  </span>
                </div>
                <div className="col-md-3">
                  <div className="d-flex mt-4">
                    <button className="contacts">
                      <i className="fa-solid fa-phone fs-5"></i>
                    </button>
                    <div>
                      <h6 className="px-3 text-white fs-6 fw-light">
                        +12344567890
                      </h6>
                      <h6 className="px-3 text-white fs-6 fw-light">
                        +12344567890
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex mt-3">
                    <button className="contacts">
                      <i className="fa-solid fa-envelope fs-5"></i>
                    </button>
                    <p className="px-3">cafe@royale.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 foot">
                <h2 className="mb-4 footer_headings">Newsletter</h2>
                <p className="fw-light">
                  Join our subscribers list to get the latest news and special
                  offers.
                </p>
                <input className="mt-4" placeholder=" Your Email" type="text" />
                &nbsp;<i className="fa-solid fa-arrow-right arrow"></i>
                <br />
                <div className="d-flex align-items-center mt-3">
                  <input type="checkbox" />
                  <span>&nbsp; I agree to the Privacy Policy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid footer_img">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex align-items-end justify-content-evenly">
                <img
                  src={logo}
                  className="mb-2"
                  width="100px"
                  height="100px"
                  alt=""
                />

                {/* </div>
              <div className="col-md-6 d-flex align-items-end justify-content-start"> */}
                <p className="text-white mb-5">
                  © Copyright 2025 Cafe Royale. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
