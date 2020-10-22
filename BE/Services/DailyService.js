// import db from '../DAL/Handlers/SqlHandler.js';
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
        // query = GetByGroupQuery(params.groupId, today, yesterday)
        return await dailyModel.GetByGroupQuery(params.groupId, today, yesterday);
    }
    else if(params.soldierId){
        // query = GetBySoldierQuery(params.soldierId, today, yesterday)
        return await dailyModel.GetBySoldierQuery(params.soldierId, today, yesterday);

    }
    else{
        throw new UserInvalidInputError('must have soldier or group as parameter');
    }

    // console.log("executing query: " + query);
    // return await db.Execute(query);
}

// const GetBySoldierQuery = (soldierId, date1, date2 ) =>{
//     return `SELECT t.name, t.date, s.name as status, so.name as assigned
//     FROM Tasks as t
//     INNER JOIN Status as s ON s.id=t.statusId
//     INNER JOIN Soldiers as so ON so.id=t.soldierId
//     WHERE (t.date='${date1}' OR t.date='${date2}') AND t.soldierId='${soldierId}'`;
// }

// const GetByGroupQuery = (groupId, date1, date2) =>{
//     return `SELECT t.name, t.date, s.name as status, so.name as assigned
//     FROM Groups as g
//     INNER JOIN Groups_Relations as r ON  g.id=r.groupId
//     INNER JOIN Tasks as t ON t.soldierId=r.soldierId
//     INNER JOIN Soldiers as so ON so.id=t.soldierId
//     INNER JOIN Status as s ON s.id=t.statusId
//     WHERE g.id = ${groupId} AND (t.date='${date1}' OR t.date='${date2}')`;
// }


export default {Get };