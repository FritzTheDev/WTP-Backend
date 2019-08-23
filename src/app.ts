import express, { json } from "express";

// Instantiate App
const app: express.Application = express();

// Global Middlewares
app.use(json());
