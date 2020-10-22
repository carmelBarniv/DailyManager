import express from 'express';
import groupHandler from '../../Services/GroupService.js';
import groupRelationsHandler from '../../Services/GroupRelationsService.js';


const router = express.Router();

const postGroup = (service) => async (req, res) =>{
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
}

router.post('/', postGroup(groupHandler));

const postRelation = (service) => async (req, res) =>{
    try{
        let params = {};
        params.groupId = req.params.groupId; 
        params.soldiers = req.body.soldiers;
        res.status(200).send(await service.Insert(params));
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
}

router.post('/Relation/:groupId', postRelation(groupRelationsHandler))


export default router;