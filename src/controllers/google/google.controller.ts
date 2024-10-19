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
        throw new Error('Algo ha salido mal')
        
    }
}