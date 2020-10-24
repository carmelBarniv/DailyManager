
import db from '../Handlers/SqlHandler.js';



const GetBySoldierQuery = async (soldierId, date1, date2 ) =>{
    return await db.Execute(`SELECT t.name, t.date, s.name as status, so.name as assigned
    FROM Tasks as t
    INNER JOIN Status as s ON s.id=t.statusId
    INNER JOIN Soldiers as so ON so.id=t.soldierId
    WHERE (t.date='${date1}' OR t.date='${date2}') AND t.soldierId='${soldierId}'`);
}

const GetByGroupQuery = async (groupId, date1, date2) =>{
    return await db.Execute(`SELECT t.name, t.date, s.name as status, so.name as assigned
    FROM Groups as g
    INNER JOIN Groups_Relations as r ON  g.id=r.groupId
    INNER JOIN Tasks as t ON t.soldierId=r.soldierId
    INNER JOIN Soldiers as so ON so.id=t.soldierId
    INNER JOIN Status as s ON s.id=t.statusId
    WHERE g.id = ${groupId} AND (t.date='${date1}' OR t.date='${date2}')`);
}

export default {GetBySoldierQuery, GetByGroupQuery };
