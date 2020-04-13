const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/user")

const userOne = {
    name: "Mike",
    email: "mike@example.com",
    password: 'aliali12'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

// afterEach(() => {
//     console.log('afterEach')
// })

test('should signup a new user', async () => {
    await request(app).post("/users").send({
        name: "hakeemullah",
        email: "h.jan211@gmail.com",
        password: "12121212"
    }).expect(201)
})

test('should login existing user', async () => {
    await request(app).post("/users/login").send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login nonexisting user', async () => {
    await request(app).post("/users/login").send({
        email: "aaabaa@example.com",
        password: "12121212"
    }).expect(400)
})
