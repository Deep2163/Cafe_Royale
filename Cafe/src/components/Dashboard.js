import React from "react";
import "../css/dashboard.css";
import { IoBookmarksOutline, IoFastFoodOutline } from "react-icons/io5";
import { FaCookieBite } from "react-icons/fa";
import { PiChefHatThin } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiBloggerLine, RiContactsBook3Line } from "react-icons/ri";
import axios from "axios";

function Dashboard() {

  const [dash , setDash] = React.useState([]);

  React.useEffect(() => {
    getAllDash();
  }, []);

 const getAllDash = async () => {
    try {
      const res = await axios.get("http://localhost:3001/admin/dashboard");
      // console.log(res.data.data);
      setDash(res.data.data);
    } 
    catch (error) {
      console.log(error);
    }
 };


  return (
    <div className="container-fluid dashboard-container">
      <h2 className="welcome_admin">Welcome to Cafe Royale</h2>

      <div className="row mt-4 g-4">
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <FaCookieBite
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></FaCookieBite>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Menu</p>
              <p className="fs-3 m-0 mt-1">{dash.totalProduct}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
           <div>
           <IoFastFoodOutline
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></IoFastFoodOutline>
           </div>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Orders</p>
              <p className="fs-3 m-0 mt-1">{dash.totalOrder}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <PiChefHatThin
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></PiChefHatThin>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total staff</p>
              <p className="fs-3 m-0 mt-1">{dash.totalchef}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <HiOutlineUserGroup
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></HiOutlineUserGroup>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Customer</p>
              <p className="fs-3 m-0 mt-1">{dash.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <IoBookmarksOutline
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></IoBookmarksOutline>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Reservation</p>
              <p className="fs-3 m-0 mt-1">{dash.totalBooktable}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <RiContactsBook3Line
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></RiContactsBook3Line>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Contacts</p>
              <p className="fs-3 m-0 mt-1">{dash.totalContacts}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="text-center p-4 text-white rounded d-flex align-items-center"
            style={{ backgroundColor: "#572000" }}
          >
            <RiBloggerLine
              style={{ height: "70px", width: "70px" }}
              className="text-white"
            ></RiBloggerLine>
            <div className="mx-auto"> 
              <p className="fs-5 opacity-50 m-0">Total Blogs</p>
              <p className="fs-3 m-0 mt-1">{dash.totalblog}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
