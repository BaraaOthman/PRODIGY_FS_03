const  { query } = require ("../database/db")


const addToCartService = async (product_id, username) => {
    try {
        const userQuery = 'SELECT id FROM users WHERE username = ?';
        const userRows = await query(userQuery, [username]);

        if (!userRows || !userRows.length) {
            throw new Error('User not found');
        }

        const user_id = userRows[0].id; 

        const sql = 'INSERT INTO carts (product_id, user_id) VALUES (?, ?)';
        const result = await query(sql, [product_id, user_id]);

        return result.affectedRows > 0; 
    } catch (error) {
        console.error('Error in adding Item:', error);
        throw new Error(error.message);
    }
};


const getCartItemsForUser = async (username) => {
    try {

        const userQuery = 'SELECT id FROM users WHERE username = ?';
        const userRows = await query(userQuery, [username]);

        if (!userRows || !userRows.length) {
            throw new Error('User not found');
        }

        const user_id = userRows[0].id; 

        const sql = `
            SELECT products.id, products.name, products.price, products.image 
            FROM carts 
            INNER JOIN products ON carts.product_id = products.id 
            WHERE carts.user_id = ?;
        `;
        const cartItems = await query(sql, [user_id]);

        return cartItems;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw new Error('Unable to fetch cart items');
    }
};


const removeProductFromCart= async(product_id,username)=>{
    try {
        const userQuery = 'SELECT id FROM users WHERE username = ?';
        const userRows = await query(userQuery, [username]);

        if (!userRows || !userRows.length) {
            throw new Error('User not found');
        }

        const user_id = userRows[0].id; 

        const sql = 'DELETE FROM carts WHERE product_id = ? AND user_id = ?';
        const result = await query(sql, [product_id, user_id]);

        return result.affectedRows > 0; 
    } catch (error) {
        console.error('Error in delete product:', error);
        throw new Error(error.message);
    }
}

module.exports = {addToCartService, getCartItemsForUser,removeProductFromCart}
