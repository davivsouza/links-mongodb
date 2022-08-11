import express from "express";
import { Router } from "express";
import { addLink, allLinks, deleteLinkById,editLink, loadLink, redirect } from "./controllers/linkController";

const routes = Router();

routes.get("/", allLinks);
routes.get("/add", (req, res) => res.render("index", { error: false, body: {} }));
routes.get("/links/:title", redirect);
routes.get("/edit/:id", loadLink)

routes.post("/edit/:id",express.urlencoded({extended:true}),editLink )
routes.post("/link",express.urlencoded({extended:true}), addLink);
routes.delete("/:id", deleteLinkById)

export { routes };
