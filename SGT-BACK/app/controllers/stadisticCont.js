import  { ticketModel }  from "../models";
// import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"; 
import { countItems } from "../helpers/CountItems";

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
    .populate({ 
      path:'takeBy', 
      select:'name',
    })
    .populate({ 
      path:'sendBy', 
      select:'name',
      populate:{
        path:'entity',
        select:'name'
      }
    });
    
    if(tickets.length >= 1){
      // sacar los elemento de interes
      const ticketsPerTech = countItems( tickets.map( elm => elm.takeBy.name ) );
      //reducir el arreglo a un objeto + su cuenta por elemento
      
      //sacar el porcentaje 
      const techPersent = Object.entries(ticketsPerTech).map( 
        elm => [elm[0], elm[1] = elm[1] * 100 /tickets.length ]
      );

      const ticketsPerEntity = countItems( tickets.map( elem => elem.sendBy.entity.name ) );
      
      return res.status(200).send({msg:'stadisticas generales', data : {
        techPersent,
        ticketsPerEntity
      }});
    }else return handleError(res,404,`TICKETS NO ENCONTRADOS`);
  }catch(e){
      console.log(e)
      return handleError(res,500,`ERROR : ${e}`);
  }
}