require('../src/db/mongoose')
const User = require("../src/models/user")

User.findByIdAndUpdate('5e8d8d7270c0cb0f20c29179', { age: 90 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 90 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})