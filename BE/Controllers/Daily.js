import express from 'express';
import dailyHandler from './../BL/DailyHandler.js';


const router = express.Router();


router.get('/',async (req, res) =>{
    try{
        let params = {}
        if(req.query.groupId) {params['groupId'] = req.query.groupId;};
        if(req.query.soldierId) {params['soldierId'] = req.query.soldierId;};
        res.status(200).send(await dailyHandler.Get(params));
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
