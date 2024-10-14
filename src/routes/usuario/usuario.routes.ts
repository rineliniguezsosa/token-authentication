import { Router } from 'express';
import { postuser } from '../../controllers';

export const usuarioRouter = Router();

usuarioRouter.post('/post',postuser)