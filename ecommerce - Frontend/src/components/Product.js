import React, { useEffect, useState } from 'react';
import ProductService from '../ProductsServices';
import '../styles/Product.css';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import CartService from '../CartServices';


const Product = () => {
    const [productsData, setProducts] = useState([]);
    const [cookies] = useCookies(['username']);
    const [message,setMessage] = useState('')
    const username = cookies.username;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const response = await ProductService.products(); 
                const data = response.data; 
                //console.log('Fetched data:', `data ${JSON.stringify(data)}`);
                setProducts(data.items.items); 
                
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);


    const addToCart = async (product_id) => {
        try {

            if (!username) {
                setMessage('Username not found in cookies');
                return;
            }

            console.log(`username ${username}`)
            console.log(`product_id ${product_id}`)
            const response = await CartService.addToCart(product_id, username);

            console.log(`username ${username}`)
            console.log(`product_id ${product_id}`)
            if (response.status === 200) {
                navigate('/Cart')
            } else {
                console.error('Error adding item:', response.message);
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    
    return (
        <div className="product-list">
            {productsData.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Product;
