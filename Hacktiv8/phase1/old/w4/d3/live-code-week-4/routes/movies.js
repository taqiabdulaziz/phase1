const route = require(`express`).Router()
const Model = require(`../models`)
const formatDate = require(`../helpers/formatDate`)
const getSummary = require(`../helpers/getSummary`)
route.get(`/`, (req, res) => {
    Model.Movie.findAll()
        .then((result) => {
            // res.send(result)
            res.render(`./movie/index.ejs`, {
                data: result
            })
        }).catch((err) => {
            res.send(err)
        });
})

route.get(`/:id`, (req, res) => {
    Model.Movie.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((result) => {
            Model.Review.findAll({
                where: {
                    MovieId: req.params.id
                }
            }).then((resultReview) => {       
                // res.send(resultReview)
                res.render(`./movie/movieDetail.ejs`, {
                    data: result,
                    review: resultReview,
                    formatDate: formatDate,
                    getSummary: getSummary
                })
                
            }).catch((err) => {
                
            });
        // res.send(result)
        
    }).catch((err) => {
        
    });
})

module.exports = route