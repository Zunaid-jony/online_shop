import React from 'react';
import { CartProvider } from 'react-use-cart';
import Bennar from '../Bennar/Bennar'
import SubMenu from './../SubMenu/SubMenu';

const Home = () => {
    return (
        <div>
            <CartProvider>
            <Bennar></Bennar>
            <SubMenu></SubMenu>
            </CartProvider>
        </div>
    );
};

export default Home;