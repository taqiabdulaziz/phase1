const express = require(`express`)
let app = express()

let factories = require(`./routes/factories.js`)
let robots = require(`./routes/robots.js`)

app.set(`view engine`, `ejs`)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(`/factories`, factories)
app.use(`/robots`, robots)

app.listen(3000, function() {
    console.log(`listening to port 3000`);

})