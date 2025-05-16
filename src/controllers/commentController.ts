import { Request, Response } from "express";
import { commentCollection } from "../models/commentModel";

export const getComments = async (_req: Request, res: Response) => {
    const comments = await commentCollection.find({}).toArray();
    res.json(comments);
};

export const addComment = async (req: Request, res: Response) => {
    const comment = req.body;
    await commentCollection.insertOne(comment);
    res.status(201).json(comment);
};