
const postTask = (service) => async (req, res) =>{
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
};


const putTask = (service) => async (req, res) => {
    try
    {
        let params = {taskId:req.params.taskId, ...req.body};
        res.status(200).send(await service.Put(params));
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
};



export default {postTask, putTask};