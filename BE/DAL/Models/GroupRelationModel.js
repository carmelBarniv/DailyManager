import db from '../Handlers/SqlHandler.js';
import Sequelize from 'sequelize';

const GroupRelation = db.sequelizer.define('Group',{
    groupId:{
        type: Sequelize.INTEGER
    },
    soldierId:{
        type: Sequelize.INTEGER
    }
},
{
    tableName: 'Groups_Relations',
    timestamps: false
});

const Create =async (groupId, soldierId) => {
    return await GroupRelation.create({groupId, soldierId});
}

const CreateMany =async (relations) => {
    return await GroupRelation.bulkCreate(relations);
}

export default {Create, CreateMany};
