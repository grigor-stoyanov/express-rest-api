import {Response, Request} from 'express';


export function ping(request:Request, response:Response){
    return response.status(200).send('pong')
}