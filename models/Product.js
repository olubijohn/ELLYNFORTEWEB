import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    userId: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    offerPrice: {type: Number, required: true},
    image: {type: Array, required: true},
    date: {type: Number, required: true},
})

const Product = mongoose.models.product || mongoose.model("product", productSchema)

export default Product