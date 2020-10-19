let SqlHandler = require('../DAL/SqlHandler');
let Validator = require("../Common/Validations/validator")
const db = new SqlHandler();


const Insert= async (params)=>
{
    Validator(params);
    let date_ob = new Date();

    let day = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    let date = `${year}-${month}-${day}`;

    let query = CreationQuery(params.name, params.soldierId, date)
    console.log("executing query: " + query);
    return await db.Execute(query);
}

let CreationQuery = (name, soldierId, date) =>{
    return `INSERT INTO Tasks(name, date, soldierId, statusId)
    VALUES ('${name}', '${date}',${soldierId},1)`;
}

let Put = async  (params) =>{
    Validator(params);
    let query = PutQuery(params);
    console.log(query);
    return await db.Execute(query);
}

let PutQuery = (params) =>{
    let query = 'UPDATE Tasks SET ';
    Object.keys(params).forEach(key =>{
        if(key != "taskId"){
            query += ` ${key} = '${params[key]}',`;
        }
    });
    if (query[query.length - 1] != ','){
        return query += ` WHERE id = ${params.taskId}`
    }
    return query.slice(0, query.length -1) + ` WHERE id = ${params.taskId}`;
}


module.exports.Insert = Insert;
module.exports.Put = Put;
