const express = require("express")
require("./db/mongoose")
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app = express()
const port = process.env.PORT || 3000

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

myFunc()