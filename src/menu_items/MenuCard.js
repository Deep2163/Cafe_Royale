import React, { useState } from "react";
import "./menucard.css";
//coffee
import cup_square from "../images/coffees/cup_square.jpg";
import capuccino from "../images/coffees/capuccino.jpg";
import dalgona from "../images/coffees/DALgona_Coffee.jpg";
import coffee_creamer from "../images/coffees/coffee_creamer.jpg";
import coffee_cup from "../images/user/drinks/coffee_cup.jpg";
import cold_coffee from "../images/user/drinks/cold_coffee.jpg";
//tea
import masala_tea from "../images/teas/masala_tea.jpg";
import green_tea from "../images/teas/Green_Tea.jpg";
import black_tea from "../images/teas/black_tea.jpg";
import flowering_tea from "../images/teas/flowering_tea.jpg";
import Herbal_tea from "../images/teas/herbal_tea.jpg";
import assam_tea from "../images/teas/assam_tea.jpg";
//food images
import pijjo from "../images/foods/pizaa.jpg";
import burger2 from "../images/foods/buragar.jpg";
import sandwich from "../images/foods/sendwich.jpg";
import sizzler from "../images/foods/sizzler.jpg";
import rolls from "../images/foods/rolls.jpg";
import momos from "../images/foods/momos.jpg";

//deserts images
import brownies from "../images/user/deserts/brownies.jpg";
import chococake from "../images/user/deserts/chocolate_cake.jpg";
import cupcakeD from "../images/user/deserts/cupcake.jpg";
import desert_dish from "../images/user/deserts/desert_dish.jpg";
import oreo_cupcake from "../images/user/deserts/oreo_cupcake.jpg";
import Red_Velvet from "../images/user/deserts/Red_Velvet.jpg";
import { Button } from "react-bootstrap";

function MenuCard() {
  const [inStock, setInStock] = useState(true);

  const menu_items = [
    {
      name: "Cappuccino",
      categoty: "Coffee",
      description: "Cappuccino",
      price: 250,
      image: capuccino,
    },
    {
      name: "Latte",
      categoty: "Coffee",
      description: "Latte",
      price: 150,
      image: coffee_cup,
    },
    {
      name: "Espresso",
      categoty: "Coffee",
      description: "Espresso",
      price: 200,
      image: cup_square,
    },
    {
      name: "Cold Coffee",
      categoty: "Coffee",
      description: "Cold Coffee",
      price: 100,
      image: cold_coffee,
    },
    {
      name: "Dalgona",
      categoty: "Coffee",
      description: "Dalgona Coffee",
      price: 100,
      image: dalgona,
    },
    {
      name: "Coffee Creamer",
      categoty: "Coffee",
      description: "coffee_creamer ",
      price: 100,
      image: coffee_creamer,
    },
    {
      name: "Masala Tea",
      categoty: "Tea",
      description: "Best for Headache",
      price: 250,
      image: masala_tea,
    },
    {
      name: "Green Tea",
      categoty: "Tea",
      description: "Reduce Fat",
      price: 150,
      image: green_tea,
    },
    {
      name: "Black Tea",
      categoty: "Tea",
      description: "Stronger in flavour",
      price: 200,
      image: black_tea,
    },
    {
      name: "Flowering Tea",
      categoty: "Tea",
      description: "brewing dried flowers in hot water",
      price: 100,
      image: flowering_tea,
    },
    {
      name: "Herbal tea",
      categoty: "Tea",
      description: "infused dried herbs, fruits and flowers.",
      price: 100,
      image: Herbal_tea,
    },
    {
      name: "Assam Tea",
      categoty: "Tea",
      description: "Black tea indigenous to Assam.",
      price: 100,
      image: assam_tea,
    },
    {
      name: "Pizza",
      categoty: "Snacks",
      description: "Best of Pizzas",
      price: 200,
      image: pijjo,
    },
    {
      name: "Burger",
      categoty: "Snacks",
      description: "Best Veg Burgers",
      price: 50,
      image: burger2,
    },
    {
      name: "Momos",
      categoty: "Snacks",
      description: "Steam and Fried Momos",
      price: 50,
      image: momos,
    },
    {
      name: "Paneer rolls",
      categoty: "Snacks",
      description: "Tasty Paneer Rolls",
      price: 50,
      image: rolls,
    },
    {
      name: "Sandwich",
      categoty: "Snacks",
      description: "Best Sandwiches",
      price: 100,
      image: sandwich,
    },
    {
      name: "Sizzlers",
      categoty: "Snacks",
      description: "Best Sizzlers",
      price: 500,
      image: sizzler,
    },
    {
      name: "Brownies",
      categoty: "Desert",
      description: "Tasty Brownies",
      price: 200,
      image: brownies,
    },
    {
      name: "Chocolate Cake",
      categoty: "Desert",
      description: "Best Chocolate Cakes",
      price: 50,
      image: chococake,
    },
    {
      name: "Cup Cake",
      categoty: "Desert",
      description: "Baked Cup Cakes",
      price: 50,
      image: cupcakeD,
    },
    {
      name: "Ice-Cream",
      categoty: "Desert",
      description: "Cold Ice-Cream",
      price: 50,
      image: desert_dish,
    },
    {
      name: "Oreo Cupcake",
      categoty: "Desert",
      description: "Tasty Oreo Cupcake",
      price: 100,
      image: oreo_cupcake,
    },
    {
      name: "Red Velvet Cake",
      categoty: "Desert",
      description: "Favourite Red Velvet Cake",
      price: 500,
      image: Red_Velvet,
    },
  ];
  return (
    <>
      <div className="menu_cards">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">description</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {menu_items.map((e, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={e.image} alt="" width={"100%"} />
                  </div>
                </td>
                <td>{e.name}</td>
                <td>{e.categoty}</td>
                <td>{e.description}</td>
                <td>100</td>
                <td>&#8377;200</td>
                <td>
                  {inStock ? (
                    <Button
                      variant="primary"
                      onClick={() => {
                        setInStock(false);
                      }}
                    >
                      InStock
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => {
                        setInStock(true);
                      }}
                    >
                      Not In Stock
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MenuCard;
