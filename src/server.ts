import express from 'express';
import { usuarioRouter } from './routes';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api')
app.use('/usuario',usuarioRouter)

app.listen(3000,()=>{
    console.log('This server is running in the por 3000');
})