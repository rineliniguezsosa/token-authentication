import { Router } from 'express';
import { postuser,getuser } from '../../controllers';

export const usuarioRouter = Router();

usuarioRouter.post('/post',postuser)
usuarioRouter.get('/get',getuser)