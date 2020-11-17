const path = require('path');
const express = require("express");
const hbs = require('hbs');

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

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
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address"
        })
    }


    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast( latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            } 

            return res.send({
                location,
                forecast: forecastData,
                address: req.query.address
            })

        })
    })

})



app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Raimon Espasa",
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Raimon Espasa",
        errorMessage: 'Page not found.'
    })
}) 


app.listen(port, () => {
    console.log("Server is up on port 3000.")
})

