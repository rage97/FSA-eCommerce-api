const express = require('express');
const productCtrl = require('../controllers/productCtrl');
const router = express.Router();


router.post('/products', productCtrl.createProduct);

module.exports = router;