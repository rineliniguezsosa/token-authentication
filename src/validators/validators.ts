import { body } from 'express-validator';
import { validaterrors } from '../middlewares';

export const validateUser = [
    body('nombre','').trim().not().isEmpty(),
    body('password').trim().isLength({min:6}),
    body('correo').trim().isEmail().withMessage('El campo correo debe de estar en el formato email'),
    body('rol').isIn(['ADMIN-ROLE','USER_ROLE']),
    validaterrors
]