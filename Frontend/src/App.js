import React, { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Header from '../src/components/Header';
import ProductList from '../src/components/ProductList';
import Cart from '../src/components/Cart';
import Reviews from '../src/components/Reviews';
import Footer from '../src/components/Footer';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Product from '../src/components/Product';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [reviews, setReviews] = useState([]);    

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (

        <div className="App">
            <Header cartItems={cartItems} />
        
            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                <Route path="/reviews" element={<Reviews reviews={reviews} />} />
                <Route path="/register"  element={<Register />} />
                <Route path="/Prod" element={<Product />} />
            </Routes>

            <Footer />
        </div>);
};

export default App;
