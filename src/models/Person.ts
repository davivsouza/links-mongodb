import { model, Schema } from "mongoose";

const personSchema = new Schema({
  name: String,
  age: Number,
});

const Person = model("Person", personSchema);

export { Person };
