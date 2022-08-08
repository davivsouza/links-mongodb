import { Request, Response } from "express";
import { Link } from "../models/Link";
import { LinksDocProps } from "../types/types";


const redirect = async (req: Request,res:Response) => {
  try {
    const { title } = req.params;

    const linksBySlug: LinksDocProps = await Link.findOneAndUpdate(
      {
        slug: title.toLowerCase(),
      },
      {
        $inc: {
          clicks: 1,
        },
      }
    ).exec();

    res.redirect(linksBySlug.url);
  } catch (error) {
    res.send(error);
  }
}


export {redirect}