import SqlHandler from '../DAL/SqlHandler.js';
import Validator from '../Common/Validations/validator.js';
import eventEmitter from '../Common/EventEmitter/EventEmitterHandler.js'
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);

    const query = CreationQuery(params.name)
    console.log("executing query: " + query);
    const groupId = await db.GetExecutedId(query);
    console.log(groupId); 
    if (params.soldiers){
        eventEmitter.emit('create_group', {groupId, soldiers:params.soldiers});
    }
    return groupId;
}

const CreationQuery = (name) =>{
    return `INSERT INTO Groups(name)
    VALUES ('${name}')`;
}


export default {Insert};