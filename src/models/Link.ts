import { model, Schema } from "mongoose";

const linksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  url: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required:true,
    lowercase: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
    immutable: true
  },
});

const Link = model("Link", linksSchema);

export { Link };
