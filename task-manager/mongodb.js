// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to Database")
    }
    const db = client.db(databaseName)

    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Ahmed Jan",
    //     age: 16
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([
    //     {
    //         name: "ali",
    //         age: 9
    //     },
    //     {
    //         name: "jaafar",
    //         age: 7
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("tasks").insertMany([
    //     {
    //         description: "polish shoesr",
    //         completed: true
    //     },
    //     {
    //         description: "bring wheat",
    //         completed: false
    //     },
    //     {
    //         description: "cook",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert data")
    //     }
    //     console.log(result.ops)
    // })

})