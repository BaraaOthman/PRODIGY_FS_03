const  { query } = require ("../database/db")


const getProducts = async () => {
    try {

        const itemsQuery = 'SELECT * FROM products';
        const items = await query(itemsQuery);

        if (!Array.isArray(items)) {
            throw new Error('Items is not an array');
        }

        return { items };
    } catch (error) {
        throw new Error(error.message || 'Error fetching items');
    }
};




module.exports = {getProducts}