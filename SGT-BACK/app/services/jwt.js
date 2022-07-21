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
        sub: data._id,
        userName: data.name,
        name: data.lastName,
        document: data.document,
        type: data.type,
        position: data.position,
        department: data.department,
    }
    const token = jwt.sign(
        payLoad,
        privateKey,
        { 
            expiresIn: '50s',
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
        return jwt.verify(token,privateKey)
    }catch(e){
        return null;
    }
}