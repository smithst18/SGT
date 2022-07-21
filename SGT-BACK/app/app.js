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
app.use('/api/user',routes.userRoutes);

export default app;