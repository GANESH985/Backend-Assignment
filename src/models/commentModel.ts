import { db } from "../config";
import { Comment } from "../types";

export const commentCollection = db.collection<Comment>("comments");