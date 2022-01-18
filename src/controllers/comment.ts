import database from "../services/database";
import { Request, Response } from "express"
import comment from "../models/comment";
import { ObjectId } from "mongodb";

const commentCollection = database.collection("comments");
const classeCollection = database.collection("classes")

class CommentController {

    async getAll(req: Request, res: Response) {
        const { id_class } = req.params
        const id_class_search = new ObjectId(id_class)

        const allComments = await comment.findAllFromClassId(id_class_search)

        if(!allComments) {
            return res.status(404).send("Comments not found!")
        } else {
            return res.status(200).send(allComments)
        }
    }
    async create(req: Request, res: Response) {
        const id_class = req.params.id_class
        const { comment, date_created } = req.body

        const class_search = new ObjectId(id_class);

        const classe = await classeCollection.findOne({ "_id": class_search})
        if(!classe) {
            return res.status(404).send("Classe not found! no comments")
        } else {
            
            const result = await comment.insert(req.body)
            if(!result) {
                return res.send(500).send("Error at create comment!")
            } else {
                return res.status(200).send("Comment created sucesfully")
            }
        }
    }
    async deleteAllByClassId(class_id: ObjectId) {

        commentCollection.deleteMany({ id_class: class_id }).then(() => {
            return true
        }).catch((error) => {
            return error
        })
    }
}

export = new CommentController();