import  { surveyModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

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

export const findOne = async(req,res) =>{
    
}

export const findBy = async (req,res) =>{

}
export const findAll =  async (req,res) =>{

}