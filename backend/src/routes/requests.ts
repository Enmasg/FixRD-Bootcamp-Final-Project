import { Router, Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";
import RequestModel from "../models/request.js";

const url: string = "/requests";
const router = Router();

router.get(url, async (req: Request, res: Response) => {
  const requests = await RequestModel.find();
  res.json(requests);
});

router.post(url, async (req: Request, res: Response) => {
  try {
    const request = new RequestModel(req.body);
    const saved = await request.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

//Not sure, pero para usar el metodo update con metodo de moongose creo que seria con findById en vez de FindOneAndUpdate

router.put(url + "/:id/status", async (req: Request, res: Response) => {
  try {
    const updated = await RequestModel.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete(url + "/:id", async (req: Request, res: Response) => {
  const deleted = await RequestModel.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

export default router;
