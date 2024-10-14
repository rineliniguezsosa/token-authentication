import express from 'express';
import { usuarioRouter } from './routes';
import { connectdb } from './config';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/usuario',usuarioRouter)

connectdb();

app.listen(3000,()=>{
    console.log('This server is running in the por 3000');
})