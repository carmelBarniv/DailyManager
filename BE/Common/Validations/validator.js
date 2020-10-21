import UserInvalidInputError from '../Errors/invalidUserInputError.js';
import xregexp from 'xregexp';

const Validatior = (elements) => {
    for (var key in elements) {
        const paranoid = xregexp('((%27)|(\'))|(--)|((%23)|(#))', 'i');
        var value = elements[key].toString();

        if (value === '' || value === 'undefined')
            throw new UserInvalidInputError('undefined object')
        else if (paranoid.test(value)) {
            throw new UserInvalidInputError('Attempted a SQL injection')
        } else {
            var invalidChars = value.match(/[^A-Za-z0-9\u0590-\u05FF\,\. ]/g);
            if (invalidChars)
                throw new UserInvalidInputError('The following characters are invalid: ' + invalidChars.join(' '))
        }
    }
}

export default Validatior;
