let SqlHandler = require('../DAL/SqlHandler');
let Validator = require("../Common/Validations/validator");
const UserInvalidInputError = require('../Common/Errors/invalidUserInputError')
const db = new SqlHandler();


const Get= async (params)=>
{
    Validator(params);
    let date_ob = new Date();
    date_ob.setDate(date_ob.getDate() - 1);

    let day = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let date = `${year}-${month}-${day}`;
    let query;

    if (params.groupId){
        query = GetByGroupQuery(params.groupId, date)
    }
    else if(params.soldierId){
        query = GetBySoldierQuery(params.soldierId, date)
    }
    else{
        throw new UserInvalidInputError('must have soldier or group as parameter');
    }

    console.log("executing query: " + query);
    return await db.Execute(query);
}

let GetBySoldierQuery = (soldierId, date) =>{
    return `SELECT t.name, t.date, s.name as status, so.name as assigned
    FROM Tasks as t
    INNER JOIN Status as s ON s.id=t.statusId
    INNER JOIN Soldiers as so ON so.id=t.soldierId
    WHERE t.date='${date} AND t.soldierId=${soldierId}'`;
}

let GetByGroupQuery = (groupId, date) =>{
    return `SELECT t.name, t.date, s.name as status, so.name as assigned
    FROM Groups as g
    INNER JOIN Groups_Relations as r ON  g.id=r.groupId
    INNER JOIN Tasks as t ON t.soldierId=r.soldierId
    INNER JOIN Soldiers as so ON so.id=t.soldierId
    INNER JOIN Status as s ON s.id=t.statusId
    WHERE g.id = ${groupId} AND t.date='${date}'`;
}


module.exports.Get = Get;