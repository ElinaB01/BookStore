const express = require('express');
const adminController = require('../controllers/admin');
//const bodyParser = require('body-parser');
//const path = require('path');
//const rootDirectory = require('../utilities/path');
const router = express.Router();
//const products = [];

//router.get('admin/add-product', function(req, res){
//    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
//});

// /admin/add-product 
router.get('/add-product', adminController.getAddProductPage);

//admin/admin-products
router.get('/admin-products', adminController.getProducts);

router.post('/add-product', adminController.postAddProducts);

module.exports = router;
//exports.router = router;
//exports.products = products;