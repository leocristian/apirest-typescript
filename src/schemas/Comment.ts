import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
    id_class: ObjectId,
    comment: String,
    date_created: Date
})

export default model("Comment", CommentSchema)