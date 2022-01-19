import request from "supertest"

import { app } from "../app"

function randomString(len: Number) {
    var string = '';
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < len; i++) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return string;
}

describe("User Tests", () => {
    it("Should be return user token", async() => {

        const userTest = {
            "email": "usertest@gmail.com",
            "password": "123"
        }
        
        const response = await request.agent(app).post("/api/login").send(userTest)

        expect(response.body).toHaveProperty("token")
    })
    it("Should be create a new user", async () => {

        const newData = randomString(4)

        const newUserTest = {
            "name": newData,
            "email": newData,
            "password": "123"
        }

        const response = await request.agent(app).post("/api/signup").send(newUserTest)

        expect(response.status).toBe(200)

    })
    it("Should be return 401 (not authorized)", async() => {

        const response = await (await request.agent(app).get("/api/classes"))

        expect(response.status).toBe(401)
    })
})