import groupRelationService from '../Services/GroupRelationsService.js'
import eventEmitter from '../Common/EventEmitter/EventEmitterHandler.js';

eventEmitter.on('create_group', async ({groupId, soldiers})=>{
    groupRelationService.Insert({groupId, soldiers})
})