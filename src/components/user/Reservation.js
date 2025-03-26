import React from "react";
import "../../css/user/reservation.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <Navbar />
      <section className="bgblack_navbar pt-lg-4 pt-0">
        <div className="container dixor_res">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">
                Online Reservation
              </h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </span>
                &nbsp;
                <span>{`>`}</span>&nbsp;<span>Reservation</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="reservation mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start text-white p-5 mt-4 mb-4">
              <h5>RESERVATION</h5>
              <h2 className="fs-1">Reservation Your Favorite Private Table</h2>
              <p>
                A relaxing and pleasant atmosphere, good jazz, dinner, and
                cocktails. The Patio Time Bar opens in the center of Florence.
                The only bar inspired by the 1960s, it will give you a
                experience that you'll have a hard time forgetting.
              </p>
              <div>
                <ul className="mt-4 p-0">
                  <li>
                    <h4 className="text-white">Lunch Menu</h4>
                    <h6 className="text-white fs-6">30+ items</h6>
                  </li>
                  <li>
                    <h4 className="text-white">Dinner Menu</h4>
                    <h6 className="text-white fs-6">50+ items</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className="form-box bg-dark text-white p-5">
                <form>
                  <label>Phone</label>
                  <br />
                  <input type="text" name="phone" id="" />
                  <br />
                  <label>People</label>
                  <br />
                  <input type="number" name="count" id="" />
                  <br />
                  <label>Date</label>
                  <br />
                  <input type="date" name="date" id="" />
                  <br />
                  <label>Time</label>
                  <br />
                  <input type="time" name="time" id="" />
                  <br />
                  <input type="submit" value="Book A Table" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Reservation;
