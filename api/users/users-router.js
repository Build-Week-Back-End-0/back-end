const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res, next) => {
  Users.get()
    .then(usersList => {
      res.status(200).json(usersList);
    })
    .catch(next);
});

module.exports = router;