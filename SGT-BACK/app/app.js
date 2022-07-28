"use strict";
import express  from "express";
import cors from "cors";
//import routes
import routes from "./routes";

//serv instance
const app = express();

//request to json 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cors configuration
app.use(cors());

//Routes
//user routs
app.use('/api/user',routes.userRoutes);
// ticket routs
app.use('/api/ticket',routes.ticketRoutes);
//entity routs
app.use('/api/entity',routes.entityRoutes);
export default app;