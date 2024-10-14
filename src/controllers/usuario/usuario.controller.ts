import { Request,Response } from 'express';
import { usuarioModel } from '../../models';


export const postuser = async(req:Request,resp:Response) =>{

    const body = req.body;
    const newuser = new usuarioModel(body);

    const usuario = await newuser.save();

    resp.json({
        status:true,
        message:usuario
    })
}

export const getuser = async(req:Request,resp:Response) =>{

    const query = req.query; // GET ALL QUERY PARAMS

    resp.json({
        status:true,
        message:query
    })
}