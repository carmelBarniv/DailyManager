import soldierRouter from './Soldier.js';
import taskRouter from './Task.js';
import groupRouter from './Group.js';
import dailyRouter from './Daily.js';
import express from 'express';

const router = express.Router();

router.use("/soldier",soldierRouter);
router.use("/task",taskRouter);
router.use("/group",groupRouter);
router.use("/daily",dailyRouter);

export default router;


