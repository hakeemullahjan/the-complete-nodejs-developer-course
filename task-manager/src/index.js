const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
    // user.save().then((resp) => {
    //     res.status(201).send(resp)
    // }).catch((err) => {
    //     res.status(400).send(err)
    // })
})

app.get("/users", async (req, res) => {
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', "age", "password", "email"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid update" })
    }


    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})


app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    // task.save().then((resp => {
    //     res.status(201).send(resp)
    // })).catch((err) => {
    //     res.status(400).send(err)
    // })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/tasks", async (req, res) => {
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/tasks/:id", async (req, res) => {
    // Task.findById(req.params.id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })
    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates" })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log(`Server is up on port:${port}`)
})