import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'

function CardItem({imgSrc, qty,price,name}) {
  return (
    <div className='cardItem'>
        <div className='imgBox'>
            <img src={imgSrc}></img>  
        </div>
        <div className='itmSection'>
            <h2 className='itemName'>{name}</h2> 
            <div className='itemQuantity'>
                <span> X {qty} </span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemove'/>
                    <AddRounded className='itemAdd'/>
                </div>
            </div>
        </div>
        <p className='itmPrice'>
            <span className='dolorSign'> $ {price}</span>
            <span className='itemPriceValue'>{}</span>
        </p>
        
    </div>
  )
}

export default CardItem