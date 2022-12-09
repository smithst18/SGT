import { check } from "express-validator";
import { validateResult } from '../helpers/handleValidator';

//customVals


/**
 * Middleware saveposition validator
 */
export const validPosition = [
    check("name")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:2,max:20})
        .withMessage('minimo 2 caracteres max 20'),
    check("type")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isNumeric()
        .withMessage('debe ser un numero')
        .isLength({min:1,max:1})
        .withMessage('minimo 5 caracteres'),
    check("entity")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un mongoid'),
    (req, res, next) => validateResult(req, res, next),
    
];

export const validId = [
    check("id")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un mongoid'),
    (req, res, next) => validateResult(req, res, next),
    
];