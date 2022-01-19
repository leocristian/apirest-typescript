
import { Schema, model } from "mongoose";


const ClasseSchema = new Schema({
    name: String,
    description: String,
    video: String,
    date_init: Date,
    date_end: Date,
    total_comments: Number
}, {
    timestamps: true
});

export default model("Classe", ClasseSchema)