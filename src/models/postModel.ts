import { db } from "../config";
import { Post } from "../types";

export const postCollection = db.collection<Post>("posts");