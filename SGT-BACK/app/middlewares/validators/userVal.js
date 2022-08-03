import { check } from "express-validator";
import { validateResult } from '../../helpers/handleValidator';
//customVals
import { confirmPass, findItem } from "./custom/userCustomValidations";

/**
 * Middleware login validator
 */
export const validLogin = [
    check("nickName")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:1,max:30})
        .withMessage('minimo 1 caracter'),
    check("password")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
    (req, res, next) => validateResult(req, res, next),
    
];

/**
 * Middleware validador de datos de usuario
 */
export const validCreateUser = [
    check("nickName")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
    check("name")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
    check("document")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:8})
        .withMessage('min 5 caracteres y max 8 ')
        .custom(value => findItem('document',value)),
    check("password")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
    check("rePassword")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres')
        .custom( (value, { req }) => confirmPass(value, req)),
    check("position")
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    check("entity")
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    (req, res, next) => validateResult(req, res, next),
    
];