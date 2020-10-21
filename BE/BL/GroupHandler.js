import SqlHandler from '../DAL/SqlHandler.js';
import Validator from '../Common/Validations/validator.js';
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);

    let query = CreationQuery(params.name)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (name) =>{
    return `INSERT INTO Groups(name)
    VALUES ('${name}')
    SELECT SCOPE_IDENTITY()`;
}


export default {Insert};