import React from 'react';
import { TextField, Input, MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

const currencies = [
  {
    value: 'USD',
    label: 'Burger',
  },
  {
    value: 'EUR',
    label: 'Pizza',
  },
  {
    value: 'BTC',
    label: 'Hotdog',
  },
  {
    value: 'JPY',
    label: 'Taco',
  },
  {
    value: 'JPY',
    label: 'Snack',
  },
  {
    value: 'JPY',
    label: 'Drink',
  },
];

const AddProduct = () => {
// const [name, setName] = useState('');
const [ itemId, setItemId] = useState('');
const [imgSrc, setImgSrc] = useState(null);
const [id, setId] = useState('');

const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = e =>{
    e.preventDefault();
    if(!imgSrc){
      return
    }
    const formData = new FormData()
    formData.append('name', name);
    formData.append('itemId', itemId)
    formData.append('imgSrc', imgSrc)
    formData.append('id', id)
    fetch('http://localhost:5000/menuItem', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
  }
  return (
    <div>
     
      <h1>Add MenuItems</h1>
      <form onSubmit={handleSubmit}>
      <TextField
  sx={{width: '40%'}}
   label="name" 
   onChange={e => console.log(e.target.value)}
   type='name'
   required
   variant="standard" />
   <br></br>
        <br></br>
  <TextField
  sx={{width: '40%'}}
   label="itemId" 
   onChange={e => setItemId (e.target.value)}
   type='name'
   required
   variant="standard" />
   <br></br>

  <TextField 
  sx={{width: '40%'}}
   label="id" 
   onChange={e => setId (e.target.value)}
   type='number'
   variant="standard" />
   <br></br>
   <Input accept="image/*"
   onChange={e => setImgSrc(e.target.files[0])}
   sx={{width: '40%'}}
     multiple type="file" />
     <br></br>
     <br></br>
   <Button variant="contained"
    sx={{width: '40%'}}
    type="submit"
    >
    Upload
  </Button>
  </form>
    </div>
  );
};

export default AddProduct;