import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

client.connect()

const dbName = "tindinDB";

const database = client.db(dbName)

export = database