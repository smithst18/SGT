// handdle de errores evita repeticion de logica
/**
 * pasar 3 parametros con las htt.response el codigo y el mensaje de error
 * @param {*} res 
 * @param {*} code 
 * @param {*} message 
 */
export const handleError = (res, code = 403, message = "an error has ocurred") =>{
    res.status(code).send({
        code,
        message
    });
}