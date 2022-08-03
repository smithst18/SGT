import  { ticketModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"; 

export const save = async (req, res) =>{

    try{
        //validar la data
        const cleanBody = matchedData(req);
        //validar que no haya mas de 3 a nombre del usuario
        const tickets = await ticketModel.find({sendBy:cleanBody.sendBy});
        if(tickets.length >= 3) return handleError(res,403,"numero maximo de soportes  permitidos alcansado");
        //crear ticket
        const ticketSaved = await ticketModel.create(cleanBody);
        if(!ticketSaved) return handleError(res,403,"ERROR_SAVIND_TICKET");
        
        //enviar respuesta 
        return res.status(200).send({ message:"Ticket Guardado Correctamente", ticketSaved });

    }catch(e){
        console.log(e)
        return handleError(res,401,"ERROR_INVALID_DATA");
    }
}

export const getTickets = async (req, res) =>{

    try{
        //get all the ticket 
        //populate the user who made the ticket and his information
        const tickets = await ticketModel.find({sendBy:'62e3df961db2354847e3263c'}) // <= parent
        .populate({
            path:'sendBy',   //<= son // parent 2
            select:'nickName',
            populate:{              // <= 2 son
                path:'entity'
            }
        });
        return res.status(200).send({ticket: tickets}); 
    }catch(e){
        console.log(e)
        return handleError(res,403,"ERROR_GETTING_TICKETS");
    }
}