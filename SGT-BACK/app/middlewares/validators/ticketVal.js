import { check } from "express-validator";
import { validateResult } from '../../helpers/handleValidator';

//customVals

/**
 * Middleware login validator
 */
export const validTicket = [
    check("item")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un string')
        .isLength({min:2,max:30})
        .withMessage('minimo 2 caracteres max 30'),
    check("description")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('tipo de dato string')
        .isLength({min:10,max:300})
        .withMessage('minimo 10 caracteres max 300'),
    check("type")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isString()
        .withMessage('debe ser un String'),
    check("sendBy")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un String'),
    (req, res, next) => validateResult(req, res, next),
];

export const validTakeTicket = [
    check("userId")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un MongoID'),
    check("ticketId")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un MongoID'),
    (req, res, next) => validateResult(req, res, next),
];

export const validTicketId = [
    check("ticketId")
        .exists()
        .withMessage('debe existir')
        .trim()
        .notEmpty()
        .withMessage('No debe estar vacio')
        .isMongoId()
        .withMessage('debe ser un MongoID'),
    (req, res, next) => validateResult(req, res, next),
];
