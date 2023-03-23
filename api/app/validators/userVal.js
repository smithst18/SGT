import { check } from "express-validator";
import { validateResult } from '../helpers/handleValidator';
//customVals
import { confirmPass, findItem, validIMG } from "./custom/userCustomValidations";

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
        .isLength({min:1,max:20})
        .withMessage('minimo 1 caracteres'),
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
        .isLength({min:2,max:20})
        .withMessage('minimo 2 caracteres max 20')
        .custom(value => findItem('nickName',value)),
    check("name")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:2,max:50})
        .withMessage('minimo 2 caracteres'),
    check("document")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:10})
        .withMessage('min 5 caracteres y max 10 ')
        .custom(value => findItem('document',value)),
    check("password")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:20})
        .withMessage('minimo 5 caracteres max 20'),
    check("rePassword")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:5,max:20})
        .withMessage('minimo 5 caracteres max 20')
        .custom( (value, { req }) => confirmPass(value, req)),
    check("rol")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string'),
    check("position")
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    check("entity")
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    (req, res, next) => validateResult(req, res, next),
    
];

export const validUserId = [
    check("userId")
        .exists()
        .withMessage('debe existir')
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    (req, res, next) => validateResult(req, res, next),
];

export const validUpdate = [
    check("id")
        .exists()
        .withMessage('debe existir')
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('Debe ser mongoID'),
    check("nickName")
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:2,max:20})
        .withMessage('minimo 2 caracteres max 20'),
    (req, res, next) => validateResult(req, res, next),
];