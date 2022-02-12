const productModel = require('../models/productModel');

const add = (data) => {
    const product = new productModel(data);
    return product.save();
};

const getProducts = () => {
    const project = {__v:0, _id:0,}
    const filter = {};
    return productModel.find(filter, projection);
}

module.exports = {add, getProducts};