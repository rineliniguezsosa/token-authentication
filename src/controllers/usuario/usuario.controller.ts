import { Request,Response } from 'express';
import { usuarioModel } from '../../models';
import bcrypt from 'bcrypt';

export const postuser = async(req:Request,resp:Response) =>{

    const { nombre,correo,password,rol } = req.body;
    const newuser = new usuarioModel({nombre,correo,password,rol});

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

export const getUsuarios = async(req:Request,resp:Response) =>{

    const { limite = 5, desde = 0} = req.query; // GET ALL QUERY PARAMS
    const usuario = await usuarioModel.find().skip(Number(desde)).limit(Number(limite))

    resp.json({
        status:true,
        message:usuario
    })
}

export const updateUser = async(req:Request,resp:Response) =>{

    const { id } = req.params; // GET ALL QUERY PARAMS
    const { _id,password,google,correo,...resto} = req.body;
    console.log(password,resto);
    
    if(password){
        const salt = bcrypt.genSaltSync()
        resto.password = bcrypt.hashSync(password,salt)
    }

    const usuario = await usuarioModel.findByIdAndUpdate({id,resto});

    resp.json({
        status:true,
        message:usuario
    })
}