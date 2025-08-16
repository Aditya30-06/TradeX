const { model } = require("mongoose");

const { PostionSchema } = require("../schemas/PostionSchema");

const PostionModel  =  model("postion", PostionSchema);


module.exports = { PostionModel }

