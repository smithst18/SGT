import  {  }  from "../models";
// import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"; 
import moment from 'moment';
/**
 *  
 * @param {*} req 
 * @param {*} res 
 * @returns
 */
export const general = async (req, res) =>{

  try{
    // const cleanBody = matchedData(req);
    return res.sendStatus(200);
  }catch(e){
      console.log(e)
      return handleError(res,500,`ERROR : ${e}`);
  }
}