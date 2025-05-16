import { Request, Response } from "express";
import { userCollection } from "../models/userModel";

export const getUsers = async (_req: Request, res: Response) => {
    const users = await userCollection.find({}).toArray();
    
    res.json(users);
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.userId);
        const user = await userCollection.findOne({ id: userId });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


export const addUser = async (req: Request, res: Response) => {
    const user = req.body;
    await userCollection.insertOne(user);
    res.status(201).json(user);
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.userId);

    const result = await userCollection.deleteOne({ id: userId });

    if (result.deletedCount === 0) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    res.json({ message: "User deleted successfully" });
};
