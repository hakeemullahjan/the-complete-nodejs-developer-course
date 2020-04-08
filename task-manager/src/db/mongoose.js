const mongoose = require('mongoose')
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model("Users", {
    name: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be positive number")
            }
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid!")
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error("Please enter correct 'password'")
            }
        }
    }

})

// const me = new User({
//     name: "   SDfsdfsa            ",
//     email: 'hDDDj@hjo',
//     password: "             123456           "
// })

// me.save().then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error.message)
// })

const Tasks = mongoose.model("Tasks", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    // description: "Clean house",
    completed: true
})

task.save().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err.message)
})
