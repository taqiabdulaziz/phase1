let route = require(`express`).Router()
let Model = require(`../models`)
let Factory = Model.Factory

route.get(`/`, function(req, res) {
    Factory.findAll({
        include: {
            model: Model.Robot
        }
    }).then((result) => {
        res.render(`factory.ejs`, {
            result: result
        })
    }).catch((err) => {
        res.send(err)
    });
})

//DISPLAY ALL ROBOT
route.get(`/detail/:factoryId`, function(req, res) {
    Model.Robot.findAll({
        where: {
            FactoryId: req.params.factoryId
        },
        order: [[`name`,`ASC`]]
    }).then((result) => {
        Factory.findOne({
            where: {
                id: req.params.factoryId
            }
        }).then((data) => {
            res.render(`factoryRobot.ejs`, {
                result: result,
                data: data,
                id: req.params.factoryId
            })    
        }).catch((err) => {
            
        });
        
    }).catch((err) => {
        res.send(err)
    });
})

module.exports = route