import React from "react";
import "../../css/user/home-menu-card.css";

function HomeMenuCard(props) {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-4 ">
        <div className="position-relative">
          <img
            src={`http://localhost:3001/images/${props.image}`}
            alt=""
            className="rounded-circle menu_card_img"
            width="125px"
            height="125px"
          />
          <div className="d-flex flex-column align-items-center justify-content-end pb-3 mt-5 menu_item_card">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="price_badge d-flex align-items-center justify-content-center">
              <h4 className="m-0 fs-5 price">&#8377;{props.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMenuCard;
