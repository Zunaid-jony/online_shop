import React from "react";
import { TextField, Input, MenuItem, Container } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

const currencies = [
  {
    value: "USD",
    label: "Burger",
  },
  {
    value: "EUR",
    label: "Pizza",
  },
  {
    value: "BTC",
    label: "Hotdog",
  },
  {
    value: "JPY",
    label: "Taco",
  },
  {
    value: "JPY",
    label: "Snack",
  },
  {
    value: "JPY",
    label: "Drink",
  },
];

const Ites = () => {
  // const [name, setName] = useState('');
  const [itemId, setItemId] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [imgSrc, setImgSrc] = useState(null);
  const [id, setId] = useState("");

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imgSrc) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("itemId", itemId);
    formData.append("imgSrc", imgSrc);
    formData.append("id", id);
    formData.append("price",price)
    formData.append('ratings',ratings)
    fetch("http://localhost:5000/menu", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.insertedId) {
          console.log("MenuItems add success");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="addMenus">
      <Container>
        <h2>Add Items</h2>
     
       
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "100%" }}
            label="name"
            onChange={(e) => setName(e.target.value)}
            type="name"
            required
            variant="standard"
          />

          {/* <TextField
           sx={{width: '100%'}}
          id="outlined-select-currency"
          select
          label="Select"
        
          onChange={handleChange}
        
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}

          <br></br>

          <TextField
            sx={{ width: "100%" }}
            label="itemId"
            onChange={(e) => setItemId(e.target.value)}
            type="name"
            required
            variant="standard"
          />
          <br></br>

          <TextField
            sx={{ width: "100%" }}
            label="Price"
            required
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            variant="standard"
          />
          <br></br>
          <TextField
            sx={{ width: "100%" }}
            label="Reting"
            required
            onChange={(e) => setRatings(e.target.value)}
            type="number"
            variant="standard"
          />
          <br></br>

          <TextField
            sx={{ width: "100%" }}
            label="id"
            onChange={(e) => setId(e.target.value)}
            type="number"
            variant="standard"
          />
          <br></br>
          <Input
            accept="image/*"
            onChange={(e) => setImgSrc(e.target.files[0])}
            sx={{ width: "100%" }}
            multiple
            type="file"
          />
          <br></br>
          <br></br>
          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            Upload
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Ites;
