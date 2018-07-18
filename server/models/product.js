const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productmanager",
        {useNewUrlParser: true},
        (err)=>console.log(err))

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required yo"],
        minlength: 4
    },
    price: {
        type: Number,
        required: [true, "Price is required dood"]
    },
    url: {
        type: String
    }

},{timestamps: true});

const Product = mongoose.model("products", productSchema);
module.exports = Product;