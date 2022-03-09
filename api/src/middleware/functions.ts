import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { logger } from "../logger/logger";

export async function logEndPoints(
  req: Request,
  res: Response,
  next: NextFunction
) {
  await logger.info(`${req.method} ${req.path} ${req.ip}`);
  next();
}

export async function handleValidationError(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({ errors: error.array() });
  }
  next();
}
