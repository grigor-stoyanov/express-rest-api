import { NextFunction, Request, Response } from "express";
import { hasStatus, isInteger } from "../utils/utils";
import { logger } from "../utils/logger";


export default function defaultErrorFunction(
  err: unknown,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  logger.error("Default error handler triggered:", err);
  if (response.headersSent) {
    logger.error(
      "Response already been written, delegating to default error handler",
    );
    return next(err);
  } 
  
  let errorMessage: string = err instanceof Error ? err.message :  "Default error handling triggered check logs.";
  let status: number = hasStatus(err) && isInteger(err.status) ? Number.parseInt(err.status): 500;

    response.status(status).json({
      status: status,
      message: errorMessage,
    });
}

