import Validator from '../Common/Validations/validator.js';
import UserInvalidInputError from '../Common/Errors/invalidUserInputError.js';
import dailyModel from '../DAL/Models/DailyModel.js'


const Get= async (params)=>
{
    Validator(params);
    let date_ob = new Date();
    
    const day1 = ("0" + date_ob.getDate()).slice(-2);
    
    const month1 = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    const year1 = date_ob.getFullYear();
    
    const today = `${year1}-${month1}-${day1}`;

    date_ob.setDate(date_ob.getDate() - 1);

    const day2 = ("0" + date_ob.getDate()).slice(-2);
    
    const month2 = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    const year2 = date_ob.getFullYear();
    
    const yesterday = `${year2}-${month2}-${day2}`;

    let query;

    if (params.groupId){
        return await dailyModel.GetByGroupQuery(params.groupId, today, yesterday);
    }
    else if(params.soldierId){
        return await dailyModel.GetBySoldierQuery(params.soldierId, today, yesterday);

    }
    else{
        throw new UserInvalidInputError('must have soldier or group as parameter');
    }
}


export default {Get };