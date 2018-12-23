const express = require(`express`)
const movies = require(`./routes/movies`)
const reviews = require(`./routes/reviews`)
const formatDate = require(`./helpers/formatDate`)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render(`index.ejs`)
});


app.locals.formatDate = formatDate  
app.use(`/movies`, movies)
app.use(`/reviews`, reviews)
app.get('/review', (req, res) => {
    res.send(`delete review`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});