import React from "react";
import "../../css/user/menu.css";
import burgir from "../../images//user/burgir.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Menu() {
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
              <div className="breakfast_img"></div>
              <div className="menu_badge d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-warning fs fs-1">Menu</h1>
                <h4 className="text-white">Breakfast</h4>
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-end mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="half_full d-flex justify-content-end">
                  <div className="border border-1 border-black p-2 mx-1">
                    Half
                  </div>
                  <div className="border border-1 border-black p-2 mx-1">
                    Full
                  </div>
                </div>
                <div className="main_menu">
                  <div className="menu_item">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-end">
              <div className="bf_menu">
                <div className="half_full d-flex justify-content-end">
                  <div className="border border-1 border-black p-2 mx-1">
                    Half
                  </div>
                  <div className="border border-1 border-black p-2 mx-1">
                    Full
                  </div>
                </div>
                <div className="main_menu">
                  <div className="menu_item">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div className="breakfast_img"></div>
              <div className="menu_badge d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-warning fs">Menu</h1>
                <h4 className="text-white">Lunch</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dinner menu */}
      <section className="py-lg-4 py-2">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-center position-relative">
              <div className="breakfast_img"></div>
              <div className="menu_badge d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-warning fs">Menu</h1>
                <h4 className="text-white">Dinner</h4>
              </div>
            </div>
            <div className="col-lg-6 col-12 menu_col d-flex justify-content-end mt-lg-0 mt-5">
              <div className="bf_menu">
                <div className="half_full d-flex justify-content-end">
                  <div className="border border-1 border-black p-2 mx-1">
                    Half
                  </div>
                  <div className="border border-1 border-black p-2 mx-1">
                    Full
                  </div>
                </div>
                <div className="main_menu">
                  <div className="menu_item">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu_item mt-3">
                    <div className="row mt-2">
                      <div className="col-3">
                        <img src={burgir} alt="" className="rounded-circle" />
                      </div>
                      <div className="col-9 px-2 d-flex justify-content-between align-items-center">
                        <div className="item">
                          <h3 className="text-black">Burgur</h3>
                          <p className="text-black m-0">
                            Tomato / Onion / salad
                          </p>
                        </div>
                        <div className="price">
                          <div className="rupee me-2">
                            <h4 className="text-warning-emphasis">
                              &#8377;20 &nbsp;&#8377;40
                            </h4>
                            <p className="text-black m-0 text-end">
                              Free Drinks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
