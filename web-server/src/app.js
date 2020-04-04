const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "WEATHER APP",
        name: "Hakeemullah Yousufzai"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "ABOUT ME",
        name: "Hakeemullah JAn"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        message: "This is help message",
        title: "Help",
        name: "Hakeemullah"
    })
})

// app.get('/', (req, res) => {
//     res.send("<h1>Weather App</h1>")
// })

// app.get("/help", (req, res) => {
//     res.send(
//         [
//             { name: "Hakeemullah" },
//             { name: "yousufzai" }
//         ]
//     )
// })

// app.get("/about", (req, res) => {
//     res.send("<h1>About Page</h1>")
// })

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "you must provide an address"
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error: error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: error })
            }
            res.send({
                address: req.query.address,
                forecast: forecastData,
                location: location
            })
        })
    })

})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "you must provide a search term"
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get("/help/*", (req, res) => {
    res.render("error", {
        errorMessage: "Help article not found",
        title: "404",
        name: "HJY"
    })
})

app.get("*", (req, res) => {
    res.render('error', {
        errorMessage: "404 NOT FOUND",
        title: "404",
        name: "HJY"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})