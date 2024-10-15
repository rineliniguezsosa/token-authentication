import express from 'express';
import { authRouter, usuarioRouter } from './routes';
import { connectdb } from './config';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/usuario',usuarioRouter)
app.use('/auth',authRouter)

connectdb();

app.listen(3000,()=>{
    console.log('This server is running in the por 3000');
})