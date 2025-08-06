import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import MenuAdmin from "./components/MenuAdmin";
import Staff from "./components/Staff";
import Customer from "./components/Customer";
import Reservations from "./components/Reservation";
import ContactRes from "./components/ContactRes";
import Blogs from "./components/Blogs";
import History from "./components/History";
//Revi/ user
import Home from "./components/user/Home";
import About from "./components/user/About";
import Contact from "./components/user/Contact";
import Chef from "./components/user/Chef";
import Blog from "./components/user/Blog";
import Menu from "./components/user/Menu";
import Reservation from "./components/user/Reservation";
import ErrorPage from "./components/user/Error";
import LoginRegister from "./components/user/LoginReg";

import AdminLogin from "./components/AdminLogin";
import AdminProfile from "./components/AdminProfile";
import Order from "./components/adminorder";

// userpanel
import UserHome from "./components/userPanel/UserHome";
import MyReservations from "./components/userPanel/MyReservations";
import MyOrders from "./components/userPanel/MyOrders";
import MyHistory from "./components/userPanel/MyHistory";
import UserProfile from "./components/userPanel/UserProfile";
import MenuUser from "./components/userPanel/MenuUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/about" element={<About />} />
          <Route path="/user/contact" element={<Contact />} />
          <Route path="/user/chef" element={<Chef />} />
          <Route path="/user/blog" element={<Blog />} />
          <Route path="/user/menuuser" element={<Menu />} />
          <Route path="/user/reservation" element={<Reservation />} />
          <Route path="/user/login" element={<LoginRegister />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="/user" element={<UserHome />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="" element={<MenuUser />} />
            <Route path="myreservations" element={<MyReservations />} />
            <Route path="myorders" element={<MyOrders />} />
            <Route path="history" element={<MyHistory />} />
          </Route>

          <Route path="admin-login" element={<AdminLogin />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="menu" element={<MenuAdmin />} />
            <Route path="staff" element={<Staff />} />
            <Route path="customer" element={<Customer />} />
            <Route path="reservation" element={<Reservations />} />
            <Route path="contact_res" element={<ContactRes />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="history" element={<History />} />
            <Route path="orders" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
