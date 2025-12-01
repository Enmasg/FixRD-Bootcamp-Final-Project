import express, { Request, Response } from "express";
import verifyToken from "../middlewares/auth.js";

const env: string = process.env.NODE_ENV || "dev";
const url: string = "/users";

const userRouter = express.Router();

// GET /api/users/me - Authenticated user's profile
userRouter.get(
  url + "/me",
  verifyToken,
  async (req: Request, res: Response) => {
    res.json({
      error: null,
      data: (req as any).user,
    });
  }
);

export default userRouter;
