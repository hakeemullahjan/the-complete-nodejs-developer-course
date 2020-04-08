const mongoose = require('mongoose')
const validator = require("validator")

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

module.exports = User