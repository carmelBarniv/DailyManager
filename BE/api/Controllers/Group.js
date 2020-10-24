
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


const postRelation = (service) => async (req, res) =>{
    try{
        res.status(200).send(await service.Insert({groupId:req.params.groupId ,soldiers :req.body.soldiers}));
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


export default {postGroup, postRelation};