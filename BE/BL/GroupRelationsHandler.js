let SqlHandler = require('../DAL/SqlHandler');
let Validator = require("../Common/Validations/validator");
const { promises } = require('dns');
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);
    let res = "";
    await Promise.all(params.soldiers.map(async (soldierId) => {
        let query = CreationQuery(params.groupId, soldierId)
        console.log("executing query: " + query);
        res = [...res, await db.Execute(query)]; // so it will always update res before adding
    }))
    return res;
}

let CreationQuery = (groupId, soldierId) =>{
    return `INSERT INTO Groups_Relations(groupId, soldierId)
    VALUES (${groupId},${soldierId})`
}


module.exports.Insert = Insert;