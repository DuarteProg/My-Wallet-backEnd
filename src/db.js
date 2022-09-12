import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const cliente = new MongoClient("mongodb://localhost:27017");
let db;

try {
  await cliente.connect();
  db = cliente.db("api-wallet")
} catch (error) {
  
}

// const db = cliente.db("api-wallet");

export default db;
