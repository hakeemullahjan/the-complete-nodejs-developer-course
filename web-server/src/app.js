const express = require("express")
const app = express()
const path = require("path")

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

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
        message: "This is help message"
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
    res.send({
        forecast: "23 degree",
        location: "karachi"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})