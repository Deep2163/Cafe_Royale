import React from "react";
import Navbar from "../../components/user/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/user/about.css";
import swiper1 from "../../images/user/swiper1.png";
import swiper2 from "../../images/user/swiper2.png";
import swiper3 from "../../images/user/swiper3.png";
import swiper4 from "../../images/user/swiper4.png";
import swiper5 from "../../images/user/swiper5.png";
import achef1 from "../../images/user/about_chef1.jpg";
import achef2 from "../../images/user/about_chef2.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import spoons_bg from "../../images/user/spoons_bg.png";
// import logo_light from "../../images/user/logo-light.png";

function About() {
  const images = [swiper1, swiper2, swiper3, swiper4, swiper5];
  return (
    <>
      <Navbar />

      <section className="header_about pt-lg-4">
        <div className="container dixor">
          <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center fs-1 font-light">About Us</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <a href="index.html">
                  <i className="fa-solid fa-house"></i>
                  &nbsp;
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                </a>
                &nbsp;<span>{">"}</span>&nbsp;
                <span>About Us</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid swiper_bg pt-5 pb-5">
        <div className="swiper mySwiper">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              425: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row mb-5 pb-5">
            <div className="col-md-6 d-flex justify-content-between">
              <img
                src={achef1}
                alt=""
                width="48%"
                height="110%"
                style={{ objectFit: "cover" }}
              />
              <img
                src={achef2}
                alt=""
                width="48%"
                height="110%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 text-start my-auto px-2">
              <div className="w-75 mx-5">
                <h5 style={{ color: "#826a45" }} className="mb-3 mt-5">
                  ABOUT US
                </h5>
                <h2 className="fs-1 fw-semibold text-black me-5 pe-4">
                  We Invite You To Visit Our Restaurant
                </h2>
                <p className="text-secondary lh-lg">
                  A relaxing and pleasant atmosphere, good jazz, dinner, and
                  cocktails. The Patio Time Bar opens in the center of Florence.
                  The only bar inspired by the 1960s, it will give you a
                  experience that you'll have a hard time forgetting.
                </p>
                <button className="discover fw-semibold">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              {/* <h1 className="font text-start">Cafe Royale</h1> */}
              <h1 className="text-black">Opening Hours</h1>
              {/* <div
                style={{ height: "350px" }}
                className="w-100 bg-black text-white d-flex flex-column justify-content-center align-items-center"
              >
                <h1>Sorry</h1>
                <h2>This video does not exist.</h2>
              </div> */}
            </div>

            <div className="col-md-6 d-flex sedo2 py-5">
              <div className="my-auto px-5">
                <p>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and
                  cocktails. The Patio Time Bar opens in the center..
                </p>
                <ul className="d-flex flex-column gap-2 ps-0 pe-5 fw-semibold mt-4">
                  <li className="d-flex justify-content-between">
                    <span>Sunday to Tuesday:</span>
                    <span>10:00 - 09:00</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Wednesday to Thursday:</span>
                    <span>11:30 - 10:30</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Friday & Saturday::</span>
                    <span>10:30 - 12:00</span>
                  </li>
                </ul>
                <div className="row mt-4">
                  <div className="col-3 d-flex">
                    <div className="call_circle m-auto d-flex">
                      <i className="fa-solid text-white fa-phone-volume fs-1 m-auto"></i>
                    </div>
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-center">
                    <h6 className="text-secondary">Call Anytime</h6>
                    <h3 className="text-black">+91 98765 43210</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="footer">
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
                <h2 className="mb-4">About Us</h2>
                <p className="pe-5 fw-light">
                  Continued at zealously necessary is Surrounded sir motionless
                  she end literature. Gay direction neglected.
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
                  <h2 className="mb-4">Explore</h2>
                  <ul className="fw-light">
                    <li>
                      <a href="./about.html" className="text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="./chef.html" className="text-white">
                        Chefs
                      </a>
                    </li>
                    <li>
                      <a href="./menu.html" className="text-white">
                        Menu
                      </a>
                    </li>
                    <li>
                      <a href="./blog.html" className="text-white">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="./contact.html" className="text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h2 className="mb-4">Contact Info</h2>
                <div className="d-flex">
                  <button className="contacts">
                    <i className="fa-solid fa-location-dot fs-5"></i>
                  </button>
                  <span className="px-3 fw-light">
                    175 10h Street, Office 375 Berlin, De 21562
                  </span>
                </div>
                <div className="col-md-3">
                  <div className="d-flex mt-4">
                    <button className="contacts">
                      <i className="fa-solid fa-phone fs-5"></i>
                    </button>
                    <div>
                      <h6 className="px-3 text-white fs-6 fw-light">
                        +12344567899
                      </h6>
                      <h6 className="px-3 text-white fs-6 fw-light">
                        +12344567899
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex mt-3">
                    <button className="contacts">
                      <i className="fa-solid fa-envelope fs-5"></i>
                    </button>
                    <p className="px-3">food@restan.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 foot">
                <h2 className="mb-4">Newsletter</h2>
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
              <div className="col-md-6 d-flex align-items-end justify-content-start">
                <img
                  src={logo_light}
                  className="mb-5"
                  width="120px"
                  height="60px"
                  alt=""
                />
              </div>
              <div className="col-md-6 d-flex align-items-end justify-content-end">
                <p className="text-white mb-5">
                  © Copyright 2025 Restan. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </>
  );
}

export default About;
