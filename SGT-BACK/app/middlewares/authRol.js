import { handleError } from "../helpers/handleHttpErrors";
/**
 * receives an array with the allowed roles this function need the authjwt middleware
 * @param {*} rol 
 * @returns 
 */
export const authRol = (rols) => (req,res,next) =>{
    try{
        const { user } = req;
        next();
    }catch(e){
        console.log(e)
        return handleError(res,403,'Access denied not permission allow');
    }
} 