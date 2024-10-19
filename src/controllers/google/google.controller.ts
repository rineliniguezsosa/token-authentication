import { Request,Response } from 'express';
import { generarJWT, googleverify } from '../../helpers';
import { usuarioModel } from '../../models';

interface GoogleTokenPayload {
    name: string;
    email: string;
    picture: string;
  }

export const googleLogin = async(req:Request,resp:Response) =>{
    const { id_token } = req.body;
    
    try {    
        const { name,email,picture} = await googleverify(id_token) as GoogleTokenPayload;

        let usuario = await usuarioModel.findOne({correo:email})

        if(!usuario){
            const data = {
                nombre:name,
                correo:email,
                password:':)',
                img:picture,
                rol: "USER_ROLE",
                google:true
            }

            usuario = new usuarioModel(data);

            await usuario.save()
        }

        //vericar el status del usuario

        if (!usuario.status) {
            resp.status(401).json({
                status:false,
                message:'Hable con el administrador'
            })
        }

        const token = await generarJWT(usuario.id);
        
        resp.json({
            usuario,
            token     
        })
    } catch (error) {
        console.log(error);
        resp.status(400).json({
            status:false,
            message:'El token no se pudo verificar'
        })
        
    }
}