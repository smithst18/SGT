'use strict'
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const privateKey = process.env.PRIVATE_KEY || 'SgH78/?+_01As';

//crear firmar token
/**
 * //need the payload data
 * @param {*} data 
 * @returns 
 */
export const signToken = (data) =>{
    const payLoad = {
        id: data._id,
        nickName: data.nickName,
        name: data.name,
        rol: data.rol,
        position: data.position.name,
        entity: data.entity.name,
        profileImgUrl:data.profileImgUrl
    }
    const token = jwt.sign(
        payLoad,
        privateKey,
        { 
            expiresIn: '1d',
        }
    );

    return token
}
/**
 * // need a jwt 
 * @param {*} token 
 * @returns 
 */
export const verifyToken = (token) =>{
    try{
        return jwt.verify(token,privateKey);
    }catch(e){
        return null;
    }
}
