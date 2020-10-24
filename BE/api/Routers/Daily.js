import express from 'express';
import dailyHandler from '../../Services/DailyService.js';
import dailyController from '../Controllers/Daily.js';


const router = express.Router();

router.get('/', dailyController.getDaily(dailyHandler))


export default router;
