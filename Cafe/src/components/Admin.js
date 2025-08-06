import React, { useState, useEffect } from "react";
import "../css/admin.css";
import logo from "../images/logo/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHistory, FaRegUser, FaUserCircle } from "react-icons/fa";
import {
  MdLibraryBooks,
  MdLogout,
  MdOutlineRestaurantMenu,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { IoMdPeople } from "react-icons/io";
import { TiContacts } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
// import Dashboard from "./Dashboard";

function Admin() {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const naviget = useNavigate();

  const admin = localStorage.getItem('admin')

  useEffect(()=> {
    if(!admin){
      naviget('/admin-login')
    }
  },[])

  const hendleLogout = () => {
    localStorage.clear();
    naviget('/admin-login')
  }

  return (
    <>
      <aside style={{ width: `${show ? "300px" : "75px"}` }}>
        <div className="d-flex w-100  justify-content-center align-items-center admin_logo ">
          <img
            src={logo}
            alt=""
            style={{
              width: `${show ? "20%" : "95%"}`,
            }}
          />
          &nbsp;
          {show ? <h3 className="text-black cafe_name">Cafe Royale</h3> : ""}
        </div>
        <ul className="p-0 text-black d-block fw-semibold admin_navbar">
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => {
              setActiveTab("dashboard");
            }}
          >
            <Link to="/admin/">
              <MdOutlineSpaceDashboard
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Dashboard
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "menu" ? "active" : ""}
            onClick={() => {
              setActiveTab("menu");
            }}
          >
            <Link to="/admin/menu">
              <LuSquareMenu
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Menu
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => {
              setActiveTab("orders");
            }}
          >
            <Link to="/admin/orders">
              <IoFastFoodOutline
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
              Orders
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "staff" ? "active" : ""}
            onClick={() => {
              setActiveTab("staff");
            }}
          >
            <Link to="/admin/staff">
              <IoMdPeople
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Staff
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "customer" ? "active" : ""}
            onClick={() => {
              setActiveTab("customer");
            }}
          >
            <Link to="/admin/customer">
              <FaRegUser
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Customer
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "reservation" ? "active" : ""}
            onClick={() => {
              setActiveTab("reservation");
            }}
          >
            <Link to="/admin/reservation">
              <MdOutlineRestaurantMenu
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Reservation
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "contact_res" ? "active" : ""}
            onClick={() => {
              setActiveTab("contact_res");
            }}
          >
            <Link to="/admin/contact_res">
              <TiContacts
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Contact Res.
              </span>
            </Link>
          </li>
          <li
            className={activeTab === "blogs" ? "active" : ""}
            onClick={() => {
              setActiveTab("blogs");
            }}
          >
            <Link to="/admin/blogs">
              <MdLibraryBooks
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                Blogs
              </span>
            </Link>
          </li>
          {/* <li
            className={activeTab === "history" ? "active" : ""}
            onClick={() => {
              setActiveTab("history");
            }}
          >
            <Link to="/admin/history">
              <FaHistory
                style={{
                  width: `${show ? "10%" : "45%"}`,
                }}
              />
              <span style={{ display: `${show ? "inline-flex" : "none"}` }}>
                History
              </span>
            </Link>
          </li> */}
          <li className="mt-4">
            <MdLogout
              className=""
              style={{
                width: `${show ? "10%" : "45%"}`,
              }}
            />
            <span
              className="text-black"
              style={{ display: `${show ? "inline-flex" : "none"}` }}
              onClick={() => hendleLogout()}
            >
              Logout
            </span>
          </li>
        </ul>
      </aside>

      <nav
        className="ms-auto text-center py-2 d-flex justify-content-between aligh-items-center fixed-top bg-light"
        style={{
          width: `${show ? "calc(100% - 300px)" : "calc(100% - 75px)"}`,
        }}
      >
        <div className="d-flex align-items-center fs-2 ">
          <label className="hamburger">
            <input
              type="checkbox"
              checked={show}
              onClick={(e) => {
                setShow(e.target.checked);
              }}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <h1 className="text-black fs-1">Welcome Admin</h1>
        <div className="d-flex align-items-center">
          <Link to="/admin/admin-profile">
            <FaUserCircle
              className="fs-2 me-4 text-black"
              onClick={() => setActiveTab("profile")}
            />
          </Link>
        </div>
      </nav>
      <div
        className="main_content ms-auto p-2"
        style={{
          width: `${show ? "calc(100% - 300px)" : "calc(100% - 75px)"}`,
        }}
      >
        <div style={{ marginTop: "75px" }}>
          <Outlet />
          {/* {activeTab === "dashboard" ? <Dashboard /> : ""} */}
        </div>
      </div>
    </>
  );
}

export default Admin;
