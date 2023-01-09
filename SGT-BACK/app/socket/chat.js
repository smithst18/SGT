import { userModel, chatModel } from "../models";
//esta funcion no retorna chats  retorna los usuarios y un chat subjetivo dependiendo de si existe o no una conversacion previa
export const getChats = async (senderId) => {
  try{
    //tento el id del usuario conectado
    const clients = await userModel.find({ _id:{ $nin: senderId } }).select('_id name nickName profileImgUrl');
    const availableChats = await chatModel.find({ users: { $all: senderId} } );

    const dataChat = clients.map( (client) => {
      //buscar si hay algun chat perteneciente ambos usuarios
      const chat = availableChats.find((chat) => chat.users.includes(senderId) && chat.users.includes(client._id));

      if(chat){
        const data = {
          _id:client._id,
          name:client.name,
          nickName:client.nickName,
          profileImgUrl:client.profileImgUrl,
          unreadMsg: chat.messages.filter((e) => e.read == false && e.user != senderId).length,
          lastMsg: chat.messages[chat.messages.length - 1]
        }
        return data
        //si no se envia el cliente puro
      }else return {
          _id:client._id,
          name:client.name,
          nickName:client.nickName,
          profileImgUrl:client.profileImgUrl,
          unreadMsg:0,
          lastMsg:null
        }
    });

    //console.log('nuevo array seteado',dataChat);

    if(clients.length >= 1) return dataChat;

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

    const saved = await chatToSave.save();

    return saved;
  }catch(e){
    console.log('error de servidor:',e);

    return false;
  }
};

//
export const saveReadMsgs = async (chatId,userId) => {
  try{
    const chat = await chatModel.findById(chatId);
    if(chat && chat.messages.length > 0){

      let r = await chatModel.updateOne({
        _id: chatId
      },
      {
        $set: {
          "messages.$[message].read": true
        }
      },
      {
        //aqui van las validaciones la propiedad message es uan representacion abstracta de la posicion del array
        arrayFilters: [
          {
            "message.user": {
              $ne: userId
            },
            "message.read": false
          }
        ],
      });
    };
  }catch(e){
    console.log(e);
  }
}