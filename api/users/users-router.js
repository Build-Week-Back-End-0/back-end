const router = require("express").Router();
const Users = require("./users-model.js");
const jwt = require("jsonwebtoken");
const { checkUserExists } = require("./users-middleware");

// router.get("/", (req, res, next) => {
//   Users.get()
//     .then((usersList) => {
//       res.status(200).json(usersList);
//     })
//     .catch(next);
// });

router.get("/plants", checkUserExists, (req, res, next) => {
  const token = req.headers.authorization;
  const id = jwt.decode(token);
  Users.getUserPlants(id.subject)
    .then((selectedUser) => {
      res.status(200).json(selectedUser);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  const token = req.headers.authorization;
  const id = jwt.decode(token);
  Users.getById(id.subject)
    .then((currentUser) => {
      res.status(200).json(currentUser);
    })
    .catch(next);
});

router.put("/", checkUserExists, (req, res, next) => {
  const token = req.headers.authorization;
  const id = jwt.decode(token);
  Users.update(id.subject, req.body)
    .then(() => {
      res.status(200).json({ message: "User info updated" });
    })
    .catch(() => {
      res.status(500).json({ message: "Invalid change." });
    });
});

module.exports = router;
