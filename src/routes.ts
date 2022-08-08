import { Router } from "express";
import { redirect } from "./controllers/linkController";


const routes = Router();

routes.get("/links/:title", redirect);

export { routes };
