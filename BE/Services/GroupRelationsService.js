import SqlHandler from '../DAL/SqlHandler.js';
import Validator from '../Common/Validations/validator.js';
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);
    let res = "";
    await Promise.all(params.soldiers.map(async (soldierId) => {
        const query = CreationQuery(params.groupId, soldierId)
        console.log("executing query: " + query);
        res = [...res, await db.Execute(query)]; // so it will always update res before adding
    }))
    return res;
}

const CreationQuery = (groupId, soldierId) =>{
    return `INSERT INTO Groups_Relations(groupId, soldierId)
    VALUES (${groupId},${soldierId})`
}


export default {Insert};