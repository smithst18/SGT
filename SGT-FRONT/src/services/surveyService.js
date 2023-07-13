import { api } from "@/api/api.js";

export const saveSurvey = async (form) => {
  
    try{
        const data   = await api.post('survey/save',form);

        return data;
  
    }catch(err){
      console.log(err);
      if(err.response){
  
        const { response:{ data:{ errors } } } = err;
  
        if(errors) return { status:false, errors };
        else if(err.response.data) return { status:false, data:err.response.data };
        throw new Error(err);
  
      }else return { status:false, data:err };
    }
}

export const checkSurvey = async (userId) => {
  
  try{
      const data = await api.get('survey/getOne',{
        params: {
          userId,
        }
      });

      return data;

  }catch(err){
    console.log(err);
    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}

export const getAllSurveys = async () => {
  
  try{
      const data = await api.get('survey/getAll');

      return data.data;

  }catch(err){
    console.log(err);
    if(err.response){

      const { response:{ data:{ errors } } } = err;

      if(errors) return { status:false, errors };
      else if(err.response.data) return { status:false, data:err.response.data };
      throw new Error(err);

    }else return { status:false, data:err };
  }
}