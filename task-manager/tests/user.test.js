const request = require("supertest")
const app = require("../src/app")

test('should signup a new user', async () => {
    await request(app).post("/users").send({
        name: "hakeemullah",
        email: "h.jan211@gmail.com",
        password: "12121212"
    }).expect(201)
})
