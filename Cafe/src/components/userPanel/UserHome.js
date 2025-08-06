import React, { useState } from "react";
import "../../css/userPanel/userHome.css";
import logo from "../../images/logo/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import {
  MdLibraryBooks,
  MdLogout,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineScreenShare } from "react-icons/md";


function UserHome() {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState("menu");
    const naviget = useNavigate();

  //   const admin = localStorage.getItem("admin");

  //   useEffect(() => {
  //     if (!admin) {
  //       naviget("/admin-login");
  //     }
  //   }, []);

    const hendleLogout = () => {
      localStorage.removeItem("user");
      naviget("/");
    };

  return (
    <>
      <aside
        style={{ width: `${show ? "300px" : "75px"}` }}
        className="userPanel_navbar"
      >
        <div className="d-flex w-100  justify-content-center align-items-center admin_logo ">
          <img
            src={logo}
            alt=""
            style={{
              width: `${show ? "20%" : "95%"}`,
            }}
          />
          &nbsp;
          {show ? <h3 className="text-white cafe_name">Cafe Royale</h3> : ""}
        </div>
        <ul className="p-0 text-white d-block fw-semibold admin_navbar userPanel_navbar">
         
          <li
            className={activeTab === "menu" ? "activetab" : ""}
            onClick={() => {
              setActiveTab("menu");
            }}
          >
            <Link to="/user/">
              <LuSquareMenu
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                className="text-white"
              >
                Menu
              </span>
            </Link>
          </li>

          <li
            className={activeTab === "myreservation" ? "activetab" : ""}
            onClick={() => {
              setActiveTab("myreservation");
            }}
          >
            <Link to="/user/myreservations">
              <MdOutlineRestaurantMenu
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                className="text-white"
              >
                My Reservation
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "onlineorders" ? "activetab" : ""}
            onClick={() => {
              setActiveTab("onlineorders");
            }}
          >
            <Link to="/user/myorders">
              <MdLibraryBooks
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                className="text-white"
              >
                My Orders
              </span>
            </Link>
          </li>
          {/* <li
            className={activeTab === "history" ? "activetab" : ""}
            onClick={() => {
              setActiveTab("history");
            }}
          >
            <Link to="/user/history">
              <FaHistory
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                className="text-white"
              >
                History
              </span>
            </Link>
          </li> */}
           <li
            className={activeTab === "profile" ? "activetab" : ""}
            onClick={() => {
              setActiveTab("profile");
            }}
          >
            <Link to="/user/profile">
              <FaRegUser
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />

              <span
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                className="text-white"
              >
                Profile
              </span>
            </Link>
          </li>

          <li className="mt-4">
            <Link to="/">
              <MdLogout
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                className="text-white"
                style={{ display: `${show ? "inline-flex" : "none"}` }}
                onClick={hendleLogout}
              >
                Logout
              </span>
            </Link>
          </li>
          <li className="mt-4">
            <Link to="/">
              <MdOutlineScreenShare
                className="text-white"
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span
                className="text-white"
                style={{ display: `${show ? "inline-flex" : "none"}` }}
              >
                Explore Us
              </span>
            </Link>
          </li>
        </ul>
      </aside>

      <nav
        className="userPanel_nav ms-auto text-center py-2 d-flex justify-content-between aligh-items-center fixed-top bg-light"
        style={{
          width: `${show ? "calc(100% - 300px)" : "calc(100% - 75px)"}`,
        }}
      >
        <div className="d-flex align-items-center fs-2 ">
          <label className="hamburger ">
            <input
              type="checkbox"
              checked={show}
              onClick={(e) => {
                setShow(e.target.checked);
              }}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line color_white line-top-bottom "
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line color_white" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <h1 className="text-white fs-1">Welcome</h1>
        <div></div>
      </nav>

      <div
        className="main_content ms-auto p-2"
        style={{
          width: `${show ? "calc(100% - 300px)" : "calc(100% - 75px)"}`,
        }}
      >
        <div style={{ marginTop: "75px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserHome;
