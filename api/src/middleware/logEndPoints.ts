import { Request, Response, NextFunction } from "express";
import { logger } from "../logger/logger";

export default async function logEndPoints(req: Request, res: Response, next: NextFunction) {
    await logger.info(`${req.method} ${req.path} ${req.ip}`);
    next();
}