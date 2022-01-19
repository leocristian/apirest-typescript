import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Classe from "../schemas/Classe";

import Comment from "../schemas/Comment";

class ClasseController {

    async create(req: Request, res: Response) {
        
        const newClasse = {
            name: req.body.name,
            description: req.body.description,
            video: req.body.video,
            date_init: req.body.date_init,
            date_end: req.body.date_end,
            total_comments: 0
        }

        const result = Classe.create(newClasse)
        
        if(!result) {
            return res.status(500).send("Server Error!")

        } else {
            return res.status(200).send("Classe cadastrada com sucesso!")
        }
    }
    async getAll(req: Request, res: Response) {

        const allClasses = await Classe.find()

        if (allClasses.length == 0) {
            return res.status(404).send("Classes not found!")
        } else {
            return res.status(200).send(allClasses)
        }
    }
    async getById(req: Request, res: Response) {
        const id = new ObjectId(req.params.id);

        const result = await Classe.findOne(id)

        if(!result) {
            return res.status(404).send("Classe not found!")
        } else {
            const classeComments = await Comment.find({ id_classs: id })
            const comments = classeComments.slice(0, 3)
            
            return res.status(200).send({
                name: result.name,
                description: result.description,
                total_comments: result.total_comments,
                comments: comments
            })
        }
    }
    async deleteById(req: Request, res: Response) {
        const id = new ObjectId(req.params.id)

        const search_class = await Classe.find({ "_id": id })
        
        console.log(search_class)
        if(!search_class[0]){
            return res.status(404).send("Classe not Found!")
        } else {
            const allComments = Comment.find({ id_class: id})

            if((await allComments).length > 0) {
                console.log("existem comentários nesta aula!! deletando")
                await Comment.deleteMany({ id_class: id })
                console.log("comentários deletados")
            }

            const result = await Classe.deleteOne({ "_id": id })
            
            if(result) {
                return res.status(200).send("Classe deleted sucesfuly!")

            } else {
                return res.status(500).send("Error at delete classe!")
            }
        }
    }
    async updateById(req: Request, res: Response) {
        const id_class = new ObjectId(req.params.id)

        if(await Classe.findOne({id: id_class})) {
            await Classe.updateOne({ id: id_class }, req.body)
            return res.status(200).send("Classe Updated!")
        } else {
            return res.status(404).send("Error classe not found")
        }            
    }
}

export default new ClasseController()