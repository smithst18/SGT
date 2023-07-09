import  { surveyModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

export const save = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        console.log(cleanBody);
        res.status(200).send({hola:'hola'});
    }catch(e){
        console.log(e);
        return handleError(res,500,`ERROR : ${e}`);
    }
  }