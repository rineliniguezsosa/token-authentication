import { Request,Response } from 'express';
import { googleverify } from '../../helpers';

export const googleLogin = async(req:Request,resp:Response) =>{
    const { id_token } = req.body;
    
    try {    
        const google = await googleverify(id_token);
        console.log("google data: ",google);
        
        resp.json({
            status:true,
            message:id_token
        })
    } catch (error) {
        console.log(error);
        resp.status(400).json({
            status:false,
            message:'El token no se pudo verificar'
        })
        
    }
}