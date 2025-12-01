import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import joi from "joi";

import { IUser } from "@bootcamp/core";
import User from "../models/user.js";

const env: string = process.env.NODE_ENV || "dev";
const url: string = "/auth";

const authRouter = express.Router();

const schemaRegister = joi.object({
  name: joi.string().min(6).max(255).required(),
  email: joi.string().min(6).max(255).required().email(),
  password: joi.string().min(6).max(255).required(),
});

const schemaLogin = joi.object({
  email: joi.string().min(6).max(255).required().email(),
  password: joi.string().min(6).max(255).required(),
});

// POST /api/auth/register - User registration
authRouter.post(url + "/register", async (req: Request, res: Response) => {
  const { error } = schemaRegister.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const existeCorreo = await User.findOne({ email: req.body.email });
  if (existeCorreo)
    return res.status(400).json({ error: "Este correo ya esta registrado" });

  const newUser = new User(req.body);

  const salt =
    await bcrypt.genSalt(); /*Utilizar variable de entorno para este parametro*/
  newUser.password = await bcrypt.hash(newUser.password, salt);

  try {
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// POST /api/auth/login - Login
authRouter.post(url + "/login", async (req: Request, res: Response) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const usuario = await User.findOne({ email: req.body.email });
  if (!usuario)
    return res
      .status(400)
      .json({ error: "Este correo no se encuentra registrado" });

  const passwordValida = await bcrypt.compare(
    req.body.password,
    usuario.password
  );
  if (!passwordValida)
    return res.status(400).json({ error: "Contraseña incorrecta" });

  const token = jwt.sign(
    {
      _id: usuario._id,
      name: usuario.name,
      email: usuario.email,
    },
    "TOKEN_SECRET"
  ); /*Configurar token como variable de entorno */

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
});

export default authRouter;
