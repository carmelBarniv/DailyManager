class UserInvalidInputError extends Error {
    constructor(...params) {
      super(...params)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UserInvalidInputError)
      }
    }
}

module.exports = UserInvalidInputError