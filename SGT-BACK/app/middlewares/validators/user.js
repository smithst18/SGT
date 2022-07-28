import { check } from "express-validator";
import { validateResult } from '../../helpers/handleValidator';
//customVals
import { confirmPass, findUser } from "./custom/userCustomValidations";

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
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
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
        .custom(value => findUser('document',value)),
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
    check("type")
        .exists()
        .notEmpty()
        .isString(),
    check("position")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:15})
        .withMessage('minimo 5 caracteres'),
    check("entity")
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    (req, res, next) => validateResult(req, res, next),
    
];