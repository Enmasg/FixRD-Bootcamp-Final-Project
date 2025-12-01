import express, { Request, Response, NextFunction } from "express";
import mongoose, { Types } from "mongoose";

import { IUser } from "@bootcamp/core";
import User from "../models/user.js";

const env: string = process.env.NODE_ENV || "dev";
const url: string = "/users";

const userRouter = express.Router();

// GET /api/users/me - Authenticated user's profile
userRouter.get(url + "/me", async (req: Request, res: Response) => {
  res.json({
    error: null,
    data: {
      title: "Ruta protegida: me",
      user: req.body,
    },
  });
});

export default userRouter;
