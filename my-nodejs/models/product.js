var mongoose = require('mongoose');

var prodSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    img: String,
    price: Number,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

var Product = module.exports = mongoose.model('products', prodSchema);

module.exports.createProduct = function(newProd, callBack){
    Product.create(newProd, callBack);
};

module.exports.readProducts = function(limit, callBack ) {
    Product.find(limit, callBack);
};

module.exports.updateProduct = function (newProd, query, callBack){
    Product.update(query, newProd, callBack);
};

module.exports.readOneProduct = function (query, callBack) {
    Product.find(query, callBack);
};

module.exports.destroyProduct = function(query, callBack) {
    Product.deleteOne(query, callBack);
};