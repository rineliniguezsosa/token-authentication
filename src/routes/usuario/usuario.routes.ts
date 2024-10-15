import { Router } from 'express';
import { postuser,getuser, updateUser } from '../../controllers';
import { validateUser } from '../../validators';

export const usuarioRouter = Router();

usuarioRouter.post('/post',validateUser,postuser)
usuarioRouter.put('/:id',updateUser)
usuarioRouter.get('/get',getuser)