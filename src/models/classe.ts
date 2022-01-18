
// class Classe {

//     name: String;
//     description: String;
//     video: String;
//     date_init: Date;
//     date_end: Date;
//     date_created: Date;
//     date_updated: Date;
//     total_comments: Number;

//     constructor(classe: Classe) {
//         this.name = classe.name
//         this.description = classe.description;
//         this.video = classe.video
//         this.date_init = classe.date_init
//         this.date_end = classe.date_end
//         this.date_created = classe.date_created
//         this.date_updated = classe.date_updated
//         this.total_comments = 0
//     }
// }

import { ObjectId } from "mongodb";
import database from "../services/database"

const classeCollection = database.collection("classes")

class Classe {
    async insert(newClasse: Object) {
        try {
            await classeCollection.insertOne(newClasse)
            
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async find(id: ObjectId) {
        const classe = await classeCollection.findOne({ "_id": id})

        return classe
    }
    async findAll() {
        const allClasses = await classeCollection.find({}).toArray();

        return allClasses
    }
    async delete(id: ObjectId) {
        try {
            await classeCollection.deleteOne({ "_id": id })

            return true
        } catch(error) {
            console.log(error)
            return false
        }
    }
}

export = new Classe();