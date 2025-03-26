import React from "react";
import "../../css/user/contact.css";
import phone from "../../images/user/phone.png";
import placeholder from "../../images/user/placeholder.png";
import email from "../../images/user/email.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="bgblack_nav pt-lg-4 pt-0">
        <div className="container dixor_contact">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">Contact Us</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </span>
                &nbsp;
                <span>{`>`}</span>&nbsp;<span>contact</span>
              </h4>
              {/* <div className="text-end"><span  >Restaurant</span></div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row mt-5 g-2">
            <div className="col-md-4 px-4">
              <div className="box py-3">
                <img alt="" src={phone} width="40%" height="50%" />
                <br />
                <br />
                <h1 className="fs-2">Hotline</h1>
                <p>+9876543210</p>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="box py-3 px-4">
                <img alt="" src={placeholder} width="40%" height="50%" />
                <br />
                <br />
                <h1 className="fs-2">Our Location</h1>
                <p>Cafe Royale. Near Sarvajanik College, Athwalines, Surat.</p>
              </div>
            </div>
            <div className="col-md-4 px-4">
              <div className="box py-3">
                <img alt="" src={email} width="40%" height="50%" />
                <br />
                <br />
                <h1 className="fs-2">Official Email</h1>
                <p>cafe@royale.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container-fluid mt-5" id="contact">
          <div className="row justify-content-center">
            <div className="col-9 box text-center sedo">
              <h3 className="mt-5 color_keep fs-4 text-center w-100">
                Keep in touch
              </h3>
              <h1>Send us a Message</h1>
              <div className="content-form px-5 mt-5">
                <input type="text" className="w-100" placeholder="Name" />
                <div className="row justify-content-center mt-4">
                  <div className="col-md-6">
                    <input type="text" className="w-100" placeholder="Email" />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="w-100 mt-md-0 mt-4"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <textarea
                  className="mt-4 text-black"
                  placeholder="Your Message....!"
                ></textarea>
              </div>
              <div className="d-flex justify-content-start">
                <button className="bu mt-4 mb-4 text-white">
                  <i className="fa-regular fa-paper-plane"></i> &nbsp;Get in
                  Touch
                </button>
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

      <Footer />
    </>
  );
}

export default Contact;
