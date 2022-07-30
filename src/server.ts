import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { routes } from "./routes";
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',routes)

mongoose.connect("mongodb://localhost/links");

const db = mongoose.connection;

db.once("open", () => {
  console.log("mongodb is running!");
});


app.listen(3333, () => {
  console.log("port 3333 is running!");
});
