import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://narsijangid01:12345678nj@cluster0.x8tzdfv.mongodb.net/quickmed?retryWrites=true&w=majority&appName=Cluster0`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB