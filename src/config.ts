import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI as string);

export const db = client.db("backend-assignment");

export const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};