import { User } from "../../../models/user";
/**
 * permite det si un user ya esta registrado
 * @param {*} search campo a buscar en el modelo
 * @param {*} value   valor del campo de busqueda
 * @returns 
 */
export const findItem = async (search,value) =>{
    
    return User.findOne({[search]:value}).then(user => {
        if (user) {
          return Promise.reject('Usuario ya registrado');
        }
    });
}
/**
 * permite verificar si 2 contrase;as coinciden
 * @param {*} value 
 * @param {*} req 
 * @returns 
 */
export const confirmPass = async (value, req) =>{

  if(value != req.body.password)  throw new Error('Las contrase;as no coinciden');
  else return true;
}