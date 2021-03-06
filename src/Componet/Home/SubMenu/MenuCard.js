import { ChevronRightOutlined } from "@mui/icons-material";
import React from "react";

const MenuCard = ({ item, isActive }) => {
  const { imgSrc, name } = item;
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">

        <img  src={imgSrc} alt=""></img>
        {/* <img  src={`data:image/*; base64, ${imgSrc} `}alt=""></img> */}
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightOutlined />
      </i>
    </div>
  );
};

export default MenuCard;
