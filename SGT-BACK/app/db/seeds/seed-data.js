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

        // await entityModel.insertMany([
        //     {
        //         _id:'62e3df964db2354847e3465c',
        //         name:"R.R.H.H",
        //         positions:[
        //             "62e3df964db2354847e3142c",
        //             "62e3df964db2354847e3242c",
        //             "62e3df964db2354847e3342c",
        //         ],
        //         users:[]
        //     },
        //     {
        //         _id:'62e3df964db2352847e3460c',
        //         name:"Tecnologia",
        //         positions:[
        //             "62e3df964db2354847e3142c",
        //             "62e3df964db2354847e3242c",
        //             "62e3df964db2354847e3342c",
        //         ],
        //         users:[
        //             "62e3df964db2354847e3463c"
        //         ]
        //     },
        //     {
        //         _id:'62e3df964db2352847e3462c',
        //         name:"despacho",
        //         positions:[
        //             "62e3df964db2354847e3142c",
        //             "62e3df964db2354847e3242c",
        //             "62e3df964db2354847e3342c",
        //         ],
        //         users:[]
        //     }
        // ]),
        
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
                name: "admin",
                rol:"admin",
                password:await encrypt("pesca2025"),
                position: "62e3df964db2354847e3142c",
                document: "12345698",
                entity: "62e3df964db2352847e3460c"
            },
            {
                _id:"62e3df964db2354847e3462c",
                nickName: "pedro",
                name: "pedro guerra",
                rol:"boss",
                password:await encrypt("Pesca12309/?"),
                position: "62e3df964db2354847e3142c",
                document: "11111111",
                entity: "62e3df964db2352847e3460c"
            },
            {
                _id:"62e3df964db2354837e3461c",
                nickName: "rosa",
                name: "rosa Abreu",
                rol:"boss",
                password:await encrypt("Pesca12309/?"),
                position: "62e3df964db2354847e3142c",
                document: "22222222",
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