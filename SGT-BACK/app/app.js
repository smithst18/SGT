"use strict";
import express  from "express";
import cors from "cors";
//import routes
import routes from "./routes";

//error middle handlers 
import { multerErrorHandler } from './middlewares/multer';
//serv instance
const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false, // Deshabilitar credenciales con wildcard
};

app.use(cors(corsOptions));

// Request to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
