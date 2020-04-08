const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model("Users", {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: "Hakeemullah",
    age: 'ali'
})

me.save().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

