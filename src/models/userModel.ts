import { db } from "../config";
import { User } from "../types";

export const userCollection = db.collection<User>("users");