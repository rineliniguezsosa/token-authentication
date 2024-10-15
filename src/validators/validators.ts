import { body } from 'express-validator';

export const validateUser = [
    body('correo').isEmail().withMessage('El campo correo debe de estar en el formato email'),
]