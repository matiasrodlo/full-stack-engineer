const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, require:true, unique:true },
        description:{ type: String, require: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: String },   
    },
    {timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)