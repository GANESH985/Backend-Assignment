import express from "express";
import { connectDB } from "./config";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import commentRoutes from "./routes/comments";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));