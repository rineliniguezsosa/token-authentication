import { Request,Response } from 'express';

export const googleLogin = async(req:Request,resp:Response) =>{
    const { id_token } = req.body;
    resp.json({
        status:true,
        message:id_token
    })
}