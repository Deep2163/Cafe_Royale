// import React, { useEffect, useRef, useState } from "react";
import "../../css/user/home.css";
// import main_content from "../../images/user/main-centent.jpg";
import veg_logo from "../../images/user/veg_logo.jpg";
//coffee
import cup_square from "../../images/coffees/cup_square.jpg";
import Cafe_Au_Lait from "../../images/coffees/Cafe_Au_Lait.jpg";
import capuccino from "../../images/coffees/capuccino.jpg";
import dalgona from "../../images/coffees/DALgona_Coffee.jpg";
import coffee_creamer from "../../images/coffees/coffee_creamer.jpg";
//tea
import masala_tea from "../../images/teas/masala_tea.jpg";
import green_tea from "../../images/teas/Green_Tea.jpg";
import black_tea from "../../images/teas/black_tea.jpg";
import flowering_tea from "../../images/teas/flowering_tea.jpg";
import Herbal_tea from "../../images/teas/herbal_tea.jpg";
import assam_tea from "../../images/teas/assam_tea.jpg";
//food images
import pijjo from "../../images/foods/pizaa.jpg";
import burger2 from "../../images/foods/buragar.jpg";
import sandwich from "../../images/foods/sendwich.jpg";
import sizzler from "../../images/foods/sizzler.jpg";
import rolls from "../../images/foods/rolls.jpg";
import momos from "../../images/foods/momos.jpg";
//deserts images
import brownies from "../../images/user/deserts/brownies.jpg";
import chococake from "../../images/user/deserts/chocolate_cake.jpg";
import cupcakeD from "../../images/user/deserts/cupcake.jpg";
import desert_dish from "../../images/user/deserts/desert_dish.jpg";
import oreo_cupcake from "../../images/user/deserts/oreo_cupcake.jpg";
import Red_Velvet from "../../images/user/deserts/Red_Velvet.jpg";

import b from "../../images/menu_images/b.jpg";
import i15 from "../../images/user/15.png";
import i16 from "../../images/user/16.png";
// menu Images
import coffee_icon from "../../images/menu_icons/coffee_menu_icon.png";
import burger from "../../images/menu_icons/burger.png";
import cupcake from "../../images/menu_icons/cupcake.png";
import tea_icon from "../../images/menu_icons/tea_menu_icon.png";
// import tomatos from "../../images/user/float_tomatos.png";
// import Gulab_Jamun from "../../images/user/sweets/Gulab_Jamun.jpg";
// import Gulab_pak from "../../images/user/sweets/gulabpak.jpg";
// import Jalebi from "../../images/user/sweets/jalebi.jpg";
// import Kaju_Katri from "../../images/user/sweets/kaju_katri.jpg";
// import peda from "../../images/user/sweets/Peda.jpg";
// import Rasmalai from "../../images/user/sweets/Rasmalai.jpg";
// import f1 from "../../images/user/food_items/f1.jpeg";
// import f2 from "../../images/user/food_items/f2.jpeg";
// import f3 from "../../images/user/food_items/f3.jpeg";
// import f4 from "../../images/user/food_items/f4.jpeg";
// import f5 from "../../images/user/food_items/f5.jpeg";
// import f6 from "../../images/user/food_items/f6.jpeg";
// import chocolate_shake from "../../images/user/drinks/chocolate_shake.jpg";
// import chocolate_thickshake from "../../images/user/drinks/chocolate_thickshake.jpg";
// import orio_milkshake from "../../images/user/drinks/orio_milkshake.jpg";
import coffee_cup from "../../images/user/drinks/coffee_cup.jpg";
import cold_coffee from "../../images/user/drinks/cold_coffee.jpg";
import glass from "../../images/user/glass.jpg";
import customer from "../../images/user/customer.jpg";
import c8 from "../../images/user/8.jpg";
import c6 from "../../images/user/6.jpg";
import c7 from "../../images/user/7.jpg";
import blog1 from "../../images/user/blog1.jpg";
import blog3 from "../../images/user/blog2.jpeg";
import logo from "../../images/logo/logo.png";
import Navbar from "../user/Navbar";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import HomeMenuCard from "./HomeMenuCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  // const floatingImgRef = useRef(null);
  // const mainMenuSecRef = useRef(null);
  // const [bottomPosition, setBottomPosition] = useState("-150px");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!mainMenuSecRef.current || !floatingImgRef.current) return;

  //     const sectionRect = mainMenuSecRef.current.getBoundingClientRect();

  //     if (sectionRect.top >= 0) {
  //       setBottomPosition("-150px");
  //     } else {
  //       setBottomPosition(
  //         `${Math.max(0, window.innerHeight - (sectionRect.bottom - 200))}px`
  //       );
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  //menu items array

  // const coffee_items = [
  //   {
  //     name: "Cappuccino",
  //     description: "Cappuccino",
  //     price: 250,
  //     image: capuccino,
  //   },
  //   {
  //     name: "Latte",
  //     description: "Latte",
  //     price: 150,
  //     image: coffee_cup,
  //   },
  //   {
  //     name: "Espresso",
  //     description: "Espresso",
  //     price: 200,
  //     image: cup_square,
  //   },
  //   {
  //     name: "Cold Coffee",
  //     description: "Cold Coffee",
  //     price: 100,
  //     image: cold_coffee,
  //   },
  //   {
  //     name: "Dalgona",
  //     description: "Dalgona Coffee",
  //     price: 100,
  //     image: dalgona,
  //   },
  //   {
  //     name: "Coffee Creamer",
  //     description: "coffee_creamer ",
  //     price: 100,
  //     image: coffee_creamer,
  //   },
  // ];

  // const tea_items = [
  //   {
  //     name: "Masala Tea",
  //     description: "Best for Headache",
  //     price: 250,
  //     image: masala_tea,
  //   },
  //   {
  //     name: "Green Tea",
  //     description: "Reduce Fat",
  //     price: 150,
  //     image: green_tea,
  //   },
  //   {
  //     name: "Black Tea",
  //     description: "Stronger in flavour",
  //     price: 200,
  //     image: black_tea,
  //   },
  //   {
  //     name: "Flowering Tea",
  //     description: "brewing dried flowers in hot water",
  //     price: 100,
  //     image: flowering_tea,
  //   },
  //   {
  //     name: "Herbal tea",
  //     description: "infused dried herbs, fruits and flowers.",
  //     price: 100,
  //     image: Herbal_tea,
  //   },
  //   {
  //     name: "Assam Tea",
  //     description: "Black tea indigenous to Assam.",
  //     price: 100,
  //     image: assam_tea,
  //   },
  // ];

  // const food_items = [
  //   {
  //     name: "Pizza",
  //     description: "Best of Pizzas",
  //     price: 200,
  //     image: pijjo,
  //   },
  //   {
  //     name: "Burger",
  //     description: "Best Veg Burgers",
  //     price: 50,
  //     image: burger2,
  //   },
  //   {
  //     name: "Momos",
  //     description: "Steam and Fried Momos",
  //     price: 50,
  //     image: momos,
  //   },
  //   {
  //     name: "Paneer rolls",
  //     description: "Tasty Paneer Rolls",
  //     price: 50,
  //     image: rolls,
  //   },
  //   {
  //     name: "Sandwich",
  //     description: "Best Sandwiches",
  //     price: 100,
  //     image: sandwich,
  //   },
  //   {
  //     name: "Sizzlers",
  //     description: "Best Sizzlers",
  //     price: 500,
  //     image: sizzler,
  //   },
  // ];

  // const deserts_items = [
  //   {
  //     name: "Brownies",
  //     description: "Tasty Brownies",
  //     price: 200,
  //     image: brownies,
  //   },
  //   {
  //     name: "Chocolate Cake",
  //     description: "Best Chocolate Cakes",
  //     price: 50,
  //     image: chococake,
  //   },
  //   {
  //     name: "Cup Cake",
  //     description: "Baked Cup Cakes",
  //     price: 50,
  //     image: cupcakeD,
  //   },
  //   {
  //     name: "Ice-Cream",
  //     description: "Cold Ice-Cream",
  //     price: 50,
  //     image: desert_dish,
  //   },
  //   {
  //     name: "Oreo Cupcake",
  //     description: "Tasty Oreo Cupcake",
  //     price: 100,
  //     image: oreo_cupcake,
  //   },
  //   {
  //     name: "Red Velvet Cake",
  //     description: "Favourite Red Velvet Cake",
  //     price: 500,
  //     image: Red_Velvet,
  //   },
  // ];


//get coffie items

  const [coffeeItems, setCoffeeItems] = useState([]);
  const [teaItems, setTeaItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [desertsItems, setDesertsItems] = useState([]);

  const getCoffieItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/search", {
        params: { category: "coffee" },
      });
      setCoffeeItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getTeaItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/search", {
        params: { category: "tea" },
      });
      setTeaItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/search", {
        params: { category: "snacks" },
      });
      setFoodItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getDesertsItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/search", {
        params: { category: "deserts" },
      });
      setDesertsItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffieItems();
    getTeaItems();
    getFoodItems();
    getDesertsItems();
  }, []);


  return (
    <>
      <Navbar />

      <section className="header pt-4" id="header">
        <div className="bg_blur"></div>
        <div className="container-lg container-fluid p-0 text-center mb-4 z-3 sticky-top top-0"></div>
        <div className="container dixor mx-auto position-relative z-4">
          <div className="row mt-3 justify-content-center align-items-center">
            <div className="col-12">
              <div className="d-flex justify-content-end ">
                <img
                  src={veg_logo}
                  alt=""
                  width="3%"
                  height="3%"
                  className=""
                />
              </div>
              {/* <h1 className="text-center">Royal Rajma</h1> */}
              <h1 className="text-center">
                <svg
                  width="255"
                  height="39"
                  viewBox="0 0 255 39"
                  fill="none"
                  className="CafeRoyale mt-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5677 24.68C23.7143 26.04 22.701 27.16 21.5277 28.04C20.381 28.8933 19.1143 29.5333 17.7277 29.96C16.3677 30.3867 14.9277 30.6 13.4077 30.6C11.461 30.6 9.67432 30.28 8.04766 29.64C6.44766 28.9733 5.04766 28.0133 3.84766 26.76C2.67432 25.48 1.76766 23.9467 1.12766 22.16C0.487656 20.3467 0.167656 18.28 0.167656 15.96C0.167656 13.72 0.487656 11.6933 1.12766 9.88C1.79432 8.06667 2.72766 6.50667 3.92766 5.2C5.15432 3.86667 6.60766 2.85333 8.28766 2.16C9.99432 1.44 11.901 1.08 14.0077 1.08C15.5277 1.08 16.9543 1.22667 18.2877 1.52C19.621 1.81333 20.821 2.22667 21.8877 2.76C22.981 3.29333 23.8877 3.90667 24.6077 4.6L22.5277 15H21.8077L21.2077 9.2C21.0477 7.46667 20.6477 6.05333 20.0077 4.96C19.3677 3.84 18.4743 3.01333 17.3277 2.48C16.2077 1.92 14.7943 1.64 13.0877 1.64C11.861 1.64 10.7277 1.97333 9.68766 2.64C8.64766 3.30667 7.75432 4.24 7.00766 5.44C6.28766 6.61333 5.72766 7.98666 5.32766 9.56C4.92766 11.1333 4.72766 12.8267 4.72766 14.64C4.72766 16.5867 4.95432 18.4 5.40766 20.08C5.88766 21.76 6.59432 23.2267 7.52766 24.48C8.46099 25.7067 9.63432 26.6667 11.0477 27.36C12.461 28.0533 14.1143 28.4 16.0077 28.4C17.6343 28.4 19.1543 28.0533 20.5677 27.36C21.981 26.6667 23.181 25.68 24.1677 24.4L24.5677 24.68ZM41.1492 9.4C42.6959 9.4 44.0159 9.58666 45.1092 9.96C46.2292 10.3067 47.1492 10.8533 47.8692 11.6C48.5892 12.3467 49.1092 13.2933 49.4292 14.44C49.7492 15.56 49.9092 16.8933 49.9092 18.44V28.6C49.9092 29 49.9892 29.2933 50.1492 29.48C50.3359 29.6667 50.5759 29.76 50.8692 29.76C51.1892 29.76 51.5492 29.6667 51.9492 29.48C52.3759 29.2933 52.7892 29.0533 53.1892 28.76V29.2C52.8692 29.4933 52.4826 29.7467 52.0292 29.96C51.6026 30.1733 51.1492 30.3333 50.6692 30.44C50.1892 30.5467 49.7226 30.6 49.2692 30.6C48.0959 30.6 47.1759 30.2933 46.5092 29.68C45.8426 29.04 45.5092 28.0133 45.5092 26.6C45.5092 26.0667 45.5092 25.68 45.5092 25.44C45.5092 25.1733 45.5092 24.9733 45.5092 24.84C45.5092 24.7067 45.5092 24.56 45.5092 24.4L45.1892 24.16C44.6826 25.1733 44.0692 26.08 43.3492 26.88C42.6559 27.68 41.8692 28.36 40.9892 28.92C40.1359 29.4533 39.2559 29.8667 38.3492 30.16C37.4426 30.4533 36.5359 30.6 35.6292 30.6C34.6426 30.6 33.7492 30.4267 32.9492 30.08C32.1492 29.76 31.5092 29.28 31.0292 28.64C30.5492 27.9733 30.3092 27.16 30.3092 26.2C30.3092 23.9333 31.6026 22.2133 34.1892 21.04C36.7759 19.84 40.5492 19.24 45.5092 19.24C45.5092 16.9733 45.3359 15.1867 44.9892 13.88C44.6426 12.5467 44.0426 11.5867 43.1892 11C42.3359 10.4133 41.1626 10.12 39.6692 10.12C38.6826 10.12 37.8026 10.2133 37.0292 10.4C36.2826 10.56 35.6959 10.76 35.2692 11C34.8692 11.24 34.6692 11.4533 34.6692 11.64C34.6692 11.7733 34.7892 11.92 35.0292 12.08C35.2959 12.2133 35.7626 12.4133 36.4292 12.68C37.6559 13.16 38.2692 13.84 38.2692 14.72C38.2692 15.52 37.9226 16.1333 37.2292 16.56C36.5359 16.96 35.6959 17.16 34.7092 17.16C33.7492 17.16 32.9226 16.9467 32.2292 16.52C31.5626 16.0933 31.2292 15.48 31.2292 14.68C31.2292 14.04 31.4959 13.4133 32.0292 12.8C32.5892 12.16 33.3226 11.5867 34.2292 11.08C35.1626 10.5733 36.2159 10.1733 37.3892 9.88C38.5892 9.56 39.8426 9.4 41.1492 9.4ZM45.5092 19.72C42.9759 19.72 40.8826 20 39.2292 20.56C37.5759 21.0933 36.3492 21.8267 35.5492 22.76C34.7492 23.6933 34.3492 24.7333 34.3492 25.88C34.3492 26.5733 34.4826 27.1467 34.7492 27.6C35.0426 28.0267 35.4292 28.3467 35.9092 28.56C36.3892 28.7733 36.9359 28.88 37.5492 28.88C38.2159 28.88 38.9226 28.76 39.6692 28.52C40.4426 28.2533 41.2026 27.8533 41.9492 27.32C42.6959 26.7867 43.3759 26.12 43.9892 25.32C44.6292 24.4933 45.1359 23.52 45.5092 22.4V19.72ZM57.0989 30V29.6L59.5789 29.2V10.8H57.0989V10.4L59.5789 10C59.4989 8.98667 59.4589 8 59.4589 7.04C59.4856 6.05333 59.5656 5.21333 59.6989 4.52C59.8856 3.53333 60.2456 2.72 60.7789 2.08C61.3389 1.44 62.0722 0.973331 62.9789 0.679998C63.9122 0.359998 65.0189 0.199997 66.2989 0.199997C67.2322 0.199997 68.0722 0.293331 68.8189 0.479999C69.5922 0.639998 70.2722 0.893331 70.8589 1.24C71.4456 1.58667 71.8989 2 72.2189 2.48C72.5389 2.96 72.6989 3.50667 72.6989 4.12C72.6989 4.68 72.5389 5.14666 72.2189 5.52C71.9256 5.86667 71.5122 6.13333 70.9789 6.32C70.4456 6.50667 69.8589 6.6 69.2189 6.6C68.2322 6.6 67.3922 6.4 66.6989 6C66.0056 5.57333 65.6589 4.97333 65.6589 4.2C65.6589 3.74666 65.7656 3.36 65.9789 3.04C66.2189 2.72 66.4722 2.44 66.7389 2.2C67.0322 1.96 67.2856 1.74666 67.4989 1.56C67.7122 1.37333 67.8189 1.18666 67.8189 0.999999C67.8189 0.866666 67.7122 0.773332 67.4989 0.719998C67.2856 0.666665 66.9122 0.639999 66.3789 0.639999C65.2856 0.639999 64.4989 0.919998 64.0189 1.48C63.5389 2.01333 63.2989 2.82667 63.2989 3.92C63.2989 4.42667 63.3256 5.02667 63.3789 5.72C63.4589 6.38667 63.5389 7.09333 63.6189 7.84C63.7256 8.56 63.8456 9.28 63.9789 10L68.5789 10.24V10.72H63.9789V29.2L66.6589 29.6V30H57.0989ZM84.1902 9.4C86.3235 9.4 88.0835 9.82667 89.4702 10.68C90.8835 11.5333 91.9368 12.6933 92.6302 14.16C93.3502 15.6 93.7102 17.2533 93.7102 19.12H77.9102V18.72L89.6302 18.28C89.6302 16.52 89.4302 15.0267 89.0302 13.8C88.6302 12.5467 88.0302 11.5867 87.2302 10.92C86.4302 10.2533 85.4168 9.92 84.1902 9.92C82.9368 9.92 81.8435 10.28 80.9102 11C79.9768 11.72 79.2568 12.8 78.7502 14.24C78.2435 15.68 77.9902 17.4667 77.9902 19.6C77.9902 20.8533 78.1635 22.0533 78.5102 23.2C78.8568 24.32 79.3502 25.3333 79.9902 26.24C80.6302 27.12 81.4168 27.8133 82.3502 28.32C83.2835 28.8267 84.3502 29.08 85.5502 29.08C86.3502 29.08 87.1368 28.9733 87.9102 28.76C88.6835 28.5467 89.4035 28.24 90.0702 27.84C90.7368 27.4133 91.3368 26.9067 91.8702 26.32C92.4302 25.7067 92.9102 25 93.3102 24.2L93.7102 24.6C93.1235 25.7733 92.4568 26.7467 91.7102 27.52C90.9635 28.2933 90.1502 28.9067 89.2702 29.36C88.3902 29.8133 87.4835 30.1333 86.5502 30.32C85.6168 30.5067 84.6702 30.6 83.7102 30.6C82.1102 30.6 80.6835 30.32 79.4302 29.76C78.1768 29.2 77.1102 28.4533 76.2302 27.52C75.3502 26.56 74.6702 25.4533 74.1902 24.2C73.7368 22.9467 73.5102 21.6133 73.5102 20.2C73.5102 18.5733 73.7768 17.1067 74.3102 15.8C74.8435 14.4667 75.5768 13.32 76.5102 12.36C77.4702 11.4 78.6035 10.6667 79.9102 10.16C81.2168 9.65333 82.6435 9.4 84.1902 9.4ZM137.843 30.6C137.069 30.6 136.336 30.3867 135.643 29.96C134.949 29.5333 134.269 28.8667 133.603 27.96C132.963 27.0267 132.296 25.8533 131.603 24.44C130.749 22.68 129.869 21.1067 128.963 19.72C128.056 18.3333 127.056 17.1333 125.963 16.12H121.923V29.08L124.363 29.6V30H114.883V29.6L117.323 29.08V2.56L114.883 2.08V1.68H128.843C130.896 1.68 132.629 1.93333 134.043 2.44C135.456 2.92 136.523 3.66667 137.243 4.68C137.963 5.66667 138.323 6.90667 138.323 8.4C138.323 9.78667 137.909 11.0133 137.083 12.08C136.256 13.12 135.043 13.96 133.443 14.6C131.843 15.2133 129.883 15.6 127.563 15.76V16.04C128.469 16.12 129.296 16.2933 130.043 16.56C130.816 16.8267 131.509 17.2 132.123 17.68C132.763 18.16 133.336 18.7467 133.843 19.44C134.349 20.1333 134.816 20.9467 135.243 21.88C135.963 23.5333 136.589 24.8933 137.123 25.96C137.683 27.0267 138.176 27.8267 138.603 28.36C139.029 28.8933 139.403 29.2 139.723 29.28C140.016 29.3867 140.309 29.4 140.603 29.32V29.72C140.336 29.9333 140.029 30.1067 139.683 30.24C139.363 30.3733 139.043 30.4667 138.723 30.52C138.403 30.5733 138.109 30.6 137.843 30.6ZM125.563 15.32C126.843 15.32 127.989 15.16 129.003 14.84C130.043 14.52 130.923 14.0667 131.643 13.48C132.363 12.8933 132.909 12.1867 133.283 11.36C133.683 10.5067 133.883 9.56 133.883 8.52C133.883 7.16 133.616 6.02667 133.083 5.12C132.576 4.18667 131.816 3.48 130.803 3C129.816 2.52 128.616 2.28 127.203 2.28C126.056 2.28 125.056 2.30667 124.203 2.36C123.349 2.41333 122.589 2.49333 121.923 2.6V15.08C122.323 15.16 122.789 15.2267 123.323 15.28C123.856 15.3067 124.603 15.32 125.563 15.32ZM154.609 9.4C156.262 9.4 157.729 9.65333 159.009 10.16C160.315 10.6667 161.409 11.4 162.289 12.36C163.169 13.2933 163.835 14.4267 164.289 15.76C164.742 17.0667 164.969 18.5333 164.969 20.16C164.969 21.68 164.742 23.08 164.289 24.36C163.835 25.6133 163.169 26.72 162.289 27.68C161.409 28.6133 160.329 29.3333 159.049 29.84C157.769 30.3467 156.289 30.6 154.609 30.6C152.902 30.6 151.395 30.3467 150.089 29.84C148.809 29.3333 147.729 28.6133 146.849 27.68C145.969 26.72 145.302 25.6133 144.849 24.36C144.422 23.08 144.209 21.68 144.209 20.16C144.209 18.5333 144.449 17.0667 144.929 15.76C145.409 14.4267 146.089 13.2933 146.969 12.36C147.875 11.4 148.969 10.6667 150.249 10.16C151.529 9.65333 152.982 9.4 154.609 9.4ZM154.609 9.92C153.302 9.92 152.209 10.36 151.329 11.24C150.475 12.12 149.822 13.3333 149.369 14.88C148.942 16.4267 148.729 18.1867 148.729 20.16C148.729 21.5733 148.835 22.88 149.049 24.08C149.289 25.28 149.649 26.3333 150.129 27.24C150.635 28.1467 151.262 28.8533 152.009 29.36C152.755 29.84 153.622 30.08 154.609 30.08C155.569 30.08 156.409 29.84 157.129 29.36C157.875 28.8533 158.502 28.16 159.009 27.28C159.515 26.3733 159.889 25.32 160.129 24.12C160.369 22.8933 160.489 21.5733 160.489 20.16C160.489 18.6667 160.369 17.3067 160.129 16.08C159.889 14.8267 159.529 13.7467 159.049 12.84C158.569 11.9067 157.955 11.1867 157.209 10.68C156.462 10.1733 155.595 9.92 154.609 9.92ZM173.881 38.6C172.895 38.6 172.068 38.44 171.401 38.12C170.735 37.8 170.215 37.36 169.841 36.8C169.495 36.2667 169.321 35.6533 169.321 34.96C169.321 34.5333 169.401 34.1733 169.561 33.88C169.748 33.5867 169.988 33.3333 170.281 33.12C170.601 32.9333 170.935 32.7867 171.281 32.68C171.655 32.5733 172.041 32.52 172.441 32.52C172.895 32.52 173.335 32.6 173.761 32.76C174.188 32.92 174.535 33.1467 174.801 33.44C175.068 33.76 175.201 34.16 175.201 34.64C175.201 35.0133 175.148 35.36 175.041 35.68C174.935 36 174.788 36.2933 174.601 36.56C174.441 36.8267 174.308 37.0267 174.201 37.16C174.121 37.32 174.081 37.4533 174.081 37.56C174.081 37.7467 174.375 37.84 174.961 37.84C175.441 37.84 175.935 37.6533 176.441 37.28C176.948 36.9067 177.415 36.36 177.841 35.64C178.188 35.1333 178.561 34.3733 178.961 33.36C179.388 32.3733 179.815 31.2533 180.241 30H178.081L170.321 10.8L167.841 10.4V10H177.521V10.4L175.081 10.76L181.201 26.28H181.681L185.041 16.76C185.148 16.44 185.228 16.0933 185.281 15.72C185.361 15.32 185.401 14.92 185.401 14.52C185.401 14.04 185.335 13.56 185.201 13.08C185.095 12.6 184.895 12.16 184.601 11.76C184.335 11.36 183.948 11.04 183.441 10.8C182.935 10.5333 182.295 10.4 181.521 10.4V10H190.401V10.4L187.881 10.8L180.801 30C180.241 31.5467 179.735 32.84 179.281 33.88C178.828 34.92 178.455 35.6533 178.161 36.08C177.681 36.8533 177.095 37.4667 176.401 37.92C175.708 38.3733 174.868 38.6 173.881 38.6ZM204.107 9.4C205.654 9.4 206.974 9.58666 208.067 9.96C209.187 10.3067 210.107 10.8533 210.827 11.6C211.547 12.3467 212.067 13.2933 212.387 14.44C212.707 15.56 212.867 16.8933 212.867 18.44V28.6C212.867 29 212.947 29.2933 213.107 29.48C213.294 29.6667 213.534 29.76 213.827 29.76C214.147 29.76 214.507 29.6667 214.907 29.48C215.334 29.2933 215.747 29.0533 216.147 28.76V29.2C215.827 29.4933 215.44 29.7467 214.987 29.96C214.56 30.1733 214.107 30.3333 213.627 30.44C213.147 30.5467 212.68 30.6 212.227 30.6C211.054 30.6 210.134 30.2933 209.467 29.68C208.8 29.04 208.467 28.0133 208.467 26.6C208.467 26.0667 208.467 25.68 208.467 25.44C208.467 25.1733 208.467 24.9733 208.467 24.84C208.467 24.7067 208.467 24.56 208.467 24.4L208.147 24.16C207.64 25.1733 207.027 26.08 206.307 26.88C205.614 27.68 204.827 28.36 203.947 28.92C203.094 29.4533 202.214 29.8667 201.307 30.16C200.4 30.4533 199.494 30.6 198.587 30.6C197.6 30.6 196.707 30.4267 195.907 30.08C195.107 29.76 194.467 29.28 193.987 28.64C193.507 27.9733 193.267 27.16 193.267 26.2C193.267 23.9333 194.56 22.2133 197.147 21.04C199.734 19.84 203.507 19.24 208.467 19.24C208.467 16.9733 208.294 15.1867 207.947 13.88C207.6 12.5467 207 11.5867 206.147 11C205.294 10.4133 204.12 10.12 202.627 10.12C201.64 10.12 200.76 10.2133 199.987 10.4C199.24 10.56 198.654 10.76 198.227 11C197.827 11.24 197.627 11.4533 197.627 11.64C197.627 11.7733 197.747 11.92 197.987 12.08C198.254 12.2133 198.72 12.4133 199.387 12.68C200.614 13.16 201.227 13.84 201.227 14.72C201.227 15.52 200.88 16.1333 200.187 16.56C199.494 16.96 198.654 17.16 197.667 17.16C196.707 17.16 195.88 16.9467 195.187 16.52C194.52 16.0933 194.187 15.48 194.187 14.68C194.187 14.04 194.454 13.4133 194.987 12.8C195.547 12.16 196.28 11.5867 197.187 11.08C198.12 10.5733 199.174 10.1733 200.347 9.88C201.547 9.56 202.8 9.4 204.107 9.4ZM208.467 19.72C205.934 19.72 203.84 20 202.187 20.56C200.534 21.0933 199.307 21.8267 198.507 22.76C197.707 23.6933 197.307 24.7333 197.307 25.88C197.307 26.5733 197.44 27.1467 197.707 27.6C198 28.0267 198.387 28.3467 198.867 28.56C199.347 28.7733 199.894 28.88 200.507 28.88C201.174 28.88 201.88 28.76 202.627 28.52C203.4 28.2533 204.16 27.8533 204.907 27.32C205.654 26.7867 206.334 26.12 206.947 25.32C207.587 24.4933 208.094 23.52 208.467 22.4V19.72ZM226.937 29.2L229.137 29.6V30H220.297V29.6L222.537 29.2V2H220.057V1.56L226.937 0.199997V29.2ZM244.531 9.4C246.664 9.4 248.424 9.82667 249.811 10.68C251.224 11.5333 252.277 12.6933 252.971 14.16C253.691 15.6 254.051 17.2533 254.051 19.12H238.251V18.72L249.971 18.28C249.971 16.52 249.771 15.0267 249.371 13.8C248.971 12.5467 248.371 11.5867 247.571 10.92C246.771 10.2533 245.757 9.92 244.531 9.92C243.277 9.92 242.184 10.28 241.251 11C240.317 11.72 239.597 12.8 239.091 14.24C238.584 15.68 238.331 17.4667 238.331 19.6C238.331 20.8533 238.504 22.0533 238.851 23.2C239.197 24.32 239.691 25.3333 240.331 26.24C240.971 27.12 241.757 27.8133 242.691 28.32C243.624 28.8267 244.691 29.08 245.891 29.08C246.691 29.08 247.477 28.9733 248.251 28.76C249.024 28.5467 249.744 28.24 250.411 27.84C251.077 27.4133 251.677 26.9067 252.211 26.32C252.771 25.7067 253.251 25 253.651 24.2L254.051 24.6C253.464 25.7733 252.797 26.7467 252.051 27.52C251.304 28.2933 250.491 28.9067 249.611 29.36C248.731 29.8133 247.824 30.1333 246.891 30.32C245.957 30.5067 245.011 30.6 244.051 30.6C242.451 30.6 241.024 30.32 239.771 29.76C238.517 29.2 237.451 28.4533 236.571 27.52C235.691 26.56 235.011 25.4533 234.531 24.2C234.077 22.9467 233.851 21.6133 233.851 20.2C233.851 18.5733 234.117 17.1067 234.651 15.8C235.184 14.4667 235.917 13.32 236.851 12.36C237.811 11.4 238.944 10.6667 240.251 10.16C241.557 9.65333 242.984 9.4 244.531 9.4Z"
                    fill="white"
                  />
                </svg>
              </h1>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/user/myreservations">
                  <button className="book_tbl">Book A Table</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container mt-5 pb-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={main_content}
                className="rounded"
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h1 className="best_line">
                Best food ideas & traditions in the world
              </h1>
              <div className="row my-5">
                <div className="col-md-6 px-4">
                  <p className="lh-base text-secondary">
                    Codulgence diminution so discovered mr apartments. Are off
                    under folly death wrote cause her way spite. Plan upon yet
                    way get cold spot its week. Almost do am or limits hearts.
                    Resolve parties but why she shewing. She sang know now.
                    Continued at up to zealously necessary breakfast. Surrounded
                    sir motionless she end literature.
                  </p>
                </div>
                <div className="col-md-6 bg-dark text-white py-4 px-5">
                  <h4 className="text-white">Lunch</h4>
                  <p>Saturday and Sunday Reservations from 12pm to 1.30pm</p>
                  <h4 className="text-white">Dinner</h4>
                  <p>Thursday to Sunday Reservations from 6pm to 8.45pm</p>
                </div>
              </div>
              <div className="row">
                <button className="ms-3 text-white explore">
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container mt-3 pt-5">
          <div className="row text-center mb-5">
            <div>
              <h1>Our Best Coffees</h1>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="txt">
                  <img
                    src={Cafe_Au_Lait}
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded-3"
                  />
                  <p className="fs-3 fw-semibold mt-3">
                    Coffee Au Lait {/* <span>06PM-09PM</span>*/}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img
                    src={capuccino}
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded-3"
                  />
                  <p className="fs-3 fw-semibold mt-3">
                    Capuccino {/*<span>06PM-09PM</span> */}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img
                    src={cup_square}
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded-3"
                    height="150px"
                  />
                  <p className="fs-3 fw-semibold mt-3">
                    Coffee {/*  <span>06PM-09PM</span> */}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 pt-5">
          <div className="row text-start mb-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img src={b} alt="" className="w-75 mx-auto rounded-4" />
            </div>
            <div className="col-lg-6 mt-5">
              <h5 className="my-1 text-danger fs-3">Daliy offer</h5>
              <h1>
                <b>
                  Grad this Deal <br />
                  Before It Finished
                </b>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis cupiditate suscipit temporibus eum reiciendis atque,
                unde neque ratione. Voluptates in quia impedit. Accusantium,
                voluptas ab? Atque tempora sunt minima veniam.
              </p>
              <button className="reserve_seat">Reserve A Seat</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-img p-5">
        <div className="container mt-5 mb-5 py-5">
          <div className="row">
            <div className="col-md-4">
              <h1 className="head">Best food ideas in the whole world</h1>
              <div className="d-flex gap-3">
                <div>
                  <h1 className="txtx">65k</h1>
                  <p className="txtx1">Clients Every Day</p>
                </div>
                <div>
                  <h1 className="txtx">26</h1>
                  <p className="txtx1">Hygiene certificate</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ backdropFilter: "blur(5px)" }}>
              <div className="card-body bg_transperant p-5">
                <img src={i15} className="im" alt="" />
                <h2 className="txtx1">Quality Food</h2>
                <p className="txtx1">
                  Seeing rather is settle genius excuse over to comparison new
                </p>
              </div>
            </div>
            <div className="col-md-4" style={{ backdropFilter: "blur(5px)" }}>
              <div className="card-body bg_transperant p-5">
                <img src={i16} className="im" alt="" />
                <h2 className="txtx1">Perfect Test</h2>
                <p className="txtx1">
                  Timing rather is settle genius excuse over to comparison new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Menu */}
      <section>
        <div className="container text-center my-5 py-5 px-4">
          <Tabs
            defaultActiveKey="coffee"
            id="justify-tab-example"
            className="mb-3 custom_tabs"
            justify
            transition={true}
          >
            <Tab
              eventKey="coffee"
              title={
                <img
                  src={coffee_icon}
                  alt="Coffee"
                  style={{ width: 125, height: 125, borderRadius: "50%" }}
                />
              }
            >
              {/* Tab content for Coffee */}
              <div className="container mt-5 py-4 bg-white">
                <div className="row bg-white px-sm-0 px-5 justify-content-center">
                  {coffeeItems.map((item, i) => (
                    <HomeMenuCard
                      key={i}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="tea"
              title={
                <img
                  src={tea_icon}
                  alt="Tea"
                  style={{ width: 125, height: 125, borderRadius: "50%" }}
                />
              }
            >
              {/* Tab content for Tea */}
              <div className="container mt-5 py-4 bg-white">
                <div className="row bg-white px-sm-0 px-5 justify-content-center">
                  {teaItems.map((item, i) => (
                    <HomeMenuCard
                      key={i}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="snacks"
              title={
                <img
                  src={burger}
                  alt="Snacks"
                  style={{ width: 125, height: 125, borderRadius: "0%" }}
                />
              }
            >
              {/* Tab content for snacks */}
              <div className="container mt-5 py-4 bg-white">
                <div className="row bg-white px-sm-0 px-5 justify-content-center">
                  {foodItems.map((item, i) => (
                    <HomeMenuCard
                      key={i}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="deserts"
              title={
                <img
                  src={cupcake}
                  alt="Deserts"
                  style={{ width: 125, height: 125, borderRadius: "0%" }}
                />
              }
            >
              {/* Tab content for snacks */}
              <div className="container mt-5 py-4 bg-white">
                <div className="row bg-white px-sm-0 px-5 justify-content-center">
                  {desertsItems.map((item, i) => (
                    <HomeMenuCard
                      key={i}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>

      <section>
        <div className="container text-center mt-5 py-5">
          <div className="texts">
            <h5 className="mb-3">FOOD ITEMS</h5>
            <h3 className="mb-4">Our Food Gallary</h3>
          </div>
          <div className="row">
            <div className="col-md-4 img-hover mb-md-0 mb-3">
              <img src={glass} width="100%" height="100%" alt="" />
            </div>
            <div className="col-md-8">
              <div className="row g-4">
                <div className="col-md-6 img-hover">
                  <img src={pijjo} width="100%" alt="" />
                </div>
                <div className="col-md-6 img-hover">
                  <img src={burger2} width="100%" alt="" />
                </div>
                <div className="col-md-6 img-hover">
                  <img
                    src={sandwich}
                    width="100%"
                    height="100%"
                    className="object-fit-cover"
                    alt=""
                  />
                </div>
                <div className="col-md-6 img-hover">
                  <img src={sizzler} width="100%" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-body-secondary pt-1 pb-5">
        <div className="container mt-5 text-center">
          <div>
            <h6 className="mt-3">HAPPY CUSTOMERS</h6>
            <h1>Our Customers Feedback</h1>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-12 position-relative">
              <img
                src={customer}
                width="80%"
                className="rounded-circle"
                alt=""
              />
              <img
                src={c8}
                alt=""
                srcSet=""
                className="rounded-circle cust-img1"
                width="20%"
              />
              <img
                src={c6}
                alt=""
                srcSet=""
                className="rounded-circle cust-img2"
                width="20%"
              />
              <img
                src={c7}
                alt=""
                srcSet=""
                className="rounded-circle cust-img3"
                width="20%"
              />
            </div>
            <div className="col-lg-6 col-12 text-start pe-5">
              <div className="rating">
                <h3 className="mt-2 fs-5">⭐⭐⭐⭐⭐(5/5)</h3>
                <h1 className="best_line mt-3">The best food ever</h1>
                <p className="text-secondary fw-semibold fs-4 lh-base mt-2">
                  “Targeting consultation discover apartments. ndulgence off
                  under folly death wrote cause her way spite. Plan upon yet way
                  get cold spot its week. Almost do am or limits hearts. Resolve
                  parties but why she shewing.”
                </p>
                <hr className="mt-4 border border-dark border-1 opacity-100" />
                <h3 className="mt-1 mb-1 text-black fs-3">Matthew J. Wyman</h3>
                <h4 className="fs-5">SENIOR CONULTANT</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="reservation mb-5">
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
            <div className="col-md-6 position-relative mt-5">
              <div className="form-box bg-dark text-white py-5 d-flex justify-content-center">
                <Link to="/user/myreservations">
                  <button className="book_tbl">Book A Table</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsnblogs text-center pt-lg-5 pt-0">
        <h6>News & Blog</h6>
        <h1 className="fs-1 mb-5">Our Latest News & Blog</h1>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 position-relative mb-md-0 mb-5">
              <img
                src={blog1}
                alt=""
                srcSet=""
                width="95%"
                className="mb-md-0 mb-5"
              />

              <div className="blog text-start pb-5">
                <h4 className="text-secondary fs-6 mt-4 mb-3">
                  By Md Sohag Burger ,Food
                </h4>
                <h1 className="fs-2 mb-3 fw-bold">
                  Picked up a Brussels burger Sprouts with ham
                </h1>
                <Link to="/user/blog">
                  <span className="fs-4">Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </Link>
                <div className="badge text-center text-white">
                  <h1 className="fs-2 mb-1 text-white fw-bold">24</h1>
                  <h3 className="fs-4 fw-bold">DEC</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative mt-md-0 mt-5">
              <img
                src={blog3}
                alt=""
                srcSet=""
                width="95%"
                className="mt-md-0 mt-5"
              />

              <div className="blog text-start pb-5">
                <h4 className="text-secondary fs-6 mt-4 mb-3">
                  By Md Sohag Burger ,Food
                </h4>
                <h1 className="fs-2 mb-3 fw-bold">
                  This prefabricated passive house is highly sustainable
                </h1>
                <Link to="/user/blog">
                  <span className="fs-4">Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </Link>
                <div className="badge text-center text-white">
                  <h1 className="fs-2 mb-1 text-white fw-bold">18</h1>
                  <h3 className="fs-4 fw-bold">NOV</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <hr className="w" />
            </div>
            <div className="col-md-2 d-flex justify-content-center mb-5 mt-5">
              <img src={logo} alt="" width="90%" />
            </div>
            <div className="col-md-5">
              <hr className="w" />
            </div>
          </div>
          <div className="row text-white">
            <div className="col-md-3 ps-5 right_border">
              <h2 className="mb-4 footer_headings">About Us</h2>
              <p className="pe-3 fw-light">
                "Indulge in the finest blends and unforgettable moments at Cafe
                Royale - where every cup is a celebration."
              </p>
              <button className="contacts mx-1">
                <i className="fa-brands fa-facebook"></i>
              </button>
              <button className="contacts mx-1">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button className="contacts mx-1">
                <i className="fa-brands fa-youtube"></i>
              </button>
              <button className="contacts mx-1">
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </div>
            <div className="col-md-3 d-flex  justify-content-center mt-4 mt-md-0">
              <div className="text-sm-start text-center">
                <h2 className="mb-4 footer_headings ">Explore</h2>
                <ul className="fw-light fs-6">
                  <li>
                    <Link to="/user/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/user/chef">Chef</Link>
                  </li>
                  <li>
                    <Link to="/user/menuuser">Menu</Link>
                  </li>
                  <li>
                    <Link to="/user/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/user/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ps-md-0 ps-2">
              <h2 className="mb-4 footer_headings">Contact Info</h2>
              <div className="d-flex">
                <button className="contacts">
                  <i className="fa-solid fa-location-dot fs-5"></i>
                </button>
                <span className="px-3 fw-light">
                  Cafe Royale. Near Sarvajanik College, Athwalines, Surat.
                </span>
              </div>
              <div className="col-md-3">
                <div className="d-flex mt-4">
                  <button className="contacts">
                    <i className="fa-solid fa-phone fs-5"></i>
                  </button>
                  <div>
                    <h6 className="px-3 text-white fs-6 fw-light">
                      +12344567890
                    </h6>
                    <h6 className="px-3 text-white fs-6 fw-light">
                      +12344567899
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex mt-3">
                  <button className="contacts">
                    <i className="fa-solid fa-envelope fs-5"></i>
                  </button>
                  <p className="px-3">cafe@royale.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 foot pe-lt-5 pe-md-3 pe-2">
              <h2 className="mb-4 footer_headings mt-md-0 mt-4">Newsletter</h2>
              <p>
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              <input
                className="mt-4 ps-2"
                placeholder="Your Email"
                type="text"
              />
              &nbsp;<i className="fa-solid fa-arrow-right arrow"></i>
              <br />
              <div className="d-flex align-items-center">
                <input type="checkbox" className="mt-3" />
                <span>&nbsp; I agree to the Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-3">
              <p>© Copyright 2025. All Rights Reserved by Cafe Royale</p>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-end">
              <h6 className="pe-3 text-white fs-4">Terms</h6>
              <h6 className="pe-3 text-white fs-4">Privacy</h6>
              <h6 className="pe-3 text-white fs-4">Support</h6>
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Home;
