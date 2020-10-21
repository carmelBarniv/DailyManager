import SqlHandler from '../DAL/SqlHandler.js';
import Validator from '../Common/Validations/validator.js';
import eventEmitter from '../Common/EventEmitter/EventEmitterHandler.js'
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);

    const query = CreationQuery(params.name)
    console.log("executing query: " + query);
    const res = await db.Execute(query);
    const groupId = res.results[0][""]; // "" is the object key to the last connection inserted row (build in sql)
    if (params.soldiers){
        eventEmitter.emit('create_group', {groupId, soldiers:params.soldiers});
    }
    return res;
}

const CreationQuery = (name) =>{
    return `INSERT INTO Groups(name)
    VALUES ('${name}')
    SELECT SCOPE_IDENTITY()`;
}


export default {Insert};