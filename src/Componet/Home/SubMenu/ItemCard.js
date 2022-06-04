import { AddRounded } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';

function ItemCard({allItem}) {
  const {imgSrc,name,ratings,price} = allItem;
  return (
    <div className='itemCard'>
            
        <div className='isfavourite'>
        
         </div>
         <div className='imgBox'>
             <img src={imgSrc}
             className='itemImg'
             ></img>
         </div>

        <div className='itemContent'> 
        <h3>{name}</h3>
        <div className='bottom'>
            <div className='ratings'>
                <Rating name="no-value" value={ratings} />
                <h3 className='price'><span>$</span> {price} </h3> 
                {/* &nbsp;  view */}
              
               <h3><GridViewIcon></GridViewIcon></h3>
             
              
               
           
             </div>  
             <i className='addtoCart'>
               <AddRounded></AddRounded>   
             </i> 
             

        </div>
         
        </div>

    </div>
  )
}

export default ItemCard