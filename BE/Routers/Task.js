const express = require('express');
const taskHandler = require('../BL/TaskHandler.js');


const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        let params = {};
        params.name = req.body.name;
        params.soldierId = req.body.soldierId;
        res.status(200).send(await taskHandler.Insert(params));
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
})

router.put('/:taskId', async (req, res) => {
    try
    {
        let params = {};
        params.taskId = req.params.taskId;
        if(req.query.statusId) {params['statusId'] = req.query.statusId;};
        if(req.query.soldierId) {params['soldierId'] = req.query.soldierId;};
        res.status(200).send(await taskHandler.Put(params));
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
})


module.exports = router;