const express = require('express');

const {getProductsController} = require('../controllers/products.controller')

const router = express.Router();

router.get('/Prod', getProductsController);


module.exports = router;
