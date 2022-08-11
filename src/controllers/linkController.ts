import { Request, Response } from "express";
import { Link } from "../models/Link";
import { LinksDocProps } from "../types/types";
import path from "path";

const redirect = async (req: Request, res: Response) => {
  try {
    const { title } = req.params;

    const linksBySlug: LinksDocProps = await Link.findOneAndUpdate(
      {
        title,
      },
      {
        $inc: {
          clicks: 1,
        },
      }
    ).exec();

    res.redirect(linksBySlug.url);
  } catch (error) {
    res.status(404).send(error);
  }
};

const addLink = async (req: Request, res: Response) => {
  const link = new Link(req.body);

  try {
    let doc = await link.save();
    res.redirect("/");
  } catch (error) {
    res.render("index", { error, body: req.body });
  }
};

const allLinks = async (req: Request, res: Response) => {
  try {
    const links = await Link.find({});
    res.render("all", { links });
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteLinkById = async (req: Request, res: Response) => {
  let { id } = req.params;

  try {
    await Link.findByIdAndDelete(id);
    res.send(id);
  } catch (error) {
    res.status(404).send(error);
  }
};

const loadLink = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const links = await Link.findById(id);
    res.render("edit", { error: false, body: links });
  } catch (error) {
    res.status(404).send(error);
  }
};

const editLink = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    let link = {
      title: req.body.title,
      url: req.body.url,
      slug: "test",
    };

    await Link.updateOne({ _id: id }, link);
    res.redirect("/");
  } catch (error) {
    res.status(404).send(error);
  }
};

export { redirect, addLink, allLinks, deleteLinkById, loadLink, editLink };
