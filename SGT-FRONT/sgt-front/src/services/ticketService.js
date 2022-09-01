import { api } from "@/api/api.js";

export const saveTicket = async (form) => {
  
  try{
    const { data }  = await api.post('ticket/save-ticket',form);

    return { status:true, data };

  }catch(err){

    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}

export const PendingTickets = async () => {
  
  try{
    const { data }  = await api.get('ticket/pending-tickets');
    return { status:true, data };

  }catch(err){

    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}

export const takeTicket = async (userId,ticketId) => {
  
  try{
    const { data }  = await api.get('ticket/take-pending',{
      params:{
        userId,
        ticketId,
      }
    });
    return { status:true, data };

  }catch(err){

    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}

export const closedTickets = async (userId) => {
  
  try{
    const { data }  = await api.get('ticket/closed-tickets-by-tech',{
      params:{
        userId,
      }
    });
    return { status:true, data };

  }catch(err){

    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}