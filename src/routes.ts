import {Router} from 'express'
import { Link } from './models/Link';

const routes = Router()



routes.get("/get-users", async (req, res) => {
  const link = await Link.find({});

  res.json(link);
});

routes.delete("/delete-user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    await Link.findByIdAndDelete({ _id: userId });
    res.status(200).json("User deletado!");
  } catch (err) {
    res.status(404).json("User doesn't exists");
  }
});

export {routes}