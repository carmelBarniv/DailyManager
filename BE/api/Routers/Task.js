import express from 'express';
import taskHandler from '../../Services/TaskService.js';
import taskController from '../Controllers/Task.js';


const router = express.Router();

router.post('/', taskController.postTask(taskHandler));

router.put('/:taskId', taskController.putTask(taskHandler));

export default router;