import  { entityModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

export const saveEntity = async (req,res) =>{

    try{
        const cleanBody = matchedData(req);
        
        const savedEntity = await entityModel.create(cleanBody);

        if(!savedEntity) return handleError(res,500,'Server_Error');

        else return res.status(200).send({ saved:savedEntity });

    }catch(e){
        console.log(e)
        return handleError(res,403,'Error_saving_entity');
    }
}                                                                         