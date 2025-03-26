import React from "react";
import "../../css/user/chef.css";
import chef1 from "../../images/user/chefs/chef1.png";
import chef2 from "../../images/user/chefs/chef2.png";
import chef3 from "../../images/user/chefs/chef3.png";
import chef4 from "../../images/user/chefs/chef4.png";
import chef5 from "../../images/user/chefs/chef5.png";
import chef6 from "../../images/user/chefs/chef6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Chef = () => {
  return (
    <>
      <Navbar />
      <section className="bgblack_nav pt-lg-4 pt-0">
        <div className="container dixor_chef">
          <div className="row mt-5 justify-content-center mt-5">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">
                Restaurant Chef
              </h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house "></i>&nbsp;
                <span>
                  <Link to="/">Home</Link>
                </span>
                &nbsp;<span>{`>`}</span>&nbsp;<span>Chef</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
              <h3 className="text-black">MASTER CHEFS</h3>
              <h1>Meet Our Special Chefs</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5 g-4">
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef1} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef2} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef3} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef4} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef5} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div className="img_bord position-relative mx-auto d-flex justify-content-center">
                <img src={chef6} className="rounded-circle" alt="" />
                <div className="d-flex flex-column align-items-center justify-content-center text-white position-absolute chef_name">
                  <h4 className="text-white">Alexander Petllo</h4>
                  <h4 className="text-white">Assistant Chef</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Chef;
