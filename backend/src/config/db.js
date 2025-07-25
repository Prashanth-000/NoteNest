import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("Error connecting database",error);
        process.exit(1);
    }
}