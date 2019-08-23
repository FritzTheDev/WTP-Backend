import { config } from "dotenv";
import express, { json } from "express";
import Mongoose from "mongoose";

// Environment Var Injection
config();

// Throws if no Mongo URI variable is set
if (!process.env.MONGO_URI) {
  throw new Error("Mongo URI Environment Variable Not Set");
}

// Connect To Mongo
Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
Mongoose.connection.on("connected", () => {
  console.log("Mongoose Connection Active");
});

Mongoose.connection.on("error", (err) => {
  console.error("Database Error: " + err);
});

// Instantiate App
const app: express.Application = express();

// Global Middlewares
app.use(json());
