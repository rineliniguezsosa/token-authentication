import { Request,Response } from 'express';

export const postuser = async(req:Request,resp:Response) =>{

    const body = req.body;

    resp.json({
        status:true,
        message:body
    })
}