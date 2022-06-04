import React, { useEffect, useState } from "react";
import SubMenus from "./SubMenus";
import { MenuItems, Items } from "../../../Componet/data";
import MenuCard from "./MenuCard";
import ItemCard from "./ItemCard";
import { light } from "@mui/material/styles/createPalette";
import { BrowserRouter } from "react-router-dom";

const SubMenu = () => {
  const [items, setItems] = useState([]);
  const [allItem, setAllItems] = useState([]);
  const [category, setCategory] = useState("buger01");
  const [mainData, setMainData] = useState([]);

  function filterData(id) {
    const data = allItem.filter((item) => item.itemId === id);
    setMainData(data);
  }

  useEffect(() => {
    fetch("fetchdata.json")
      .then((res) => res.json())
      .then((data) => setItems(data));

    fetch("fetchdatas.json")
      .then((res) => res.json())
      .then((data) => setAllItems(data));

    //   if(category) {
    //     filterData(category)
    //   }
  }, []);

  //main dish state

  //end

  //   useEffect(() => {
  //     if (category) {
  //       const data = allItem.filter((item) => item.itemId === category);
  //       setMainData(data);
  //     }
  //   }, [category]);

  //main dish on function filters

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

          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setCategory(item);
                filterData(item.itemId);
                console.log(item);
              }}
            >
              <MenuCard
                item={item}
                isActive={item.id === category?.id ? true : false}
              >
                {" "}
              </MenuCard>
            </div>
          ))}
        </div>

        {/*filter card */}

        <div className="dishitemContainer">
          {
            category 
              ? mainData.map((item) => (
                  <ItemCard key={item.id} allItem={item}></ItemCard>
                ))
              : allItem.map((item) => (
                  <ItemCard key={item.id} allItem={item}></ItemCard>
                ))

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
