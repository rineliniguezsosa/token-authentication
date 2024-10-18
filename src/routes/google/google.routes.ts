import { Router } from 'express';
import { googleLogin } from '../../controllers';
import { validateGooglelogin } from '../../validators';

export const googleRouter = Router();

googleRouter.post('/google',validateGooglelogin,googleLogin)