import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/user/navbar.css";
import logo from "../../images/logo/logo.png";
import { FaRegUser, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("user");
        if (!userId) return;

        const res = await axios.get(`http://localhost:3001/User/get/${userId}`);
        setUser(res.data.user);
      } catch (error) {
        console.error(error.response?.status === 404 ? "User not found" : error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/user/login");
  };

  return (
    <div
      className="container-lg container-fluid p-0 text-center mb-4 z-3 fixed-top navbar_container"
      style={{
        top: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.51)",
        backdropFilter: "blur(10px)",
        borderRadius: "15px",
        zIndex: "9999",
      }}
    >
      <div className="row nav_header">
        {/* Mobile Menu Icon */}
        <div className="col d-flex d-lg-none align-items-center justify-content-start">
          <span className="menu_icon" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="col-12 full_screen_menu">
            <ul className="home_ul_side fs-3 pt-3 px-0">
              <li className="d-flex justify-content-end px-lg-5 px-0 fs-1">
                <IoClose onClick={toggleMobileMenu} />
              </li>
              {[
                { name: "Home", path: "/", id: "home" },
                { name: "About Us", path: "/user/about", id: "about" },
                { name: "Contact Us", path: "/user/contact", id: "contact" },
                { name: "Chef", path: "/user/chef", id: "chef" },
                { name: "Reservation", path: "/user/reservation", id: "reservation" },
                { name: "Error Page", path: "*", id: "error" },
                { name: "Blog", path: "/user/blog", id: "blog" },
                { name: "Menu", path: "/user/menuuser", id: "menu" },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <li
                    onClick={() => {
                      setActiveTab(item.id);
                      toggleMobileMenu();
                    }}
                    className={activeTab === item.id ? "active_tab" : ""}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                  <hr />
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}

        {/* Logo */}
        <div className="col d-flex align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img
              src={logo}
              className="my-auto ms-lg-5 p-0"
              width="80px"
              height="80px"
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="col-6 d-lg-flex d-none align-items-center justify-content-center">
          <ul className="home_ul">
            <li
              onClick={() => setActiveTab("home")}
              className={activeTab === "home" ? "active_tab" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li className="pages_a">
              <span>Pages</span>
              <ul className="pages text-start">
                <li><Link to="/user/about">About Us</Link></li>
                <li><Link to="/user/contact">Contact Us</Link></li>
                <li><Link to="/user/chef">Chef</Link></li>
                <li><Link to="/user/reservation">Reservation</Link></li>
                <li><Link to="*">Error Page</Link></li>
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

        {/* User Dropdown / Login */}
        <div className="col d-flex align-items-center justify-content-end">
          {!localStorage.getItem("user") ? (
            <Link to="/user/login">
              <FaRegUser className="fs-1 mx-2" />
            </Link>
          ) : (
            <>
              <div className="dropdown position-relative">
                <button className="btn" onClick={toggleDropdown}>
                  <FaChevronDown className="fs-1 mx-2" />
                </button>
                {showDropdown && (
                  <ul className="dropdown-menu show dropdown-menu-end position-absolute">
                    <li className="navtxt">
                      <Link className="dropdown-item" to="/user/">
                        My Dashboard
                      </Link>
                    </li>
                    <li className="navtxt">
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <h2 style={{ fontSize: "20px", color: "#000", marginRight: "20px" }}>
                Hello, {user.name}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
