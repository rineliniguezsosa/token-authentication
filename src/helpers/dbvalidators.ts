import { rolModel } from "../models";

export const existRol = async(rol = '') =>{
    const existeRol = await rolModel.findOne({rol});

    if(!existeRol){
        throw new Error(`Este ${rol} no existe en la base de datos`);
    }
}