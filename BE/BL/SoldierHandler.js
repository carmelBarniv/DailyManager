let SqlHandler = require('../DAL/SqlHandler');
let Validator = require("../Common/Validations/validator")
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);

    let query = CreationQuery(params.name)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (name) =>{
    return `INSERT INTO Soldiers (name)
    VALUES ('${name}')`;
}


module.exports.Insert = Insert;