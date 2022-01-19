import database from "../services/Database";
import { Request, Response } from "express"
import Comment from "../schemas/Comment";
import { ObjectId } from "mongodb";
import Classe from "../schemas/Classe";

class CommentController {

    async getAll(req: Request, res: Response) {
        const id_class = new Object(req.params.id_class)

        const allComments = await Comment.find({ id_class: id_class })

        if(!allComments[0]) {
            return res.status(404).send("Comments not found!")
        } else {
            return res.status(200).send(allComments)
        }
    }
    async create(req: Request, res: Response) {
        const id_class = new ObjectId(req.params.id_class)

        const classeFinded = await Classe.findOne({"_id": id_class})

        if(!classeFinded) {
            return res.status(404).send("Classe not found! no comments")
        } else {
            let totalComments = classeFinded.total_comments

            const newComment = {
                id_class: id_class,
                comment: req.body.comment,
                date_created: Date.now()
            }
            const result = await Comment.create(newComment)
            
            await Classe.updateOne({ id: id_class }, {total_comments: totalComments + 1})
            
            if(!result) {
                return res.send(500).send("Error at create comment!")
            } else {
                return res.status(200).send("Comment created sucesfully")
            }
        }
    }
    async deleteAllByClassId(req: Request, res: Response) {
        const id_class = req.params.id
        const class_search = new ObjectId(id_class);

        const result = await Comment.deleteMany({ id_class: class_search})

        if(result) { 
            return res.status(200).send("Comments sucesfully deleted!")
        } else {
            return res.status(500).send("Error on delete comments!")
        }
    }
    async deleteById(req: Request, res: Response) {
        const id = new ObjectId(req.params.id)
        const id_class = new ObjectId(req.params.id_class)

        console.log(id)
        if(await Comment.findOne({ "_id": id})) {
            const classComment = await Classe.findOne({ "_id": id_class })

            const classTotalComments = classComment.total_comments

            await Comment.deleteOne({ "_id": id })
            await Classe.updateOne({"_id": id_class}, {total_comments: classTotalComments - 1})

            return res.status(200).send("Comment sucesfully deleted")
        } else {
            return res.status(404).send("Comment not found")
        }
    }
}

export default new CommentController();