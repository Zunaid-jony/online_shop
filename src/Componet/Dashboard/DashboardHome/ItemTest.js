import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ItemTest = () => {
    const [item, setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menuItem')
        .then(res =>res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1>item test {item.length}</h1>
        </div>
    );
};

export default ItemTest;