import { Router } from "express";
import { healthRouter } from "./healt.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
