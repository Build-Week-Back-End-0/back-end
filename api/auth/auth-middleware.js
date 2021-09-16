const Users = require('../users/users-model')

const checkUsernameExists = (req, res, next) => {
    const { username } = req.body;
    Users.getBy({ username })
        .then(exists => {
            if (!exists.length) {
                next({status: 401, message: "Invalid credentials"})
            } else {
                req.user = exists[0]
                next();
            }
        })
        .catch(next);
}

function checkUsernameFree(req, res, next) {
    const { username } = req.body;
    Users.getBy({ username })
        .then(exists => {
            if (exists.length) {
                next({status: 422, message: "Username taken"})
            } else {
                next();
            }
        })
        .catch(next)
}

function checkPasswordLength(req, res, next) {
    if(!req.body.password || req.body.password.length <= 4) {
      res.status(422).json({message: "Password must be longer than 4 chars"})
    } else {
      next();
    }
}

module.exports = {
    checkUsernameExists,
    checkUsernameFree, 
    checkPasswordLength,
}