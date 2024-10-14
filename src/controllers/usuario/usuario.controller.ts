import { Request,Response } from 'express';

export const postuser = async(req:Request,resp:Response) =>{

    const body = req.body;

    resp.json({
        status:true,
        message:body
    })
}

export const getuser = async(req:Request,resp:Response) =>{

    const query = req.query; // GET ALL QUERY PARAMS

    resp.json({
        status:true,
        message:query
    })
}