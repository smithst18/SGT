import  { userModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"
import { encrypt, compare } from "../helpers/handlePassword";
import { signToken, verifyToken } from "../helpers/handleJWT";


/**
 * controlador encargado de crear sesions POST
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req,res) =>{
  
  try{
    const cleanBody = matchedData(req);

    const headerAuth = req.headers.authorization;
    
    const user = await userModel.findOne({ userName: cleanBody.userName})
    .select('sub userName name rol position department password');
    if(!user) handleError(res,403,'No Existe el Usuario');
    
    const math = await compare(cleanBody.password, user.password);
    if(!math) handleError(res,401,'Contrase;a incorrecta');
    
    //send token 
    
    if(!headerAuth) res.status(200).send({ token: signToken(user) });
    else {
      //send payload
      const auth = verifyToken(headerAuth.split(' ').pop().trim());
      auth ? res.status(200).send({ user: auth }) : handleError(res,403,'Invalid_Token');
      
    }

  }catch(e){

    console.log(e)
    handleError(res,403,'Error_user_login');
    
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
  const hashPass = await encrypt(cleanBody.password);
  
  const data  = {
    ...cleanBody,
    password: hashPass,
  }

  try{
    const savedUser = await userModel.create(data);
    //se aplica para metodos que no permiten filtrado (Create)
    savedUser.set('password',undefined,{strict:false});

    res.status(200).send({message:'Usuario guardado correctamente',user:savedUser});

  }catch(e){
    console.log(e);
    handleError(res,403,'Error_user_register');
  }

};
