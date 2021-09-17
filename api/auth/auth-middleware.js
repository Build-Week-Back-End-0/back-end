const Users = require('../users/users-model')

const checkUsernameExists = (req, res, next) => {
    const { username } = req.body;
    Users.getBy({ username })
        .then(exists => {
            if (!exists.length) {
                res.status(401).json({message: "Invalid credentials"})
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
                res.status(422).json({message: "Username taken"})
            } else {
                next();
            }
        })
        .catch(next)
}

const noMissingCredentials = (req, res, next) => {
    const { username, password } = req.body;
    if (username === undefined || !password) {
        res.status(422).json({message: "Both username and password are required."})
    } else {
        next()
    }
}

module.exports = {
    checkUsernameExists,
    checkUsernameFree, 
    noMissingCredentials,
}