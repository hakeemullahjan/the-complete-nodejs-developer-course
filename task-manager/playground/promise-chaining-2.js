require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete('5e8d82ff1229800b3437159e').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})