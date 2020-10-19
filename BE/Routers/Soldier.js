const express = require('express');
const soldierHandler = require('../BL/SoldierHandler');


const router = express.Router();


router.post('/',async (req, res) =>{
    try{
        let params = {};
        params.name = req.body.name;
        res.status(200).send(await soldierHandler.Insert(params));
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