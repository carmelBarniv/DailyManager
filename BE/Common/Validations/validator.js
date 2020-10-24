import UserInvalidInputError from '../Errors/invalidUserInputError.js';
import xregexp from 'xregexp';

const Validatior = (elements) => {
    for (const key in elements) {
        console.log(key);
        console.log(elements[key]);        
        if (Array.isArray(elements[key])){
            elements[key].map(val => {
                validate(val.toString()); // good for only 1 nested array
            })
        }
        else{
            validate(elements[key].toString());
        }
    }
}

const validate = (value)=> {
    const paranoid = xregexp('((%27)|(\'))|(--)|((%23)|(#))', 'i');

    if (value === '' || value === 'undefined')
        throw new UserInvalidInputError('undefined object')
    else if (paranoid.test(value)) {
        throw new UserInvalidInputError('Attempted a SQL injection')
    }
     else {
        const invalidChars = value.match(/[^A-Za-z0-9\u0590-\u05FF\,\. ]/g);
        if (invalidChars)
            throw new UserInvalidInputError('The following characters are invalid: ' + invalidChars.join(' '))
    }
}

export default Validatior;
