import { Request,Response } from 'express';
import { usuarioModel } from '../../models';
import bcrypt from 'bcrypt';

export const postuser = async(req:Request,resp:Response) =>{

    const { nombre,correo,password,rol } = req.body;
    const newuser = new usuarioModel({nombre,correo,password,rol});

    //verify the email
    const existEmail = await usuarioModel.findOne({correo});
    if(existEmail){
        resp.status(400).json({
            status:false,
            message:`El usuario con el ${correo} ya existe`
        })
    }

    //encript the password
    const salt = bcrypt.genSaltSync()
    newuser.password = bcrypt.hashSync(password,salt)

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