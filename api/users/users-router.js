const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res, next) => {
  Users.get()
    .then(usersList => {
      res.status(200).json(usersList);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Users.getById(id)
    .then(currentUser => {
      res.status(200).json(currentUser)
    })
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Users.update(id, req.body)
    .then(updated => {
      Users.getById(updated)
        .then(currentUser => {
          res.status(200).json(currentUser)
        }) 
    })
    .catch(next)
})

module.exports = router;