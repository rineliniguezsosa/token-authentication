import express from 'express';
import { authRouter, usuarioRouter } from './routes';
import { connectdb } from './config';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/usuario',usuarioRouter)
app.use('/auth',authRouter)

connectdb();

app.listen(process.env.PORT,()=>{
    console.log(`his server is running in the por ${process.env.PORT}`);
})