const express = require('express');
//const path = require('path');
//const rootDirectory = require('../utilities/path');
const shopController = require('../controllers/shop');
const router = express.Router();

//router.get('/', shopController.getProducts);

//router.get('/', function(req, res){
//    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
//});

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCart);

module.exports = router;