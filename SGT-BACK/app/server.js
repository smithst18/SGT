"use strict";
import 'dotenv/config';
import app from './app';
import { dbConexion } from "./db/db";

const port = process.env.PORT || 3000;


( async () =>{
  const dbAlive = await dbConexion();

  if(dbAlive){
    app.listen(port, () => console.log(`🚀 Server Runing on port ${port}`) );
  }
  
})();


