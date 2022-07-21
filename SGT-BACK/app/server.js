"use strict";
import 'dotenv/config';
import app from './app';
import { dbConexion } from "./db/db";
// import cluster from 'node:cluster';
// import { cpus } from 'node:os';
// import process from 'node:process';

const port = process.env.PORT || 3000;
// const numCPUs = cpus().length;


// if (cluster.isPrimary) {
//     console.log(`🚀 Primary ${process.pid} is running`);
  
//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//       cluster.fork();
//     }
  
//     cluster.on('exit', (worker, code, signal) => {
//       console.log(`worker ${worker.process.pid} died`);
//       cluster.fork();
//     });

// } else {
//     // Workers can share any TCP connection
//     // In this case it is an HTTP server
//     app.listen(port, () => {
//       console.log(`🔧 Worker ${process.pid} started`);
//     });

//     //db conexion 
//     dbConexion();
// }

app.listen(port, () => {
  console.log(`🚀 Server Runing on port ${port}`);
  dbConexion();
});
