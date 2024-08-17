
const {getProducts} = require ('../services/products.services')


const getProductsController = async(req,res)=>{
    try {
            const items = await getProducts();
            res.json({ success: true, items });
        } catch (error) {
            console.error('Error fetching items:', error.message);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    
}

module.exports = {getProductsController}