import { api } from "@/api/api.js";

export const getAllEntitys = async (form) => {
  
  try{
    const { data }  = await api.get('entity/get-all');
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