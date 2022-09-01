import  { ticketModel, userModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"; 

/**
 *  
 * @param {*} req 
 * @param {*} res 
 * @returns tikcet guardado con exito + mensaje de succes
 * IMPORTANTE * SE DEBE VALIDAR QUE EXISTE EL USUARIO QUE GUARDA EL TICKET (POR HACER)
 */
export const save = async (req, res) =>{

    try{
        //validar la data
        const cleanBody = matchedData(req);
        //validar que no haya mas de 3 a nombre del usuario
        const tickets = await ticketModel.find({sendBy:cleanBody.sendBy,status:'pending'});
        if(tickets.length >= 3) return handleError(res,403,"numero maximo de soportes  permitidos alcansado (3)");
        //crear ticket
        const ticketSaved = await ticketModel.create(cleanBody);
        if(!ticketSaved) return handleError(res,403,"ERROR_SAVIND_TICKET");
        
        //enviar respuesta 
        return res.status(200).send({ message:"Ticket Guardado Correctamente", data:ticketSaved });

    }catch(e){
        console.log(e)
        return handleError(res,401,`ERROR_INVALID_DATA : ${e}`);
    }
}
/**
 *  
 * @param {*} req 
 * @param {*} res 
 * @returns lista de tikcets pendientes
 */
export const getPendingTickets = async (req, res) =>{

    try{
        //get all the ticket 
        //populate the user who made the ticket and his information
        const tickets = await ticketModel.find({status:'pending'})
        .select('-takeBy') // <= parent
        .populate({
            path:'sendBy',   //< = son // parent 2
            select:'nickName',
        });
        return res.status(200).send({data: tickets}); 
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_GETTING_TICKETS, ${e}`);
    }
}

/**
 *  
 * @param {*} req (recibe un id de usuario y un id de ticket para tomar el ticket)
 * @param {*} res 
 * @returns lista de tikcets pendientes
 */

export const takeTicket = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { userId, ticketId } = cleanBody;

        const [user, ticket, available] = await Promise.all([
            await userModel.findById(userId),
            await ticketModel.findById(ticketId),
            await ticketModel.findOne({takeBy:userId, status:'in-process'})
        ]);

        if(user && ticket && !available){
            //cambiamos el status de la instancia de ticket que previmente se obtuvo
            ticket.status = 'in-process';
            ticket.takeBy = userId;
            try{
                const ticketSaved = await ticket.save();
                return res.status(200).send({ msg:'Ticket Tomado', data: ticketSaved }); 
            }catch(e){
                return handleError(res,403,`ERROR_SAVING_TICKET_STATUS, ${e}`);
            }

        }else if(available) return handleError(res,403,`Ticket en cola  maximo (1)`);

        else return handleError(res,403,`ERROR_INVALID_DATA`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_TAKING_TICKET, ${e}`);
    }
}

/**
 *  
 * @param {*} req (recibe un id de usuario )
 * @param {*} res 
 * @returns Devuelve un ticket tomado por el tecnico y que esta en proceso
 */
export const getCurrentTicket = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { userId } = cleanBody;

        const current = await ticketModel.findOne({ takeBy:userId, status:'in-process' })
        .select('-takeBy -updatedAt')
        .populate({
            path:'sendBy',   //< = son // parent 2
            select:'nickName',
        });
        
        if(current) return res.status(200).send({ message:"Current Ticket", data:current });

        else return handleError(res,403,`ERROR_GETTING_CURRENT_TICKET`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_GETTING_CURRENT_TICKET, ${e}`);
    }
}


/**
 * 
 * @param {*} req (recibe un id de ticket )
 * @param {*} res 
 * @returns cierra un ticket despues de haber sido culminado /close-ticket
 */

export const closeTicket = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { ticketId } = cleanBody;

        res.sendStatus(200);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_TAKING_TICKET, ${e}`);
    }
}

/**
 * 
 * @param {*} req (recibe un id de usuario )
 * @param {*} res 
 * @returns retorna una lista de tickets que han sido culminados por un usuario
 */

export const closedTicketsByTech = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { userId } = cleanBody;

        const closedTickets = await ticketModel.find({ takeBy:userId, status:'closed' })
        .select('-takeBy -updatedAt')
        .populate({
            path:'sendBy',   //< = son // parent 2
            select:'nickName',
        });

        if(closeTicket.length >= 1) return res.status(200).send({ message:"Ticket Cerrados", data:closedTickets });
        else return handleError(res,404,`ERROR_NO_ENCONTRADO `);

    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_TAKING_TICKET, ${e}`);
    }
}