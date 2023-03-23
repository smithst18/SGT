"use strict";
import 'dotenv/config';
import {httpServer , io} from './io';
import { dbConexion } from "./db/db";

const port = process.env.PORT || 3000;

( async () =>{

  const dbAlive = await dbConexion();

  if(dbAlive) httpServer.listen(port, () => console.log(`🚀 Server Runing on port ${port}`) );
  
})();


