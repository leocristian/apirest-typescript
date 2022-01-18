import { ObjectId } from "mongodb";
import database from "../services/database"

const commentCollection = database.collection("comments")

class Comment {
    
    async findAllFromClassId(id: ObjectId) {
        const allComments = await commentCollection.find({ id_class: id }).toArray()

        return allComments
    }
    async insert(newComment: Object) {

        try {
            await commentCollection.insertOne(newComment)
            
            return true
        } catch (error) {
            console.log(error)
            return false            
        }
    }
}

export = new Comment();