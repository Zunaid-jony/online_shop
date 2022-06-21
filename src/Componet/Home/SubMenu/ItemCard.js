import { AddRounded } from "@mui/icons-material";
import { Button, Rating } from "@mui/material";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { useCart } from "react-use-cart";
import ItemCardModal from './ItemCardModal';

function ItemCard({ allItem }) {
  const { imgSrc, name, ratings, price } = allItem;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // add to card
  const{addItem} = useCart();
  return (
   <>
    <div className="itemCard">
      <div className="isfavourite"></div>
      <div className="imgBox">
        <img src={`data:image/*; base64, ${imgSrc}`} className="itemImg" alt=""></img>
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
            
            <h3  >
              <GridViewIcon onClick={handleOpen} ></GridViewIcon>
            </h3>
          </div>
          <i  onClick={()=> addItem(allItem)} 
           className="addtoCart">
            <AddRounded></AddRounded>
          </i>
         
        </div>
      </div>
   
    </div>
   <ItemCardModal
   open={open}
   allItem ={allItem}
  handleClose ={handleClose}
   ></ItemCardModal>
   </>
  );
}

export default ItemCard;
