const route = require(`express`).Router()
const Model = require(`../models`)

route.get(`/`, (req, res) => {
    res.send(`reviews`)
})

route.get(`/:id`, (req, res) => {
    res.render(`./review/addReview.ejs`, {
        id: req.params.id
    })
})

route.post(`/:id`, (req, res) => {
    Model.Review.create({
        description: req.body.description,
        bintang: req.body.bintang,
        MovieId: req.params.id
    }).then((result) => {
        res.redirect(`/movies/${req.params.id}`)
    }).catch((err) => {
        res.send(err)
    });
})

module.exports = route