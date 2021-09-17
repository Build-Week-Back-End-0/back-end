const router = require("express").Router();
const Plants = require('./plants-model');

router.get("/", (req, res, next) => {
  Plants.get()
    .then(plantsList => {
      res.status(200).json(plantsList);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Plants.getById(id)
    .then(currentPlant => {
      res.status(200).json(currentPlant)
    })
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Plants.update(id, req.body)
    .then(updated => {
      Plants.getById(updated)
        .then(currentPlant => {
          res.status(200).json(currentPlant)
        }) 
    })
    .catch(next);
})

module.exports = router;