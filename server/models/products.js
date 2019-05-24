var mongoose = require('mongoose');
var connection = require("../config/mongoose");
connection.getDbConnection();
var uniqueValidator = require('mongoose-unique-validator');

var ProductSchema = new mongoose.Schema({
    title:  { type: String, unique: true, index: true},
    price:  { type: Number},
    url: {type: String}
}, {timestamps: true });

ProductSchema.plugin(uniqueValidator);

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;