import React from 'react';
import benner from "../../../Componet/images/img/delivery.png";
import Bannars from './Bennars';

const Bannar = () => {
    return (
        <div>
              <div className="mainContainer">
             <div className="banner">
              <Bannars name={"Jony"} discount={"30"} link={"#"} />
              <img src={benner} className="deliveryPic"></img>
              </div>
                   
            
             </div>
        </div>
    );
};

export default Bannar;