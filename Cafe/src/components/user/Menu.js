import React from "react";
import { useState, useEffect } from "react";
import "../../css/user/menu.css";
import burgir from "../../images//user/burgir.jpg";
import coffes from "../../images/coffes.jpg";
import teas from "../../images/tea.jpg";
import icecream from "../../images/ice cream.jpg";
import buragar from "../../images/buragar.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoryScale } from "chart.js";
// import { Button, FormControl, InputGroup, Row, Col, Container, Card } from "react-bootstrap";

// const menuItems = [
//   { id: 1, name: "Burger", description: "Tomato / Onion / Salad", price: 100, image: burgir },
//   { id: 2, name: "Pizza", description: "Cheese / Tomato / Basil", price: 200, image: burgir },
//   { id: 3, name: "Pasta", description: "Creamy Alfredo / Herbs", price: 150, image: burgir },
//   { id: 4, name: "Sandwich", description: "Grilled Chicken / Mayo", price: 120, image: burgir },
//   { id: 5, name: "French Fries", description: "Crispy / Salted", price: 80, image: burgir },
//   { id: 6, name: "Fries", description: "Crispy / Salted", price: 70, image: burgir },
// ];

function Menu() {
  const [MenuItems, setMenuItems] = useState([]);

  const [snacks, setSnacks] = useState([]);

  const [coffee, setCoffee] = useState([]);

  const [tea, setTea] = useState([]);

  const [deserts, setDeserts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Product/getall");
      // console.log(response.data.products);

      const filteredMenuItems = response.data.products.filter(
        (product) => product.category === "snacks"
      );
      setSnacks(filteredMenuItems);

      const filteredCoffee = response.data.products.filter(
        (product) => product.category === "coffee"
      );
      setCoffee(filteredCoffee);

      // console.log(filteredCoffee);

      const filteredTea = response.data.products.filter(
        (product) => product.category === "tea"
      );
      setTea(filteredTea);

      const filteredDeserts = response.data.products.filter(
        (product) => product.category === "deserts"
      );
      setDeserts(filteredDeserts);

      // setMenuItems(productsWithQty);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(coffee[0].name);

  return (
    <>
      {/* Header */}
      <Navbar />

      <section className="bgblack_navbar pt-lg-4 pt-0">
        <div className="container dixor_menu">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">Food Menu</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/">Home</Link>
                </span>
                &nbsp;<span>{`>`}</span>&nbsp;<span>food-menu</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* breakfast menu */}
      <section className="py-lg-4 py-2">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div
                className="border bg-red overflow-hidden"
                style={{ width: "100%" }}
              >
                <img
                  src={coffes}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-end mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="main_menu">
                  <div className="menu_item">
                    {coffee.slice(0, 4).map((e, index) => {                      
                      return (
                        <div key={index} className="row mt-4">
                          <div className="col-3">
                            <img src={`http://localhost:3001/images/${e.image}`} alt="" className="rounded-circle object-fit-cover" />
                          </div>
                          <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                            <div className="item">
                              <h3 className="text-black">{e.name}</h3>
                            </div>
                            <div className="price">
                              <div className="rupee me-2">
                                <h4 className="text-warning-emphasis">
                                  &#8377;{e.price}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lunch menu */}
      <section className="py-lg-4 py-2">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-12 menu_col mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="main_menu">
                  <div className="menu_item">
                  {tea.slice(0, 4).map((e, index) => {                      
                      return (
                        <div key={index} className="row mt-4">
                          <div className="col-3">
                            <img src={`http://localhost:3001/images/${e.image}`} alt="" className="rounded-circle object-fit-cover" />
                          </div>
                          <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                            <div className="item">
                              <h3 className="text-black">{e.name}</h3>
                            </div>
                            <div className="price">
                              <div className="rupee me-2">
                                <h4 className="text-warning-emphasis">
                                  &#8377;{e.price}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div
                className="border bg-red overflow-hidden"
                style={{ width: "100%" }}
              >
                <img
                  src={teas}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* breakfast menu */}
      <section className="py-lg-4 py-2">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div
                className="border bg-red overflow-hidden"
                style={{ width: "100%" }}
              >
                <img
                  src={buragar}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-end mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="main_menu">
                  <div className="menu_item">
                  {snacks.slice(0, 4).map((e, index) => {
                      return (
                        <div key={index} className="row mt-4">
                          <div className="col-3">
                            <img src={`http://localhost:3001/images/${e.image}`} alt="" className="rounded-circle object-fit-cover" />
                          </div>
                          <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                            <div className="item">
                              <h3 className="text-black">{e.name}</h3>
                            </div>
                            <div className="price">
                              <div className="rupee me-2">
                                <h4 className="text-warning-emphasis">
                                  &#8377;{e.price}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* lunch menu */}
      <section className="py-lg-4 py-2">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-12 menu_col mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="main_menu">
                  <div className="menu_item">
                  {deserts.slice(0, 4).map((e, index) => {                      
                      return (
                        <div key={index} className="row mt-4">
                          <div className="col-3">
                            <img src={`http://localhost:3001/images/${e.image}`} alt="" className="rounded-circle object-fit-cover" />
                          </div>
                          <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                            <div className="item">
                              <h3 className="text-black">{e.name}</h3>
                            </div>
                            <div className="price">
                              <div className="rupee me-2">
                                <h4 className="text-warning-emphasis">
                                  &#8377;{e.price}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div
                className="border bg-red overflow-hidden"
                style={{ width: "100%" }}
              >
                <img
                  src={icecream}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Menu;
