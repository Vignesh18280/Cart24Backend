const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    "title": String,
    "description": String,
    "price": Number,
    "discountPercentage": Number,
    "rating": Number,
    "stock": Number,
    "brand": String,
    "category": String,
    "thumbnail": String,
    "images": [String],
});

exports.product = mongoose.model('product',ProductSchema);