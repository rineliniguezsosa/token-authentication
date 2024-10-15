import { Request,Response } from 'express';
import { usuarioModel } from '../../models';
import bcrypt from 'bcrypt';
import { generarJWT } from '../../helpers';

export const Login = async(req:Request,resp:Response) =>{
    const { correo,password } = req.body;
    try {
        //verifica si el email existe
        const existUsuario = await usuarioModel.findOne({correo})
        if(!existUsuario){
            return resp.status(400).json({
                status:false,
                message:"Usuario / Password no son correctos"
            })
        }
        //si el usuario esta activo
        if(!existUsuario.status){
            return resp.status(400).json({
                status:false,
                message:"Usuario / Password no son correctos - status:false"
            })
        }
        //verificar el password
        const verifypassword = bcrypt.compareSync(password,existUsuario.password);
        if(!verifypassword){
            return resp.status(400).json({
                status:false,
                message:"El Password no es correcto"
            })
        }
        //generar el JWT
        const token = await generarJWT(existUsuario.id)

        resp.json({
            existUsuario,
            token
        })
    } catch (error) {
        console.log(error);
        return resp.json({
            status:false,
            message:'Algo salio mal, volver a intentar'
        })
        
    }
}