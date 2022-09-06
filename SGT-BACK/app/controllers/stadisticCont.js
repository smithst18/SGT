import  { ticketModel }  from "../models";
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
    
    const tickets = await ticketModel.find({ status : 'closed' })
    .select('_id')
    .populate({ path:'takeBy', select:'name' });

    if(tickets.length > 1){

      const ticketsPerTech = tickets.map( ( elem ) => elem.takeBy.name);
      console.log(ticketsPerTech)
      const pru = ticketsPerTech.reduce ( ( acc, el) => 
        (acc [el] ? acc[el] += 1 : acc[el] = 1
        ,acc)
        ,{});
        console.log(pru)


      return res.status(200).send({msg:'stadisticas generales', data : ticketsPerTech});
    }else return handleError(res,404,`ERROR NO HAY TICKETS `);
  }catch(e){
      console.log(e)
      return handleError(res,500,`ERROR : ${e}`);
  }
}