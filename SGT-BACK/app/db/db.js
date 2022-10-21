import 'dotenv/config'
import { connect } from "mongoose";


export const dbConexion = async () =>{

  const MONGO_URI = process.env.DB_URI || "mongodb://localhost:27017/sgt";

  try{
    const db = await connect(
      MONGO_URI,
      {
        keepAlive:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
      }
    );
      
    console.log('Db connected to ',db.connection.name);
    return true
  }catch(err){
    console.log('Db Connection failure:',err);
    return false
  }
}