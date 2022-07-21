//retorna la logica de la validacion en los middlewares
import  { validationResult } from 'express-validator';

export const validateResult = (req, res, next) =>{
    try {
    validationResult(req).throw();
    
    // yay! we're good to start selling our skilled services :)))
    return next();
  } catch (err) {
    
    res.status(400).send({ errors: err.array() });
  }
}