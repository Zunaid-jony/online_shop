import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const AddItems = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <section className="py-4  container addToCard" >
      <div className="row justify-content-center">
        {/* item cart are sathe  */}
        
        <div className="col-4 col-sm-12">
          <h5 style={{color:'#dd65a1'}}>
            {" "}
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.imgSrc} style={{ height: "6rem" }}></img>
                    </td>
                        <td>{item.name}</td>
                        <td> $ {item.price}</td>
                        <td> Quantity:  {item.ratings}</td>
                        <td>
                            <Button 
                            className="btn btn-info ms-2"
                            onClick={()=> updateItemQuantity(item.id, item.quantity-1)}
                            >-</Button>

                            <Button 
                            className="btn btn-info ms-2"
                            onClick={()=> updateItemQuantity(item.id, item.quantity+1)}
                            >+</Button>

                            <Button 
                            className="remove btn btn-danger ms-2"
                            onClick={()=>  removeItem(item.id)}
                            
                            >Remove Item</Button>
                        </td>
                  </tr>
                 

                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-auto ms-auto">
           <h2 style={{color:'#dd65a1',marginRight:'20px'}} > Total Price: $ {cartTotal}</h2>
       </div>
       <div className="col-auto" style={{marginRight:'140px'}}>
           <Button
           className="btn btn-danger m-2"
           onClick={()=> emptyCart()} 
           > Clear Cart
           </Button>
           <Button className="btn btn-primary m-2">Buy New </Button>
           
       
       </div> 
      </div>
    </section>
  );
};

export default AddItems;
