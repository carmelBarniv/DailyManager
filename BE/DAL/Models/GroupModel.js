import db from '../Handlers/SqlHandler.js';
import Sequelize from 'sequelize';

const Group = db.sequelizer.define('Group',{
    name:{
        type: Sequelize.STRING
    }
},
{
    tableName: 'Groups',
    timestamps: false
});

const Create =async (name) => {
    return await Group.create({name});
}

export default {Create};
