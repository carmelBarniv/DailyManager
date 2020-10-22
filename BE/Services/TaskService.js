import Validator from '../Common/Validations/validator.js';
import taskModel from '../DAL/Models/TaskModel.js'


const Insert= async (params)=>
{
    Validator(params);
    const date_ob = new Date();

    const day = ("0" + date_ob.getDate()).slice(-2);

    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    const year = date_ob.getFullYear();

    const date = `${year}-${month}-${day}`;

    return await taskModel.Create(params.name, params.soldierId, date);
}


const Put = async  (params) =>{
    Validator(params);
    let paramsToUpdate = [];
    Object.keys(params).forEach(key =>{
        let row = {};
        if(key != "taskId"){
            row[key] = params[key];
            paramsToUpdate.push(row);
        }
    });
    return await taskModel.Update(paramsToUpdate, params.taskId);

}


export default {Insert, Put};
