import { handleError } from "../helpers/handleHttpErrors";
/**
 * receives an array with the allowed roles this function need the authjwt middleware
 * @param {*} rol 
 * @returns 
 */
export const authRol = (rols) => (req,res,next) =>{
    try{
        const { user } = req;
        
    }catch(e){
        console.log(e)
        handleError(res,403,'AuthRol_ERROR');
    }
} 