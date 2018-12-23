const route = require(`express`).Router()

route.get('/', (req, res) => {
    res.render(`./teacher/index.ejs`)
});

//wajib
module.exports = route