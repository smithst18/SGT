import  { entityModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

export const saveEntity = async (req,res) =>{

    try{
        const cleanBody = matchedData(req);
        
        const savedEntity = await entityModel.create(cleanBody);
        //if error saving
        if(!savedEntity) return handleError(res,500,'Server_Error');
        //return saved data if saved
        else return res.status(200).send({ data:savedEntity });

    }catch(e){
        console.log(e)
        return handleError(res,403,'Error_saving_entity');
    }
}   

export const getAllEntitys = async (req,res) =>{

    try{
        const allEntitys = await entityModel.find().select(" _id name");

        if( !allEntitys.length >= 1 ) return handleError(res,403,"ANY_ENTITY_FOUND");
        else return res.status(200).send({ msg:'succes',data: allEntitys });

    }catch(e){
        console.log(e)
        return handleError(res,403,"Error_Getting_entitys");
    }
}