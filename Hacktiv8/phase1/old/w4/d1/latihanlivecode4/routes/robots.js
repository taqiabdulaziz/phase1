let route = require(`express`).Router()
let Model = require(`../models`)
let Robot = Model.Robot

//ADD ROBOT TO FACTORY
route.get(`/register/:id`, function (req, res) {
    res.render(`add/addRobot.ejs`, {
        id: req.params.id
    })
})

route.post(`/register/:id`, function (req, res) {
    Robot.create({
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price,
        FactoryId: req.params.id
    }).then((result) => {
        res.redirect(`/factories/detail/${req.params.id}`)
    }).catch((err) => {
        res.send(err)
    });
})

route.get(`/buy/:robotId`, function (req, res) {
    let stock1 = 0
    Robot.findOne({
        where: {
            id: req.params.robotId
        }
    }).then((result) => {
        stock1 = result.stock - 1
        if (stock1 < 0) {
            res.send(`stock habis!`)
        } else {

            Robot.update({
                stock: stock1
            }, {
                    where: {
                        id: req.params.robotId
                    }
                }).then((data) => {
                    if (stock1 < 0) {
                        res.send(`stock habis!`)
                    } else {
                        res.redirect(`/factories/detail/${result.FactoryId}`)                        
                    }
                }).catch((err) => {
                    res.send(err)
                });
        }

    }).catch((err) => {
        res.send(err)
    });
})

route.get(`/produce/:robotId`, function (req, res) {
    let stock1 = 0
    Robot.findAll({
        where: {
            id: req.params.robotId
        }
    }).then((result) => {
        stock1 = result[0].stock + 1

        Robot.update({
            stock: stock1
        }, {
                where: {
                    id: req.params.robotId
                }
            }).then((data) => {
                res.redirect(`/factories/detail/${result[0].FactoryId}`)
                // res.send(`kamu berhasil produksi 1 robot dengan id ${req.params.robotId}`)
            }).catch((err) => {
                res.send(err)
            });
    }).catch((err) => {
        res.send(err)
    });
})


route.get(`/`, function (req, res) {
    res.send(true)
})

module.exports = route