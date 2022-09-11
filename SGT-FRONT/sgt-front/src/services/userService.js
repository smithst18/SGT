import { api } from "@/api/api.js";

export const signIn = async (form) => {
  
  try{
    const { data }  = await api.post('user/register',form);

    return { status:true, data };

  }catch(err){

    const { response:{ data:{ errors } } } = err;
    console.log(errors)
    if(errors) return { status:false, errors };
    ;
    
    throw new Error(err);
  }
}

export const userLogin = async (form) => {
  
  try{
    const { data } = await api.post('user/login',form);

    return { status:true, data };

  }catch(err){

    if(err.response){

      const { response:{ data } } = err;
  
      if(data) return { status:false, data };
      
      throw new Error(err);

    }else return { status:false, data: err }
  }
}