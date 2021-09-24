const Users = require("./users-model");
const jwt = require("jsonwebtoken");

const checkUserExists = (req, res, next) => {
  const token = req.headers.authorization;
  const id = jwt.decode(token);
  //   const { id } = req.params;
  Users.getById(id.subject)
    .then((exists) => {
      if (!exists) {
        res.status(401).json({ message: `User does not exist.` });
      } else {
        next();
      }
    })
    .catch(next);
};

module.exports = {
  checkUserExists,
};
