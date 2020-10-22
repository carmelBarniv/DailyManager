import express from 'express';
import soldierHandler from '../../Services/SoldierService.js';

const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        res.status(200).send(await soldierHandler.Insert(req.body));
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