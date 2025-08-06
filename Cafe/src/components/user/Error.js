import React from "react";
import "../../css/user/error.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Navbar />
      <section className="bgblack_navbar pt-lg-4 pt-0">
        <div className="container dixor_err">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">Error-page</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </span>
                &nbsp;
                <span>{`>`}</span>&nbsp;<span>not-found</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
              <h1 className="font_404">404</h1>
              <h3 className="fw-bold">Sorry Page Was Not Found!</h3>
              <p className="w-50 mt-4 text-center">
                Household shameless incommode at no objection behaviour.
                Especially do at he possession insensible sympathize boisterous
                it. Songs he on an widen me event truth.
              </p>
              <button className="color_bg text-white mt-3">
                <Link to="/">Back To Home</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Error;
