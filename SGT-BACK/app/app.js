"use strict";
import express  from "express";
import cors from "cors";
//import routes
import routes from "./routes";

//error middle handlers 
import { multerErrorHandler } from './middlewares/multer';
//serv instance
const app = express();

//request to json 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cors configuration
app.use(cors());

//config para archivos publicos
app.use('/public',express.static(__dirname + '/public'));

//Routes
//user routs
app.use('/api/user',routes.userRoutes);
// ticket routs
app.use('/api/ticket',routes.ticketRoutes);
//entity routs
app.use('/api/entity',routes.entityRoutes);
//position routs
app.use('/api/position',routes.positionRoutes);
//stadistics routs
app.use('/api/stadistics',routes.stadisticsRoutes);
//survey Routs 
app.use('/api/survey',routes.surveyRoutes);

app.use(multerErrorHandler);
export default app;