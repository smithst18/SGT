import  { surveyModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

/**
 *  
 * @param {pre1 pre2 pre3  userId} req 
 * @param {*} res 
 * @returns tikcet guardado con exito + mensaje de succes
 * IMPORTANTE * SE DEBE VALIDAR QUE EXISTE EL USUARIO QUE GUARDA EL TICKET (POR HACER)
 */
export const save = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        
        //si no existe la data return error
        if(!cleanBody) return handleError(res,400,"Datos Invalidos");
        
        //verificar si la encuesta se ha respondido anteriormente
        const surveys = await surveyModel.find({client:cleanBody.client});
        if(surveys.length >= 1) return handleError(res,400,"Encuesta Respondida anteriormente");
        
        //guardar en caso contrario a la negativa de arriba
        const savedSurvey = await surveyModel.create(cleanBody);
        return res.status(200).send({ msg:'Guardado Correctamente', savedSurvey });   
    
    }catch(e){
        console.log(e);
        return handleError(res,500,`ERROR : ${e}`);
    }
}

/**
 *  
 * @param { userId } req   
 * @param {*} res 
 * @returns survey encontrado retorna un bool
 * 
 */

export const findOne = async(req,res) =>{
    try{
        /* se espera como parametros id*/
        const cleanBody = matchedData(req);
        
        if(cleanBody){
            const foundSurvey = await surveyModel.findOne({client:cleanBody.userId});
            
            //si no se encuentra se hace la encuesta en caso contrario no se hace 
            if(!foundSurvey) handleError(res,404,"Encuesta no encontrada");
            //si se encuentra se retorna la encuesta
            else return res.status(200).send({foundSurvey});
            
        }else return handleError(res,400,"error en la data");

    }catch(e){
        console.log(e);
        return handleError(res,500,`ERROR : ${e}`);
    }
}

export const findAll =  async (req,res) =>{
    try{
        const surveys = await surveyModel.find()
            .select("_id pre1 pre2 pre3 client")
            .populate({
                path:'client',
                select:'name document'
            });

        if(surveys.length >= 1) return res.status(200).send({surveys});
        else return handleError(res,404,"Encuestas no encontradas");
        
    }catch(e){
        console.log(e);
        return handleError(res,500,`ERROR : ${e}`);
    }
}


// export const findBy = async (req,res) =>{

// }