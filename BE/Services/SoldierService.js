import Validator from '../Common/Validations/validator.js';
import SoldierModel from '../DAL/Models/SoldierModel.js'


const Insert= async (params)=>
{
    Validator(params);
    return await SoldierModel.Create(params.name);
}


export default {Insert};