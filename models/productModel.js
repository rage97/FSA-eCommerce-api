const mongoose = require('mongoose');

const productModel = mongoose.model('product',{
    // _id: {
    //     type: String,
    // },
    brand: {
        type: String,
    },
    price: {
        type: Number,
    },
    inStock: {
        type: Boolean,
    },
});

module.export = productModel;