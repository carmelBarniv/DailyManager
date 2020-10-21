import soldierRouter from './Routers/Soldier.js';
import taskRouter from './Routers/Task.js';
import groupRouter from './Routers/Group.js';
import dailyRouter from './Routers/Daily.js';
import express from 'express';

const router = express.Router();

router.use("/soldier",soldierRouter);
router.use("/task",taskRouter);
router.use("/group",groupRouter);
router.use("/daily",dailyRouter);

export default router;


