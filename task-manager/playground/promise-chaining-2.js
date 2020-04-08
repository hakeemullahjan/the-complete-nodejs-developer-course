require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete('5e8d82ff1229800b3437159e').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const incompleteTasks = await Task.countDocuments({ completed: true })
    return incompleteTasks
}

deleteTaskAndCount("5e8dbafdbb3e0b24cc4cc102").then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})