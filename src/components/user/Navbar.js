import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/user/navbar.css";
import logo from "../../images/logo/logo.png";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTabClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className="container-lg container-fluid p-0 text-center mb-4 z-3 fixed-top navbar_container"
      style={{
        top: "10px",
        backgroundColor: " rgba(255, 255, 255, 0.51)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        zIndex: "9999 !important",
      }}
    >
      <div className="row  nav_header">
        <div className="col d-flex d-lg-none align-items-center justify-content-start">
          <span className="menu_icon" onClick={handleTabClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </div>
        {showDropdown ? (
          <div className="col-12 full_screen_menu">
            <ul className="home_ul_side fs-3 pt-3 px-0">
              <li className="d-flex justify-content-end px-lg-5 px-0 fs-1">
                <IoClose onClick={handleTabClick} />
              </li>
              <li
                onClick={() => setActiveTab("home")}
                className="justify-content-center"
                // className={activeTab === "home" ? "active_tab" : ""}
              >
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li
                className={activeTab === "about" ? "active_tab" : ""}
                onClick={() => setActiveTab("about")}
              >
                <Link to="/user/about">About Us</Link>
                <hr />
              </li>
              <li
                onClick={() => setActiveTab("contact")}
                className={activeTab === "contact" ? "active_tab" : ""}
              >
                <Link to="/user/contact">Contact Us</Link>
                <hr />
              </li>
              <li
                onClick={() => setActiveTab("chef")}
                className={activeTab === "chef" ? "active_tab" : ""}
              >
                <Link to="/user/chef">Chef</Link>
                <hr />
              </li>
              <li
                onClick={() => setActiveTab("reservation")}
                className={activeTab === "reservation" ? "active_tab" : ""}
              >
                <Link to="/user/reservation">Reservation</Link>
                <hr />
              </li>
              <li
                onClick={() => setActiveTab("error")}
                className={activeTab === "error" ? "active_tab" : ""}
              >
                <Link to="*">Error Page</Link>
              </li>
              <hr />
              <li
                onClick={() => setActiveTab("blog")}
                className={activeTab === "blog" ? "active_tab" : ""}
              >
                <Link to="/user/blog">Blog</Link>
              </li>
              <hr />
              <li
                onClick={() => setActiveTab("menu")}
                className={activeTab === "menu" ? "active_tab" : ""}
              >
                <Link to="/user/menuuser">Menu</Link>
              </li>
              <hr />
              <li
                onClick={() => setActiveTab("contact")}
                className={activeTab === "contact" ? "active_tab" : ""}
              >
                <Link to="/user/contact">Contact</Link>
              </li>
              <hr />
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="col d-flex align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img
              src={logo}
              className="my-auto ms-lg-5 p-0"
              width="80px"
              height="80px"
              alt=""
            />
          </Link>
        </div>
        <div className="col-6 d-lg-flex d-none align-items-center justify-content-center">
          <ul className="home_ul">
            <li
              onClick={() => setActiveTab("home")}
              className={activeTab === "home" ? "active_tab" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li className="pages_a">
              <Link to="/">Pages</Link>
              <ul className="pages text-start">
                <li className="mt-4">
                  <Link to="/user/about">About Us</Link>
                </li>
                <li>
                  <Link to="/user/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/user/chef">Chef</Link>
                </li>
                <li>
                  <Link to="/user/reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="*">Error Page</Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li
              onClick={() => setActiveTab("blog")}
              className={activeTab === "blog" ? "active_tab" : ""}
            >
              <Link to="/user/blog">Blog</Link>
            </li>
            <li
              onClick={() => setActiveTab("menu")}
              className={activeTab === "menu" ? "active_tab" : ""}
            >
              <Link to="/user/menuuser">Menu</Link>
            </li>
            <li
              onClick={() => setActiveTab("contact")}
              className={activeTab === "contact" ? "active_tab" : ""}
            >
              <Link to="/user/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <Link to="/user/login">
            <FaRegUser className="fs-1 mx-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
