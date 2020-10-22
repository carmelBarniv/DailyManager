import express from 'express';
import soldierHandler from '../../Services/SoldierService.js';

const router = express.Router();



const postSoldier = (service) => async (req, res) =>{
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

router.post('/', postSoldier(soldierHandler))


export default router;