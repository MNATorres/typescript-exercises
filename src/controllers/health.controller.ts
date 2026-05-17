import type { Request, Response } from "express";

export const checkHealth = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
    message: "Respuesta generada desde el controlador de health"
  });
};
