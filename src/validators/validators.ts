import { body,param } from 'express-validator';
import { validaterrors } from '../middlewares';
import { existRol,existEmail,existusuariobyid } from '../helpers';

export const validateUser = [
    body('nombre','').trim().not().isEmpty(),
    body('password').trim().isLength({min:6}).not().isEmpty(),
    body('correo').trim().isEmail().withMessage('El campo correo debe de estar en el formato email').custom(existEmail),
    // body('rol').isIn(['ADMIN-ROLE','USER_ROLE']),
    body('rol').custom(existRol),
    validaterrors
]

export const validateUpdateuser = [
    param('id','No es un id valido de mongo').isMongoId().custom(existusuariobyid),
    body('rol').custom(existRol),
    validaterrors
]

export const deleteuser = [
    param('id','No es un id valido de mongo').isMongoId().custom(existusuariobyid)
]