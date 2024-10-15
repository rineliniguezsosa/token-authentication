import { validationResult } from 'express-validator'
import { Request,Response,NextFunction} from 'express'

export const validaterrors = async(req:Request,resp:Response,next:NextFunction)=>{
    const error = validationResult(req)

    if(!error.isEmpty()){
        resp.status(400).json(error)
    }

    next()
}