import { AddRounded } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { useCart } from "react-use-cart";

function ItemCard({ allItem }) {
  const { imgSrc, name, ratings, price } = allItem;
  // add to card
  const{addItem} = useCart();
  return (
    <div className="itemCard">
      <div className="isfavourite"></div>
      <div className="imgBox">
        <img src={imgSrc} className="itemImg" alt=""></img>
      </div>

      <div className="itemContent">
        <h3>{name}</h3>
        <div className="bottom">
          <div className="ratings">
            <Rating name="no-value" value={ratings} />
            <h3 className="price">
              <span>$</span> {price}{" "}
            </h3>
            {/* &nbsp;  view */}

            <h3>
              <GridViewIcon></GridViewIcon>
            </h3>
          </div>
          <i  onClick={()=> addItem(allItem)} 
           className="addtoCart">
            <AddRounded></AddRounded>
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
