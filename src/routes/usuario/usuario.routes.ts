import { Router } from 'express';
import { postuser,getuser } from '../../controllers';
import { validateUser } from '../../validators';

export const usuarioRouter = Router();

usuarioRouter.post('/post',validateUser,postuser)
usuarioRouter.get('/get',getuser)