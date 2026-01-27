import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { AuthJwtPayload } from "../interfaces";

export function checkIfAdmin(req:Request ,res:Response,next:NextFunction){
    const user = (req as Request& {user: AuthJwtPayload}).user
    if(!user?.isAdmin){
        logger.error("The user is not admin, access denied")
        res.sendStatus(403)
        return;
    }
    next();
}