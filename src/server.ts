import express from 'express';
const app = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log('This server is running in the por 3000');
})