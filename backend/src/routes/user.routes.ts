import { Router, Request, Response } from "express";
import User from "../models/User.js";

const router = Router();


router.get("/", async (req: Request, res: Response) => {

  const user = await User.find();
  res.json(user);
  //res.status(200).json({ message: "Users endpoint placeholder" });//
});

export default router;
