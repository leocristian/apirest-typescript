import mongoose from "mongoose";

class Database {
    async connect() {
        console.log("Conectando ao Banco de dados...")
        await mongoose.connect("mongodb://localhost:27017/tindinDB")
    }
}

export default new Database();