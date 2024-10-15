import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export const generarJWT = async(uid: string  = '') =>{
    return new Promise((resolve,reject)=>{
        const payload = {uid};

        jwt.sign(payload,`${process.env.SECRETKEY}`,{expiresIn:'4h'},(error,token)=>{
            if (error) {
                console.log(error);
                reject('No se puedo generar el token')
            }else{
                resolve(token)
            }
        })
    })
}