import  { entityModel }  from "../models";
import { matchedData } from "express-validator";
import { handleError } from "../helpers/handleHttpErrors";

export const saveEntity = async (req,res) =>{

    try{
        const cleanBody = matchedData(req);
        
        const savedEntity = await entityModel.create(cleanBody);
        //if error saving
        if(!savedEntity) return handleError(res,500,'Server_Error');
        //return saved data if saved
        else return res.status(200).send({ saved:savedEntity });

    }catch(e){
        console.log(e)
        return handleError(res,403,'Error_saving_entity');
    }
}   

export const getAllEntitys = async (req,res) =>{ //(1) => padre (entitys)

    try{
        const allEntitys = await entityModel.aggregate(
            [
                {
                    $lookup:
                    {   
                        from:'users',  //(2) => hijo (users)
                        let:{
                            aliasUsers:"$users"
                        },
                        pipeline:[
                            {
                                $match:{
                                    $expr:{
                                        $in:["$_id","$$aliasUsers"]
                                    }
                                }
                            }
                        ],
                        as:"UsersList"
                    }
                }
            ]
        );

        return console.log(allEntitys);
    }catch(e){
        console.log(e)
        return handleError(res,403,"Error_Getting_entitys");
    }
}