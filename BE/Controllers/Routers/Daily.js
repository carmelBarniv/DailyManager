import express from 'express';
import dailyHandler from '../../Services/DailyService.js';


const router = express.Router();


router.get('/',async (req, res) =>{
    try{
        res.status(200).send(await dailyHandler.Get(req.query));
    }

    catch (err) {
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
})


export default router;
