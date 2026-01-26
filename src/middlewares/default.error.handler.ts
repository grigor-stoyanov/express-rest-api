import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export default function defaultErrorFunction(err: unknown,request:Request,response:Response,next:NextFunction){
    logger.error('Default error handler triggered:',err);
    if (response.headersSent) {
        logger.error('Response already been written, delegating to default error handler')
        return next(err);
    }
    response.status(500).json({
        status:"error",
        message:"Default error handling triggered check logs."
    })
}