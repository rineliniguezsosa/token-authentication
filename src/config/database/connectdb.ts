import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const connectdb = async() =>{
    try {
        await connect(`${process.env.MONGODBCNN}`)
        console.log("Conectado a la base de datos");
        
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar con la base de datos")
    }
}