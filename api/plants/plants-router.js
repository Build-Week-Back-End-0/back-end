const router = require("express").Router();
const Plants = require('./plants-model');
const { noMissingInformation } = require('./plants-middleware');

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

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    Plants.remove(id)
        .then(removed => {
            res.status(200).json(removed)
        })
        .catch(next);
})

router.post("/", noMissingInformation, (req, res, next) => {
    const plant = req.body;
  
    Plants.add(plant)
      .then(addedPlant => {
        res.status(201).json(addedPlant);
      })
      .catch(next);
});

module.exports = router;