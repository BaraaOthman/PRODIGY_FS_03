const express = require('express');

const {addToCartController, getCartItemsForUserController, removeProductController} = require('../controllers/carts.controller')

const router = express.Router();

router.post('/addToCart', addToCartController);
router.get('/myCarts', getCartItemsForUserController)
router.delete('/removeProduct',removeProductController)

module.exports = router;
