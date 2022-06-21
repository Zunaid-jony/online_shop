import { Container, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemTs from './ItemTs';

const ItemTest = () => {
    const [item, setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res =>res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1>item test {item.length}</h1>
            <Container>
                <Grid container spacing={2}>
                    {
                        item.map( item =><ItemTs
                        key={item.id}
                        item ={item}
                        ></ItemTs>)
                    }
                    

                </Grid>
            </Container>
        </div>
    );
};

export default ItemTest;