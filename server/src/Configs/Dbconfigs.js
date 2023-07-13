import mongoose from "mongoose";
import 'dotenv/config'
import colors from 'colors'
export async function Dbconfig() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Mongodb connected successfully...".rainbow);
    } catch (error) {
        console.log("Mongodb not connected");
    }
}