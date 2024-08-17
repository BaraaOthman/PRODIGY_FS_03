import http from "./http-common";


const addToCart = (product_id,username)=>{
    return http.post('/carts/addToCart',{product_id,username})
}

const getCartsForUser = (username)=>{
    return http.get('/carts/myCarts',{params: {username}})
}

const removeProduct = (product_id, username) => {
    return http.delete('/carts/removeProduct', { data: { product_id, username } });
};

const CartService = {
    addToCart,
    getCartsForUser,
    removeProduct
};

export default CartService;
