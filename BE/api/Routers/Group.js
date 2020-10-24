import express from 'express';
import groupHandler from '../../Services/GroupService.js';
import groupRelationsHandler from '../../Services/GroupRelationsService.js';
import groupController from '../Controllers/Group.js';


const router = express.Router();


router.post('/', groupController.postGroup(groupHandler));

router.post('/Relation/:groupId', groupController.postRelation(groupRelationsHandler))


export default router;