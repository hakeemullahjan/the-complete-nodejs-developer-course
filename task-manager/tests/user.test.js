const request = require("supertest")
const app = require("../src/app")
const User = require("../src/models/user")
const { userOne, userOneId, setupDatabase } = require("./fixtures/db")

beforeEach(setupDatabase)

// afterEach(() => {
//     console.log('afterEach')
// })

test('should signup a new user', async () => {
    const response = await request(app).post("/users").send({
        name: "hakeemullah",
        email: "h.jan211@gmail.com",
        password: "12121212"
    }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        user: {
            name: "HAKEEMULLAH",
            email: "h.jan211@gmail.com",
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe("12121212")
})

test('should login existing user', async () => {
    const response = await request(app).post("/users/login").send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('should not login nonexisting user', async () => {
    await request(app).post("/users/login").send({
        email: "aaabaa@example.com",
        password: "12121212"
    }).expect(400)
})

test('should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).not.toBeNull()
})

test('should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('should delete account for user', async () => {
    await request(app)
        .delete("/users/me")
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete("/users/me")
        .send()
        .expect(401)
})

test('should upload avatar image', async () => {
    await request(app)
        .post("/users/me/avatar")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .attach("avatar", 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    const user = await User.findById(userOneId)
    // expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user field', async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "JACKSON"
        })
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toEqual('JACKSON')
})

test('should not update invalid user field', async () => {
    await request(app)
        .patch("/users/me")
        .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
        .send({
            city: "karachi"
        })
        .expect(400)
})
