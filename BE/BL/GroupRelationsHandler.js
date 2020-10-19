let SqlHandler = require('../DAL/SqlHandler');
let Validator = require("../Common/Validations/validator");
const { promises } = require('dns');
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);
    let res = "";
    await Promise.all(params.soldiers.map(soldierId => {
        let query = CreationQuery(params.groupId, soldierId)
        console.log("executing query: " + query);
        res = await db.Execute(query) + res; // so it will always update res before adding
    }))
    return res;
}

let CreationQuery = (groupId, soldierId) =>{
    return `INSERT INTO Groups_Relations(groupId, soldierId)
    VALUES (${groupId},${soldierId})`
}


module.exports.Insert = Insert;