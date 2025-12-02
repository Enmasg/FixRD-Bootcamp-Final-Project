import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["auth-token"];
  if (!token) {
    return res.status(403).json({ error: "Token requerido" });
  }

  jwt.verify(token as string, "secret", (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: "Token inválido" });
    }

    (req as any).user = decoded;
    next();
  });
};

export default verifyToken;
