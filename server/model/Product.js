import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    originalPrice:Number,
    description:String,
    image:String,
    category:String
});
const Procuct=mongoose.model('Products',ProductSchema);
export default Procuct;
