import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { routes } from "./routes";
import path from "path"

const app = express();
app.use(express.json());
app.use(cors());
app.use('/',routes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "templates"))


mongoose.connect("mongodb://localhost/newLinks");

const db = mongoose.connection;


db.once("open", () => {
  console.log("mongodb is running!");
  // createLinks()
  // createPerson()
});


app.listen(3333, () => {
  console.log("port 3333 is running!");
});
