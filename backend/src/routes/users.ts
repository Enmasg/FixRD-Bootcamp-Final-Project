import express, { Request, Response, NextFunction } from "express";
import User from "../models/user.js";
import { IUser } from "@bootcamp/core";
import mongoose, { Types } from "mongoose"; 

const env: string = process.env.NODE_ENV || "dev";
const url: string = "/users";
const userRouter = express.Router();
 
userRouter.get("/me", async (req: Request, res: Response) => {
    res.json({
        error: null,
        data: {
            title: 'Ruta protegida: me',
            user: req.body
        }
    })
     
  
});


userRouter.get("/", async (req: Request, res: Response) => {
    res.json({
        error: null,
        data: {
            title: 'Ruta protegida: me',
            user: req.body
        }
    })
     
  
});

export default userRouter;