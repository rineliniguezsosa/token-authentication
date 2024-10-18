import { Router } from 'express';
import { googleLogin } from '../../controllers';

export const googleRouter = Router();

googleRouter.post('/google',googleLogin)