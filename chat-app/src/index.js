const express = require("express")
const path = require("path")
const port = process.env.PORT || 3000
const http = require("http")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

let count = 0
io.on("connection", (socket) => {
    console.log("New WebSocket connection")

    socket.emit("countUpdate", count)

    socket.on("increment", () => {
        count++
        // socket.emit("countUpdate", count)
        io.emit("countUpdate", count)
    })

})

server.listen(port, () => {
    console.log(`Server is up on port:${port}`)
})