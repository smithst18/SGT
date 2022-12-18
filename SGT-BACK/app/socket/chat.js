import { userModel, chatModel } from "../models";

export const getChats = async (id) => {
  try{

    const chats = await userModel.find({ _id:{ $nin: id } }).select('_id name nickName profileImgUrl');

    if(chats.length >= 1)return chats;

    else return { msg: 'ANY_USER_AVAILABLE' };

  }catch(e){
    console.log(e);
    return { msg: 'error getting chats', err:e };
  }
};

export const findOrCreateChat = async (receiver,sender) => {

  // buscar si hay un chat con esos usuarios 
  try{

    const chat = await chatModel.findOne({
      users: {
        $all: [ receiver, sender]
      }
    });

    if(chat) { console.log('chat encontrado') ; return chat };
  
    const newChat = {
      users:[ receiver, sender ],
      messages:[],
    };
    //si el chat no existe crearlo
    const createdChat = await chatModel.create(newChat);
    //si se crea enviarlo
    if(createdChat) { console.log('chat creado') ; return createdChat }
    //si no cortar la funcion 
    else return false;

  }catch(e){

    console.log('error de servidor:',e);

    return false;
  }
  //si lo hay enviar la data 
  //si no lo hay generar un chat y guardarlo 

  //retornar el resultado
};

export const saveChat = async ({ id, data }) => {
  try{
    const chatToSave = await chatModel.findById(id);
    
    if(!chatToSave) return false;

    chatToSave.messages.push(data);

    await chatToSave.save();

    return true;
  }catch(e){
    console.log('error de servidor:',e);

    return false;
  }
};