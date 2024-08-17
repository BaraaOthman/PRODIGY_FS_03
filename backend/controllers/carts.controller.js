const {addToCartService, getCartItemsForUser,removeProductFromCart} = require('../services/carts.services')


const addToCartController = async (req, res) => {
    try {
        const username = req.body.username;
        const product_id = req.body.product_id;

        if (!username || !product_id) { // Fixed typo
            return res.status(400).json({ message: 'Username or product_id missing' });
        }

        const result = await addToCartService(product_id, username);

        if (result) {
            res.status(200).json({ message: 'Product added successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error adding product:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const getCartItemsForUserController = async(req,res)=>{
    try {
        const username = req.query.username;

        console.log(`username from the controller ${username}`)
        if (!username) {
            return res.status(400).json({ message: 'Username not found in request headers' });
        }

        const cartsUser = await getCartItemsForUser(username);

        res.json({ success: true, cartsUser });


    }catch (error) {
        console.error('Error getting products:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const removeProductController = async (req, res) => {
    try {
        const { product_id, username } = req.body;

        if (!product_id || !username) {
            return res.status(400).json({ message: 'Product ID and Username are required' });
        }


        const result = await removeProductFromCart(product_id, username);

        if(result)
        res.json({ success: true, message: 'Product removed from cart' });

    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




module.exports = {addToCartController,getCartItemsForUserController,removeProductController}
