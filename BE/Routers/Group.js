const express = require('express');
const groupHandler = require('../BL/GroupHandler');
const groupRelationsHandler = require('../BL/GroupRelationsHandler');


const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        let params = {};
        params.name = req.body.name;
        if (req.body.soldiers){
            params.soldiers = req.body.soldiers;
            res.status(200).send(groupHandler.Insert(params).then((res) =>
            //add groupId to params  
            await groupRelationsHandler.Insert(params)));
        }
        else{
            res.status(200).send(await groupHandler.Insert(params));
        }
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

router.post('/Relation/:groupId',async (req, res) =>{
    try{
        let params = {};
        params.groupId = req.params.groupId; 
        res.status(200).send(await groupRelationsHandler.Insert(params));
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