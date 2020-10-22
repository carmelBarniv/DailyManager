import db from '../Handlers/SqlHandler.js';
import Sequelize from 'sequelize';

const Task = db.sequelizer.define('Task',{
    name:{
        type: Sequelize.STRING
    },
    date:{
        type: Sequelize.DATE
    },
    soldierId:{
        type: Sequelize.INTEGER
    },
    statusId:{
        type: Sequelize.INTEGER
    }
},
{
    tableName: 'Tasks',
    timestamps: false
});

const Create =async (name, soldierId, date, statusId = 1) => {
    return await Task.create({name, soldierId, date, statusId});
}

const Update = async (ParamsToUpdate, id) =>{
    return await Task.update(...ParamsToUpdate, {returning: true, where: {id}});
}

export default {Create, Update};
