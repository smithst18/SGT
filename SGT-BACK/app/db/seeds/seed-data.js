import 'dotenv/config';
import mongoose from "mongoose";
import { encrypt } from "../../helpers/handlePassword";
import {
    userModel,
    ticketModel,
    entityModel,
    positionModel } from "../../models";



const MONGO_URI = process.env.DB_URI || "mongodb://localhost:27017/sgt";

mongoose.connect(
    MONGO_URI,
    {
        keepAlive:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(async (mongoose) =>{

    console.log('Db connected to ',mongoose.connection.name);

    Promise.all([

        await entityModel.insertMany([
            {
                _id:'62e3df964db2354847e3461c',
                name:"Administrador",
                positions:[
                    "62e3df964db2354847e3462c",
                ],
                users:[
                    "62e3df964db2354847e3463c",
                ]

            },
            {
                _id:'62e3df964db2354847e3465c',
                name:"R.R.H.H",
                positions:[
                    "62e3df964db2354847e3142c",
                    "62e3df964db2354847e3242c",
                    "62e3df964db2354847e3342c"
                ],
                users:[
                    "62e3df964db2354812e3463c",
                ]
            },
            {
                _id:'62e3df964db2352847e3460c',
                name:"Tecnologia",
                positions:[
                    "62e3df964db2354847e3142c",
                    "62e3df964db2354847e3242c",
                    "62e3df964db2354847e3342c"
                ],
                users:[
                    "62e3df964db2354822e3463c",
                ]
            }
        ]),
        
        await positionModel.insertMany([
            //position for Adm
            {
                _id:'62e3df964db2354847e3462c',
                name:"Administrador",
                type:"2",
                entity:"62e3df964db2354847e3461c",
                users:[
                    "62e3df964db2354847e3463c"
                ]
            },
            // para rr hh 
            {
                _id:'62e3df964db2354847e3142c',
                name:"Analista",
                type:"1",
                entity:"62e3df964db2354847e3465c",
                users:[
                    "62e3df964db2354812e3463c",
                ]
            },
            {
                _id:'62e3df964db2354847e3242c',
                name:"Director de linea",
                type:"2",
                entity:"62e3df964db2354847e3465c",
            },
            {
                _id:'62e3df964db2354847e3342c',
                name:"Director General",
                type:"2",
                entity:"62e3df964db2354847e3465c",
            },

            // para tecnologia 
            {
                _id:'62e3df963db2354847e3142c',
                name:"Analista",
                type:"1",
                entity:"62e3df964db2352847e3460c",
                users:[
                    "62e3df964db2354822e3463c",
                ]
            },
            {
                _id:'62e3df961db2354847e3242c',
                name:"Director de linea",
                type:"2",
                entity:"62e3df964db2352847e3460c",
            },
            {
                _id:'62e3df904db2354847e3342c',
                name:"Director General",
                type:"2",
                entity:"62e3df964db2352847e3460c",
            },
        ]),

        await userModel.insertMany([
            {
                _id:"62e3df964db2354847e3463c",
                nickName: "Admin",
                name: "emanuel Abreu",
                rol:"admin",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3462c",
                document: "27571718",
                entity: "62e3df964db2354847e3461c"
            },
            {
                _id:"62e3df964db2354822e3463c",
                nickName: "tech",
                name: "pedro perez",
                password:await encrypt("tech"),
                rol:"tech",
                position: "62e3df964db2354847e3142c",
                document: "27571771",
                entity: "62e3df964db2352847e3460c"
            },
            {
                _id:"62e3df964db2354812e3463c",
                nickName: "normal",
                name: "manuel perez",
                password:await encrypt("normal"),
                rol:"user",
                position: "62e3df964db2354847e3142c",
                document: "27571772",
                entity: "62e3df964db2354847e3465c"
            },
        ]),

    ]).then((values) =>{

        console.log('seeds load succesfully');

    }).catch((e)=>{

        console.log(e);
        console.log('Error loading seeds');

    });

    mongoose.disconnect();
}).catch((e) =>{
    console.log(e,'conexion error');
    return false;
});