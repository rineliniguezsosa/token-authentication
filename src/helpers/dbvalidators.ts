import { rolModel,usuarioModel } from "../models";

export const existRol = async(rol = '') =>{
    const existeRol = await rolModel.findOne({rol});

    if(!existeRol){
        throw new Error(`Este ${rol} no existe en la base de datos`);
    }
}

export const existEmail = async(correo = '') =>{
    //verify the email
    const existEmail = await usuarioModel.findOne({correo});
    if(existEmail){
        throw new Error(`El usuario con el ${correo} ya existe`)
    }
}

export const existusuariobyid = async(id = '') =>{
    const existusuario = await usuarioModel.findById({id});
    if(!existusuario){
        throw new Error(`El usuario con el ${id} no existe`)
    }
}