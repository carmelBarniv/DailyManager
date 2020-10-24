import Validator from '../Common/Validations/validator.js';
import GroupRelationModel from '../DAL/Models/GroupRelationModel.js'



const Insert= async (params)=>
{
    Validator(params);
    let relations = [];
    params.soldiers.map(soldierId => {
        relations.push({groupId:params.groupId, soldierId})
    })
    return await GroupRelationModel.CreateMany(relations);
}


export default {Insert};