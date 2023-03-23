import  { ticketModel, userModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"; 
import moment from 'moment';
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
        const tickets = await ticketModel.find({
            sendBy:cleanBody.sendBy,
            status : { $in: ['in-process','pending'] } 
        });

        if(tickets.length >= 3) return handleError(res,403,"numero maximo de solicitudes  permitidas alcansadas (3)");
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
        //populate the user who made the ticket and its information
        const tickets = await ticketModel.find({status:'pending'})
        .select('-takeBy') // <= parent
        .populate({
            path:'sendBy',   //< = son // parent 2
            select:'name',
            populate: { 
                path: 'entity',
                select:'name' 
            }
        });
        if(tickets.length >= 1)return res.status(200).send({data: tickets}); 
        else handleError(res,404,`ERROR_TICKETS_NOT_FOUND`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_GETTING_TICKETS, ${e}`);
    }
}


/**
 *  
 * @param {*} req 
 * @param {*} res 
 * @returns lista de tikcets pendientes por id de user 
 */
export const getPendingTicketsById = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { userId } = cleanBody;

        const tickets = await ticketModel.find({ sendBy: userId, status:{ $ne:'closed'} })
        .select('-takeBy -sendBy');

        if(tickets.length >= 1)return res.status(200).send({data: tickets});
        else return handleError(res,404,"ANY TICKET FOUND");

    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_GETTING_TICKETS, ${e}`);
    }
}

/**
 *  
 * @param {*} req 
 * @param {*} res 
 * @returns lista de tikcets aceptados por id de tecnico 
 */
export const getAceptedTicketsByTech = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { userId } = cleanBody;

        const tickets = await ticketModel.find({ takeBy: userId, status:'in-process' })
        .select('-takeBy') // <= parent
        .populate({
            path:'sendBy',   //< = son // parent 2
            select:'name',
            populate: { 
                path: 'entity',
                select:'name' 
            }
        });

        if(tickets.length >= 1)return res.status(200).send({data: tickets});
        else return handleError(res,404,"ANY TICKET FOUND");

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
            /*await ticketModel.findOne({takeBy:userId, status:'in-process'})*/
        ]);

        if(user && ticket /*&& !available*/){
            //cambiamos el status de la instancia de ticket que previmente se obtuvo
            ticket.status = 'in-process';
            ticket.takeBy = userId;
            try{
                const ticketSaved = await ticket.save();
                return res.status(200).send({ msg:'Ticket Tomado', data: ticketSaved }); 
            }catch(e){
                return handleError(res,403,`ERROR_SAVING_TICKET_STATUS, ${e}`);
            }

        }//else if(available) return handleError(res,403,`Ticket en cola  maximo (1)`);
        else return handleError(res,404,`ITEMS_NOT_FOUND`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_TAKING_TICKET, ${e}`);
    }
}

/**
 *  
 * @param {*} req (recibe un id dede ticket para devolver el ticket apendientes)
 * @param {*} res 
 * @returns lista de tikcets pendientes
 */

export const returnTicket = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { ticketId } = cleanBody;

        const ticketToRtrn = await ticketModel.findById(ticketId);
            

        if(ticketToRtrn){
            //cambiamos el status de la instancia de ticket que previmente se obtuvo
            ticketToRtrn.status = 'pending';

            try{
                const ticketSaved = await ticketToRtrn.save();
                return res.status(200).send({ msg:'Ticket Retornado', data: ticketSaved }); 
            }catch(e){
                return handleError(res,403,`ERROR_SAVING_TICKET_STATUS, ${e}`);
            }

        } return handleError(res,404,`TICKET_NOT_FOUND`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_RETURNING_TICKET, ${e}`);
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
            populate: { 
                path: 'entity',
                select:'name' 
            }
        });

        if(current) return res.status(200).send({ message:"Current Ticket", data :
            {
            _id:current._id,
            item:current.item,
            type:current.type,
            status:current.status,
            sendBy:current.sendBy.nickName,
            entity:current.sendBy.entity.name,
            createdAt: moment(current.createdAt).format("Y-MM-D")
            }
        });

        else return handleError(res,404,`ERROR_CURRENT_TICKET_NOTFOUND`);
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

        const filter = { _id : ticketId, status:'in-process' };
        const update = { status:'closed'} ;        
        const options = { returnDocument : 'after' };
        const updated = await ticketModel.findOneAndUpdate(filter,update,options);

        if(updated) return res.status(200).send({ msg:'ticket Cerrado',data:updated});

        else return handleError(res,403,`ticket debe estar en curso`);
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

/**
 * 
 * @param {*} req (recibe un id de usuario )
 * @param {*} res 
 * @returns elimina un ticket en base a un id
 */

export const deleteTicket = async (req, res) =>{

    try{
        const cleanBody = matchedData(req);
        const { ticketId } = cleanBody;
        
        const deleted = await ticketModel.findByIdAndDelete(ticketId);
        
        if(deleted) return res.status(200).send({msg:'deleted',data:deleted});
        else return handleError(res,404,`ERROR_DELETING_TICKET, NOT FOUND`);
    }catch(e){
        console.log(e)
        return handleError(res,403,`ERROR_DELETING_TICKET, ${e}`);
    }
}


