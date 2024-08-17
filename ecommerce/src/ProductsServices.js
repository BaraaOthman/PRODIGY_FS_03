import http from "./http-common";


const products = ()=>{
    return http.get('/products/Prod')
}

const ProductService = {
    products
};

export default ProductService;

