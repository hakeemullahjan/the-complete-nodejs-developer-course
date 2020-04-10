const express = require("express")
const Task = require("../models/task")
const auth = require("../middleware/auth")
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body)

    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
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

router.get("/tasks", auth, async (req, res) => {
    const match = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })

    try {
        // const task = await Task.find({})
        // const task = await Task.find({ owner: req.user._id })
        // res.send(task)

        // await req.user.populate('tasks').execPopulate()
        await req.user.populate({
            path: "tasks",
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            }
        }).execPopulate()

        res.send(req.user.tasks)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id
    // Task.findById(req.params.id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })
    try {
        // const task = await Task.findById(req.params.id)
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch("/tasks/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates" })
    }

    try {
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        // const task = await Task.findById(req.params.id)
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/tasks/:id", auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router