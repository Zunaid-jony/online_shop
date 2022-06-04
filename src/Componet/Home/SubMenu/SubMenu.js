import React, { useEffect, useState } from 'react';
import SubMenus from './SubMenus';
import { MenuItems, Items }from '../../../Componet/data'
import MenuCard from './MenuCard';
import ItemCard from './ItemCard';

const SubMenu = () => {

     const [item, setItems]= useState([]);
     useEffect(()=>{
         fetch('fetchdata.json')
         .then(res=> res.json())
         .then(data => setItems(data))
     },[]);


     const [allItem, setAllItems]=useState([]);
     useEffect(()=>{
         fetch('fetchdatas.json')
         .then(res=>res.json())
         .then(data=> setAllItems(data))
     },[])


     //main dish state
  const [isMainData, setMainData]= useState(
    // Items.filter((element)=> element.itemId === "pizza01")
    allItem.filter((element)=> element.itemId === "pizza01")
  );
    //end

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menu cards
    
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
    //isMainData ata deya hoise
  }, [isMainData]);

  //main dish on function filters
  const setData =(itemId)=>{
    setMainData(allItem.filter((element)=> element.itemId === itemId ))
  }
    return (
        <div>
             <div className="dishContainer">
            <div className="menuCard">
              <SubMenus name={"Menu Category"} />
            </div>
            {/* dfffffffffffffff */}
            <div className="rowContainer">
              {/* {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={()=> setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                 
                      name={data.name}
                      isActive ={data.id === 1 ? true : false}
                    ></MenuCard>
                  </div>
                ))} */}


            {
               item && item.map(item =><MenuCard
            
                 
                key={item.id}
                onClick={()=>setData(item.itemId)}
               
                item={item}
                isActive ={item.id === 1 ? true : false}
                
                > </MenuCard> )
            }
            </div>


            {/*filter card */}
            
            <div className="dishitemContainer">
            {


         isMainData && allItem.map(allItem => <ItemCard
                key={allItem.id}
                allItem={allItem}
                
                ></ItemCard>)
            //   isMainData && isMainData.map(data=> (
            //     <ItemCard 
            //     key={data.id}
            //     imgSrc={data.imgSrc}
            //      name={data.name} 
            //      ratings={data.ratings}
            //       price={data.price} />

            //   ))
            }


     
            

            </div>
          </div>
            
        </div>
    );
};

export default SubMenu;