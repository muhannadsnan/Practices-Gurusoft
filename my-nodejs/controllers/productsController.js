
var Product = require('../models/product');


exports.index = function (req, res) {
    Product.readProducts(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
}

exports.create = function (req, res) {
    var newProd = req.body;
    Product.createProduct(newProd, function (err, result) {
        if (err) throw err;
        res.json({ "message": 'Product "' + newProd.title + '" was created successfully!' });
    });
}

exports.show = function (req, res) {
    var query = { "_id": req.params.id };
    Product.readOneProduct(query, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
}

exports.update = function (req, res) {
    var newProd = req.body;
    newProd.updated_at = Date.now();
    var query = { "_id": req.params.id };
    Product.updateProduct(newProd, query, function (err, result) {
        if (err) throw err;
        res.json({ "message": 'Product "' + newProd.title + '" was updated successfully' });
    });
}

exports.destroy = function (req, res) {
    var query = { "_id": req.params.id };
    Product.destroyProduct(function (err, result) {
        if (err) throw err;
        res.json({ "message": "Product was successfully deleted!" });
    });
}