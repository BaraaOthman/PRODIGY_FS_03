import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';
import CartService from '../CartServices';
import { useCookies } from 'react-cookie';
import { redirect, useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cookies] = useCookies(['username']);
    const username = cookies.username;
    const [message,setMessage] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {

                console.log(`username ${username}`)
                const response = await CartService.getCartsForUser(username);
                console.log(`carts ${JSON.stringify(response.data)}`)
                setCartItems(response.data.cartsUser); 
            } catch (error) {
                console.error('Failed to fetch cart items', error);
            }
        };

        fetchCartItems();
    }, []);

    const removeFromCart = async (product_id) => {
        try {

            if (!username) {
                setMessage('Username not found in cookies');
                return;
            }

            console.log(`username ${username} , product_id ${product_id}`)
            const response = await CartService.removeProduct(product_id, username);

            if (response.status === 200) {
                setCartItems(cartItems.filter(item => item.product_id !== product_id));
                navigate('/Prod')
            } else {
                console.error('Error deleting product:', response.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    return (
        <div className="cart">
                <div className="back-arrow" onClick={() => navigate('/Prod')}>
                &larr; Back to Home
            </div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                            <button className='btn-cart' onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
