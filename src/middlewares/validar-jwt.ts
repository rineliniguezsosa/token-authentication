import {Request,Response,NextFunction } from 'express';
import jwt, { JwtPayload }  from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { usuarioModel } from '../models';

dotenv.config();

interface CustomJwtPayload extends JwtPayload {
    uid: string; // Asegúrate de que el payload contiene la propiedad `uid`
}

declare global {
    namespace Express {
      interface Request {
        usuario?: any;  // uid será de tipo string o undefined
      }
    }
}

export const validarjwtinRoutes = async(req:Request,resp:Response,next:NextFunction) =>{

    const token = req.header('token');
    if(!token){
        return resp.status(401).json({
            status:false,
            message:'No existe el token en la petición'
        })
    }
    
    try {
        const { uid } = jwt.verify(token,`${process.env.SECRETKEY}`) as CustomJwtPayload

        //validar el usuario que corresponde con el uid
        const usuario = await usuarioModel.findById(uid);

        if(!usuario){
            return resp.status(401).json({
                status:false,
                message:"El usuario no existe"
            })
        }
        // verificar el status en true 
        if(!usuario?.status){
            return resp.status(401).json({
                status:false,
                message:"Token no valido - status en false"
            })
        }
        req.usuario = usuario;
        
        next()
    } catch (error) {
        console.log(error);
        resp.status(401).json({
            status:false,
            message:'Token no valido'
        })
    }
}