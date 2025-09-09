import dotenv from 'dotenv';
dotenv.config({path :"./.env"});
import mongoose from 'mongoose'
const ConnectDb =async()=>{
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected successfully");
}
catch(error){
    console.error("Database connection failed",error.message);
    process.exit(1);
}
}
export default ConnectDb;