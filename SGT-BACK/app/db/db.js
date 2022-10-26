import 'dotenv/config'
// import { connect } from "mongoose";
import db from './models';


export const dbConexion = async () =>{

  try{
    await db.sequelize.sync({force:true});
    console.log("All models were synchronized successfully.");
    return true
  }catch(err){
    console.log('Db Connection failure:',err);
    return false
  }
}
