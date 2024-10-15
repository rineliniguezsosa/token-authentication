import { Router } from 'express';
import { postuser,getuser, updateUser, getUsuarios, deleteuser } from '../../controllers';
import { validateUser } from '../../validators';

export const usuarioRouter = Router();

usuarioRouter.post('/post',validateUser,postuser)
usuarioRouter.put('/:id',updateUser)
usuarioRouter.get('/get',getuser)
usuarioRouter.get('/all',getUsuarios)
usuarioRouter.delete('/:id',deleteuser)