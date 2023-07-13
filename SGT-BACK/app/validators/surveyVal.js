import { check } from "express-validator";
import { validateResult } from '../helpers/handleValidator';

//customVals

/**
 * Middleware save survay validator
 */
export const validSurvey = [

    check("pre1")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:1,max:4})
        .withMessage('minimo 2 caracteres max 4'),
    check("pre2")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:1,max:20})
        .withMessage('minimo 2 caracteres max 4'),
    check("pre3")
        .exists()
        .withMessage('debe existir'),
    check("client")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un MongoID'),
    (req, res, next) => validateResult(req, res, next),
    
];

export const validSurveyId = [

    check("userId")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un MongoID'),
    (req, res, next) => validateResult(req, res, next),
    
];