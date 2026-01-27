import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { AuthJwtPayload } from "../interfaces";
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

export function checkIfAuthenticated(req:Request,res:Response,next:NextFunction){
    const authJwtToken = req.headers.authorization;
    if(!authJwtToken){
        logger.info("The authentication JWT is not present access denied");
        res.sendStatus(403);
        return;
    }
    checkJwtValidity(authJwtToken)
    .then(user=>{
        logger.info('Authenticatin JWT successfully decoded',user);
        (req as Request& {user: AuthJwtPayload}).user= user;
        next();

    })
    .catch(err=>{
        logger.error('Could not validate the Authentication Token JWT,access denied');
        res.sendStatus(403);
    })
}


async function checkJwtValidity(authJwtToken: string){
    const user = await jwt.verify(authJwtToken,JWT_SECRET)    
    logger.info("Found user details in JWT:",user);
    return user
}