import { model, Schema } from "mongoose";

const linksSchema = new Schema({
  title: String,
  description: String,
  url: String,
  clicks: Number,
});

const Link = model("Link", linksSchema);

export { Link };
