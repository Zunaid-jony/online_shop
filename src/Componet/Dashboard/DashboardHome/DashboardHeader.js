import { Box, Grid } from "@mui/material";
import React from "react";
import { useCart } from 'react-use-cart';
import AddItems from './../../Home/SubMenu/AddItems';

const DashboardHeader = () => {
    const { isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,} = useCart()
  return (
    <div className="deashbordHeader"> 
      <Grid container spacing={3} sx={{ t: -10 }}>
        <Grid
          item
          xs
          style={{
            backgroundColor: "#7e57c2",
            margin: "3px",
            textAlign: "center",
            height: "140px",
            color: 'white'
          }}
        >
          <h4>Totall Item  </h4>
          <h4>{totalItems} </h4>
        </Grid>

        <Grid
          item
          xs
          style={{
            backgroundColor: "rgb(64, 28, 224)",
            margin: "3px",
            textAlign: "center",
            height: "140px",
            color: 'white'
          }}
        >
          <h4>Totall Cost </h4>
          <h4>$ {cartTotal} </h4>
        </Grid>
        <Grid
          item
          xs
          style={{
            backgroundColor: "rgb(221, 39, 182)",
            margin: "3px",
            textAlign: "center",
            height: "140px",
            color: 'white'
          }}
        >
          <h4>Totall</h4>
        </Grid>
      </Grid>
      <AddItems></AddItems>
    </div>
  );
};

export default DashboardHeader;
