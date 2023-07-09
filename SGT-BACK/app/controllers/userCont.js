import  { userModel, positionModel, entityModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors"
import { encrypt, compare } from "../helpers/handlePassword";
import { signToken, verifyToken } from "../helpers/handleJWT";

const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:3200/public";


/**
 * controlador encargado de crear sesions POST
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req,res) =>{
  
  try{
    const cleanBody = matchedData(req);
    const headerAuth = req.headers.authorization;
    const user = await userModel.findOne({ nickName: cleanBody.nickName.toLowerCase()})
    .select('sub nickName name rol position entity password profileImgUrl')
    .populate({
      path:'position',
      select:'name',
    })
    .populate({
      path:'entity',
      select:'name',
    });
    
    if(!user) return handleError(res,403,'No Existe el Usuario');
    
    const match = await compare(cleanBody.password, user.password);
    
    if(!match) return handleError(res,401,'Contrase;a incorrecta');
    
    //send token 
    if(!headerAuth) {
      return res.status(200).send({ token: signToken(user) });
    }
    else {
      //send payload
      const auth = verifyToken(headerAuth.split(' ').pop().trim());
      auth ? res.status(200).send({ user: auth }) : handleError(res,403,'Invalid_Token');
      
    }

  }catch(e){
    console.log(e)
    return handleError(res,403,'Error_user_login');
    
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
    nickName: cleanBody.nickName.toLowerCase(),
    password: hashPass,
  }

  try{
    const validEntity = await entityModel.findById(cleanBody.entity);
    const validPosition = await positionModel.findById(cleanBody.position);

    if(!validEntity || !validPosition) return handleError(res,401,'Entidad o Cargo no existe');
    else{

      const savedUser = await userModel.create(data);
      //se aplica para metodos que no permiten filtrado (Create)
      savedUser.set('password',undefined,{ strict:false });
      if(!savedUser){ return handleError(res,403,'Error saving user') }

      //if user is  saved then =>  save in the db the id of user in entity && position
      validEntity.users.push(savedUser._id);
      await validEntity.save();

      validPosition.users.push(savedUser._id);
      await validPosition.save();

      return res.status(200).send({message:'Usuario guardado correctamente',user:savedUser});
    }

  }catch(e){
    console.log(e);
    return handleError(res,403,'Error_user_register');
  }
//TODOS
// * Validar la existencia de la position a guarar y de la entity
//* refactorizar el codigo
};


/**
 * controlador encargado de guardar usuarios en db POST mediante un archivo excel con determinada estructura
 * @param {*} req 
 * @param {*} res 
 */
 export const saveWithFile = async (req,res) =>{
  //clean the body peticion
  // const cleanBody = matchedData(req);
  try{
    //the funccion read recive a buffer tring  then we past the req.file object property buffer
    const file = req.file;
    const extension = file.originalname.split('.').pop();
   
    if(extension !== 'xlsx') return handleError(res,403,'Error_wrong_file_extension');
    if(!file.buffer) return handleError(res,403,'Error_loading_file');

    const workbook = read(file.buffer);
    //sbe de page content
    const sheet = workbook.SheetNames[0];
    //transform the table to json object 
    const dataExcel = utils.sheet_to_json(workbook.Sheets[sheet]);


    const data = Promise.all(
      dataExcel.map( async (item) => {
        return {
          nickName:item.usuario,
          name:item.nombre,
          rol:item.cargo,
          document:item.ci,
          password: await encrypt(item.contrasena),
          position:item.posicion,
          entity:item.entidad,
        }
      })
    ) ;

    const saveUsers = await userModel.create(data);
    return res.status(200).send({msg:'users saveds', users:saveUsers});
    
  }catch(e){
    console.log(e);
    return handleError(res,403,'Error_user_register');
  }
};

/**
 * 
 * @param {*} req datos + archivo tipo imagen
 * @param {*} res datos guardados
 * @returns 
 */
export const updateProfile = async (req,res) =>{

  //propiedad que es creada en el middleware de multer si el archivo es incorrecto
  // a futuro validad la cabecera debe ser  multipart form data 
  const { invalidFile, file } = req;
  console.log(invalidFile, file);

  if(!invalidFile && file){
    // clean the body peticion
    const cleanBody = matchedData(req);

    try{

      const userUpdated = await userModel.findByIdAndUpdate(
        cleanBody.id,
          {
            $set:
            {
              profileImgUrl:`${PUBLIC_URL}/images/${file.filename}`,
              nickName: cleanBody.nickName
            },
          },{ new:true }
      );
      if(userUpdated) return res.status(200).send({ updated: userUpdated });
      
    }catch(e){
      console.log(e);
      return handleError(res,403,'Error_user_register');
    }

  }else return handleError(res,400,'invalidFile');
};