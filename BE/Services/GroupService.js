import Validator from '../Common/Validations/validator.js';
import eventEmitter from '../Common/EventEmitter/EventEmitterHandler.js'
import GroupModel from '../DAL/Models/GroupModel.js'
 


const Insert= async (params)=>
{
    Validator(params);

    const res = await GroupModel.Create(params.name);
    const groupId = res.id;
    console.log(groupId); 
    if (params.soldiers){
        eventEmitter.emit('create_group', {groupId, soldiers:params.soldiers});
    }
    return res;
}


export default {Insert};