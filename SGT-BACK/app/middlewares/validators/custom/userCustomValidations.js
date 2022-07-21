import { User } from "../../../models/user";
/**
 * permite encontrar un item y validarlo
 * @param {*} search 
 * @param {*} value 
 * @returns 
 */
export const findUser = async (search,value) =>{
    
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