
const getDaily = (service) =>async (req, res) =>{
    try{
        res.status(200).send(await service.Get(req.query));
    }

    catch (err) {
        if (err instanceof UserInvalidInputError) {
            res.status(404).send({ errorContent: err.message });
        }
        else {
            res.status(500).send({ errorContent: err.message });
        }
    }
}


export default {getDaily};
