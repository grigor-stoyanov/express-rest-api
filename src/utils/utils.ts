import { Request, Response, NextFunction, RequestHandler } from "express";

export function isInteger(input: unknown):input is string{
    return typeof input === "string" && /^\d+$/.test(input);
}

export const asyncHandler = <T extends RequestHandler>(fn: T): RequestHandler   =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
