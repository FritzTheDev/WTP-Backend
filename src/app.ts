import cors from "cors";
import { config } from "dotenv";
import express, { json } from "express";
import Mongoose from "mongoose";
import passport from "passport";

// Environment Var Injection
config();

// Set Port
const port = process.env.PORT || 1337;

// Throws if no Mongo URI variable is set
if (!process.env.MONGO_URI) {
  throw new Error("Mongo URI Environment Variable Not Set");
}

// Connect To Mongo
Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// Log Successful Connection
Mongoose.connection.on("connected", () => {
  console.info("Mongoose Connection Active");
});

// Handle DB Connection Errors
Mongoose.connection.on("error", (err) => {
  console.error("Database Error: " + err);
});

// Instantiate App
const app: express.Application = express();

// Global Middlewares
// Body Parser
app.use(json());

// Cross-Origin Request sharing
app.use(cors()); // TODO Before Prod: Configure CORS Beyond Default

// Passport
app.use(passport.initialize());

// Passport Extension Allowing For "Sessions"
app.use(passport.session()); // TODO: See if this is mandatory for JWT Auth.

// Catch-All Route For Bad Requests
app.get("*", (req, res) => {
  res.status(501).json({ error: "The Requested Endpoint Does Not Exist"});
});

export const startApp = () => {
  app.listen(port, () => {
    console.info("Server Running On ", port);
  });
};
