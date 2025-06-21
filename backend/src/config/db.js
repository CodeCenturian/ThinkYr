import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // neccessary for ececuting .env

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("The DataBase is connected Successfully.");
    } catch (error) {
        console.log("The error is: ", error);
        process.exit(1);
    }
}
