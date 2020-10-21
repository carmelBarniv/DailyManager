import express from 'express';
import groupHandler from '../../Services/GroupService.js';
import groupRelationsHandler from '../../Services/GroupRelationsService.js';


const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        res.status(200).send({groupId:await groupHandler.Insert(req.body)});
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
        params.soldiers = req.body.soldiers;
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


export default router;