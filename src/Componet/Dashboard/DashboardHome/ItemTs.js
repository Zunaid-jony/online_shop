import React from 'react';
import { Grid } from '@mui/material';

const ItemTs = ({item}) => {
    const {name, imgSrc, itemId,price,ratings} = item;
    return (
        <>
        <Grid item sx={12} sm={6} md={4}>
            <img style={{width:'100px', height:'100px'}} src={`data:image/*; base64, ${imgSrc}`}></img>
            <h4>{name} </h4>
            <h4>{ratings} </h4>
            <h4>{price} </h4>

        </Grid>
            
        </>
    );
};

export default ItemTs;