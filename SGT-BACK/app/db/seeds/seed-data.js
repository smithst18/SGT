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
                name:"Administrador"
            },
            {
                _id:'62e3df964db2354847e3465c',
                name:"R.R.H.H"
            }
        ]),

        await positionModel.insertMany([
            {
                _id:'62e3df964db2354847e3462c',
                name:"Administrador",
                type:"2",
                entity:"62e3df964db2354847e3461c",
            },
            {
                _id:'62e3df964db2354847e3442c',
                name:"Analista",
                type:"1",
                entity:"62e3df964db2354847e3465c",
            }
        ]),

        await userModel.insertMany([
            {
                _id:"62e3df964db2354847e3463c",
                nickName: "Admin",
                name: "emanuel Abreu",
                password:await encrypt("Emanuel15"),
                position: "62e3df964db2354847e3462c",
                document: "27571773",
                entity: "62e3df964db2354847e3461c"
            },
            {
                _id:"62e3df961db2354847e3263c",
                nickName: "user",
                name: " Doria",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3442c",
                document: "27571714",
                entity: "62e3df964db2354847e3465c"
            },
            {
                _id:"62e3df962db2354847e3263c",
                nickName: "user2",
                name: "gonzales ",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3442c",
                document: "27571711",
                entity: "62e3df964db2354847e3465c"
            },
            {
                _id:"62e3df963db2354847e3263c",
                nickName: "user3",
                name: "jimenez",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3442c",
                document: "27571712",
                entity: "62e3df964db2354847e3465c"
            }
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