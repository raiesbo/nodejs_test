const path = require('path');
const express = require("express");
const hbs = require('hbs');

/*
console.log(__dirname)
console.log(path.join(__dirname, '../public/'))
*/
// The server never stops untill we decide to stop it. Onces init is always listening to sever the info
const app = express()
const port = 3000

// Difine paths for Express config
const publicDirectory = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // Since our directory is not called "view" anymore but "templates", here tell express where to loot for
hbs.registerPartials(partialsPath)

// Setup static directories to serve
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Raimon Espasa"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Raimon Espasa"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        message: "Here we are supposed to help your... somehow, i don't know...",
        name: "Raimon Espasa"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        "location": "Ney York",
        "forecast": "Is it 50° out there."
    })
})


app.listen(port, () => {
    console.log("Server is up on port 3000.")
})

