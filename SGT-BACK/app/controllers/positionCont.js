import  { entityModel }  from "../models";
import { positionModel } from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

/**
 * endopoint to save and user position at once entity
 * @param {*} req 
 * @param {*} res 
 */
export const savePosition = async (req, res) =>{
    try{
        const cleanBody = matchedData(req);
        //entity id
        const { entity } = cleanBody;

        //entity exist 
        const entityMatch = await entityModel.findById(entity);
        if(!entityMatch) return handleError(res,404,'Entity_Not_Exist');

        const savedPosition = await positionModel.create(cleanBody);

        if(!savedPosition) return handleError(res,500,"Server_Error");
        else return res.status(200).send({
            message:'Position saved',
            data:savedPosition
        });


    }catch(e){
        console.log(e);
        return handleError(res,403,"Error_saving_position");
    }
} 

/**
 * Este endpoint a futuro debe retornar las posiciones en base a una entidad dada de momento retornara las 3 posiciones comunes
 * @param {*} req 
 * @param {*} res 
 */

 export const getPositions = async (req, res) =>{
    try{
        const cleanBody = matchedData(req);

        const { id } = cleanBody;

        const positions = await positionModel.find({ entity:id }).select(["id", "name", "type", "createdAt", "updatedAt"]);
        
        if(positions.length >= 1) return res.status(200).send({message:"Cargos Encontrados", data:positions});
        
        else return handleError(res,404,`No se Encontraron posiciones para esta entidad`);
    }catch(e){
        console.log(e);
        return handleError(res,403,`Error_Getting_Positions ${e}`);
    }
} 