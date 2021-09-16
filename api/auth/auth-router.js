const router = require('express').Router();
const { checkUsernameExists, checkPasswordLength, checkUsernameFree } = require('./auth-middleware');
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');

router.post("/register", checkPasswordLength, checkUsernameFree, (req, res, next) => {
    const user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
  
    Users.add(user)
      .then(addedUser => {
        res.status(201).json(addedUser);
      })
      .catch(next);
});

router.post("/login", checkUsernameExists, (req, res, next) => {
    const { username, password } = req.body;
    if (bcrypt.compareSync(password, req.user.password)) {
        const token = tokenBuilder(req.user)
        req.session.user = req.user
        res.status(200).json({message: `Welcome ${username}!`, token})
    } else {
        next({status: 401, message: "Invalid credentials"})
    }
})

router.get("/logout", (req, res, next) => {
    if (req.session.user) {
        req.session.destroy(error => {
          if (error) {
            res.status(200).json({message: "Error logging out."})
          } else {
            res.status(200).json({message: "Logged out."})
          }
        });
      } else {
        res.status(200).json({message: "There was no session to begin with."})
    }
})

module.exports = router;