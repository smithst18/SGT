import bcrypt from 'bcrypt';

/**
 * 
 * @param {*} unHashedPass 
 * @returns 
 */
export const encrypt = async (unHashedPass) =>{
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    const hash = bcrypt.hash(unHashedPass, salt);

    return hash;
}

/**
 * 
 * @param {*} unHashedPass 
 * @param {*} hashedPass 
 * @returns 
 */
export const compare =  async (unHashedPass,hashedPass) =>{
    const match = bcrypt.compare(unHashedPass, hashedPass);

    return match;
}