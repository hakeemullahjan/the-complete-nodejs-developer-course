const express = require("express")
require("./db/mongoose")
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     if (req.method === 'GET') {
//         res.send("GET request are disabled")
//     } else {
//         next()
//     }
// })

// app.use(((req, res, next) => {
//     res.status(503).send("Maintainace message")
// }))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port:${port}`)
})


const bcrypt = require("bcryptjs")
const myFunc = async () => {
    const password = 'ali1212'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log(password)
    console.log(hashedPassword)

    const isMatched = await bcrypt.compare('ali12121', hashedPassword)
    console.log(isMatched)
}
// myFunc()

const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id: "abc123" }, 'thisisnewcourse', { expiresIn: "1 seconds" })
    console.log(token)

    const data = jwt.verify(token, 'thisisnewcourse')
    console.log(data)
}
// myFunction()

const pet = {
    name: "germani"
}

pet.toJSON = function () {
    console.log(this)
    return {}
}

console.log(JSON.stringify(pet))

