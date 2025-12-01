import express, { Request, Response } from "express";
import verifyToken from "../middlewares/auth.js";
import User from "../models/user.js";

const env: string = process.env.NODE_ENV || "dev";
const url: string = "/users";

const userRouter = express.Router();

// GET /api/users/me - Authenticated user's profile
userRouter.get(
  url + "/me",
  verifyToken,
  async (req: Request, res: Response) => {
    const userInfo = (req as any).user;
    const user = await User.findOne({ email: userInfo.email });

    userInfo.name = user?.name;
    userInfo.id = user?._id;

    res.status(200).json({ userInfo });
  }
);

export default userRouter;
