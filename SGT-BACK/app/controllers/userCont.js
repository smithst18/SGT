import  { userSchema }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"
import { encrypt, compare } from "../helpers/handlePassword";
import { signToken } from "../services/jwt";


/**
 * controlador encargado de crear sesions POST
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req,res) =>{
  
  try{
    const cleanBody = matchedData(req);

    const user = await userSchema.findOne({ userName: cleanBody.userName})
      .select('password');
    if(!user) handleError(res,403,'Contrase;a o usuario incorrecto');

    const math = await compare(cleanBody.password, user.password);
    if(!math) handleError(res,401,'Contrase;a incorrecta');

    res.status(200).send({
      token: signToken(user),
      user:user
    });

  }catch(e){
    console.log(e)
    handleError(res,403,'Error_user_login');
  }

};


/**
 * controlador encargado de cerrar sesions GET
 * @param {*} req 
 * @param {*} res 
 */
export const logout = async (req,res) =>{

  try{
    res.status(200).send('Sesion cerrada');
  }catch(e){
    handleError(res,403,'Error_user_logout');
  }

};


/**
 * controlador encargado de guardar usuario en db POST
 * @param {*} req 
 * @param {*} res 
 */
export const saveUser = async (req,res) =>{
  //clean the body peticion
  const cleanBody = matchedData(req);
  //creamos una copia del objeto y agregamos 2 campos
  const data  = {
    ...cleanBody,
    rol: 'user',
    password: encrypt(cleanBody.password),
  }

  try{
    const savedUser = await userSchema.create(data);
    //se aplica para metodos que no permiten filtrado (Create)
    savedUser.set('password',undefined,{strict:false});

    res.status(200).send({message:'Usuario guardado correctamente',user:savedUser});

  }catch(e){
    handleError(res,403,'Error_user_register');
  }

};
