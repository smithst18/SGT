import { api } from "@/api/api.js";

export const signIn = async (Form) => {
  
  try{
    const { data }  = await api.post('user/register',Form);

    return { status:true, data };

  }catch(err){

    const { response:{ data:{ errors } } } = err;
    console.log(errors)
    if(errors) return { status:false, errors };
    ;
    
    throw new Error(err)
  }
}