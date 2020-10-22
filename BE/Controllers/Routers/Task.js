import express from 'express';
import taskHandler from '../../Services/TaskService.js';


const router = express.Router();

const postTask = (service) => async (req, res) =>{
    try{
        res.status(200).send(await service.Insert(req.body));
    }
    catch (err) {
        console.log(err);
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
};

router.post('/', postTask(taskHandler));

const putTask = (service) => async (req, res) => {
    try
    {
        let params = {taskId:req.params.taskId, ...req.body};
        res.status(200).send(await service.Put(params));
    }
    catch (err) {
        console.log(err);
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
};

router.put('/:taskId', putTask(taskHandler));


export default router;