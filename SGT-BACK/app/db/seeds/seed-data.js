import 'dotenv/config';
import mongoose from "mongoose";
import { encrypt } from "../../helpers/handlePassword";
import {
    userModel,
    entityModel,
    positionModel } from "../../models";



const MONGO_URI = process.env.DB_URI || "mongodb://0.0.0.0:27017/sgt";

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
                _id:'62e3df964db2354847e3465c',
                name:"R.R.H.H",
                positions:[
                    "62e3df964db2354847e3142c",
                    "62e3df964db2354847e3242c",
                    "62e3df964db2354847e3342c",
                ],
                users:[]
            },
            {
                _id:'62e3df964db2352847e3460c',
                name:"Tecnologia",
                positions:[
                    "62e3df964db2354847e3142c",
                    "62e3df964db2354847e3242c",
                    "62e3df964db2354847e3342c",
                ],
                users:[
                    "62e3df964db2354847e3463c"
                ]
            },
            {
                _id:'62e3df964db2352847e3462c',
                name:"despacho",
                positions:[
                    "62e3df964db2354847e3142c",
                    "62e3df964db2354847e3242c",
                    "62e3df964db2354847e3342c",
                ],
                users:[]
            }
        ]),
        
        await positionModel.insertMany([
            //positions
            {
                _id:'62e3df964db2354847e3142c',
                name:"Analista",
                type:"1",
                users:[]
            },
            {
                _id:'62e3df964db2354847e3242c',
                name:"Director de linea",
                type:"2",
                users:[]
            },
            {
                _id:'62e3df964db2354847e3342c',
                name:"Director General",
                type:"2",
                users:[]
            },

        ]),

        await userModel.insertMany([
            {
                _id:"62e3df964db2354847e3463c",
                nickName: "admin",
                name: "emanuel Abreu",
                rol:"admin",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3142c",
                document: "27571718",
                entity: "62e3df964db2352847e3460c"
            },
            {
                _id:"62e3df964db2354847e3462c",
                nickName: "jose",
                name: "jose Abreu",
                rol:"tech",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3142c",
                document: "27571717",
                entity: "62e3df964db2352847e3460c"
            },
            {
                _id:"62e3df964db2354837e3461c",
                nickName: "rosa",
                name: "rosa Abreu",
                rol:"user",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3142c",
                document: "27571716",
                entity: "62e3df964db2354847e3465c"
            },
            {
                _id:"62e3df964db2354847e3460c",
                nickName: "maria",
                name: "maria Abreu",
                rol:"user",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3142c",
                document: "27571715",
                entity: "62e3df964db2352847e3462c"
            },
            {
                _id:"62e3df964db2354847e3459c",
                nickName: "pedro",
                name: "pedro Abreu",
                rol:"user",
                password:await encrypt("Emanuel12"),
                position: "62e3df964db2354847e3142c",
                document: "27571714",
                entity: "62e3df964db2352847e3462c"
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