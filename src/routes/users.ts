import express from "express";
import { getUsers, addUser, deleteUser, getUser } from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:userId", async (req, res) => await deleteUser(req, res));
router.get("/:userId", async (req, res) => await getUser(req, res));

export default router;