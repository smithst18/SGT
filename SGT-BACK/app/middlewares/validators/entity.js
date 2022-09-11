import { check } from "express-validator";
import { validateResult } from '../../helpers/handleValidator';

//customVals


/**
 * Middleware save entity  validator
 */
export const validEntity = [
    check("name")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:10})
        .withMessage('minimo 2 caracteres y maximo 10'),
    (req, res, next) => validateResult(req, res, next),
    
];