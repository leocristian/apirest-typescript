import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import classe from "../models/classe";
import database from "../services/database";

const commentCollection = database.collection("comments")

class ClasseController {

    async create(req: Request, res: Response) {
        
        const result = classe.insert(req.body)
        if(!result) {
            return res.status(500).send("Server Error!")

        } else {
            return res.status(200).send("Classe cadastrada com sucesso!")
        }
    }
    async getAll(req: Request, res: Response) {

        const allClasses = await classe.findAll()

        if (allClasses.length == 0) {
            return res.status(404).send("Classes not found!")
        } else {
            return res.status(200).send(allClasses)
        }
    }
    async getById(req: Request, res: Response) {
        const id = req.params.id;
        const search_id = new ObjectId(id);

        const result = await classe.find(search_id)

        if(!result) {
            return res.status(404).send("Classe not found!")
        } else {
            // const comments = await commentCollection.find({ id_class: search_id })

            return res.status(200).send(result)
        }
    }
    async deleteById(req: Request, res: Response) {
        const id = req.params.id
        const search_id = new ObjectId(id)

        const search_class = await classe.find(search_id)

        if(!search_class){
            return res.status(404).send("Classe not Found!")
        } else {
            console.log("existem comentários nesta aula!! deletando")
            await commentCollection.deleteMany({ id_class: search_id })

            console.log("comentários deletados, deletando aula")
            const result = await classe.delete(search_id)
            
            if(result) {
                return res.status(200).send("Classe deleted sucesfuly!")

            } else {
                return res.status(500).send("Error at delete classe!")
            }
        }
    }
}

export = new ClasseController()