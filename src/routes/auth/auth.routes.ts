import { Router } from 'express';
import { Login } from '../../controllers';

export const authRouter = Router();

authRouter.post('/login',Login)