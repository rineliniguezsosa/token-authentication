import {Request,Response,NextFunction} from 'express';

export const isAdminrol = async(req:Request,resp:Response,next:NextFunction) =>{
    if(!req.usuario){
        return resp.status(500).json({
            status:false,
            message:'Se quiere verificar el rol sin validar el token primero'
        })
    }
    const {rol,nombre} = req.usuario;
    if(rol != 'ADMIN_ROLE'){
        return resp.status(401).json({
            status:false,
            message:`El usuario con el nombre ${nombre} no es administrador - sin permisos`
        })
    }

    next()
}

export const tieneRol = async(...roles:string[]) =>{
    return (req:Request,resp:Response,next:NextFunction) =>{
        if(!req.usuario){
            return resp.status(500).json({
                status:false,
                message:'Se quiere verificar el rol sin validar el token primero'
            })
        }

        if (!roles.includes(req.usuario.rol)) {
            return resp.status(500).json({
                status:false,
                message:`El servicio requiere uno de estos roles ${roles}`
            })
        }

        next();
    }
}