import { Request, Response } from "express";
import { Collection } from "mongodb";
import Classe from "../models/classe";
import database from "../services/database";

const classeCollection = database.collection("classe")

class ClasseController {

    public classeCollection: Collection = database.collection("classe")

    async create(req: Request, res: Response) {
        console.log("entrou create class");
        
        const newClasse = new Classe(req.body)

        try {
            await classeCollection.insertOne(newClasse)
            return res.status(200).send("Classe cadastrada com sucesso!")
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    async getAll(req: Request, res: Response) {
        console.log("entrou");
        
        const allClasses = await classeCollection.find({}).toArray();

        if (allClasses.length == 0) {
            return res.status(404).send("Não existem classes cadastradas!")
        } else {
            return res.status(200).send(allClasses)
        }
    }
}

export = new ClasseController()