const { Schema } = require("mongoose");

const PostionSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: Number,
    isLoss: Boolean,
})

module.exports = { PostionSchema };