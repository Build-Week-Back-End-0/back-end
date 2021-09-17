const noMissingInformation = (req, res, next) => {
    const { nickname, species, h2oFrequency } = req.body;
    if (!nickname || !species || !h2oFrequency) {
        res.status(422).json({message: "The following entries: nickname, species, and h2oFrequency are required."})
    } else {
        next()
    }
}

module.exports = {
    noMissingInformation,
}