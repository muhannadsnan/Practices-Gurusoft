var express = require('express');
var router = express.Router();
var productController = require('../controllers/productsController');

//===============================

router.get('/api/products', productController.index);
router.post('/api/products', productController.create);
router.get('/api/products/:id', productController.show);
router.put('/api/products/:id', productController.update);
router.delete('/api/products/:id', productController.destroy);


module.exports = router;