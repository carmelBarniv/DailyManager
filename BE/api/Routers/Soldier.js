import express from 'express';
import soldierHandler from '../../Services/SoldierService.js';
import soldierController from '../Controllers/Soldier.js';

const router = express.Router();


router.post('/', soldierController.postSoldier(soldierHandler))


export default router;