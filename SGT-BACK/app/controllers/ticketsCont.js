import { ticketSchema } from '../models'; 

export const save = async (req, res) =>{

    ticketSchema.create({

    })
    res.sendStatus(200);
}