import { Request, Response } from "express";
import { postCollection } from "../models/postModel";

export const getPosts = async (_req: Request, res: Response) => {
    const posts = await postCollection.find({}).toArray();
    res.json(posts);
};

export const addPost = async (req: Request, res: Response) => {
    const post = req.body;
    await postCollection.insertOne(post);
    res.status(201).json(post);
};