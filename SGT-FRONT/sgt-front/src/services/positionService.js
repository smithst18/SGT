import { api } from "@/api/api.js";

export const getPositionsByEntity = async (id) => {
  
  try{
    const { data }  = await api.get('position/get-positions',{ 
      params: {
        id,
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