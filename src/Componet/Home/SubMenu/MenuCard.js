import { ChevronRightOutlined } from '@mui/icons-material';
import React from 'react';

const MenuCard = ({ item,isActive}) => {
    const {imgSrc,name} = item;
    return (
        <div className={`rowMenuCard ${isActive ? `active`: ``}`}>
        <div className='imgBox'>
         <img src={imgSrc}></img>
        </div> 
        <h3>{name}</h3>
        <i className='loadMenu'>
            <ChevronRightOutlined/>
        </i>

    </div>
    );
};

export default MenuCard;