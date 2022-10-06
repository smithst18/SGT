import { handleError } from "../helpers/handleHttpErrors";
import { verifyToken } from "../helpers/handleJWT";

/**
 * middleware de verificacion de sesion activa
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const sesionAuth = (req,res,next) =>{
    try{
        const headerAuth = req.headers.authorization;

        if(!headerAuth) return handleError(res,401,'header is missing');

        const authenticated = verifyToken(headerAuth.split(' ').pop().trim()) 
        
        if(authenticated){
            req.user = authenticated;
            next()
        }
        else handleError(res,419,'Invalidad_Token');

    }catch(e){
        console.error(e);
        handleError(res,403,'Sesion_Auth_Error');
    }
}