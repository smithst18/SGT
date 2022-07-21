import bcrypt from 'bcrypt';

/**
 * 
 * @param {*} unHashedPass 
 * @returns 
 */
export const encrypt = async (unHashedPass) =>{
    const saltRounds = 10;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(unHashedPass, salt);

        return hash
    }catch(e){
        console.log(e);
    }

}

/**
 * 
 * @param {*} unHashedPass 
 * @param {*} hashedPass 
 * @returns 
 */
export const compare =  async (unHashedPass,hashedPass) =>{
    
    try{
        const match = bcrypt.compare(unHashedPass, hashedPass);
        return match;
    }catch(e){
        console.log(e);
    }
    
}