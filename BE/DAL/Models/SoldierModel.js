import db from '../Handlers/SqlHandler.js';
import Sequelize from 'sequelize';

const Soldier = db.sequelizer.define('Soldier',{
    name:{
        type: Sequelize.STRING
    }
},
{
    tableName: 'Soldiers',
    timestamps: false
})

const Create =async (name) => {
    return await Soldier.create({name});
}

export default {Create};
