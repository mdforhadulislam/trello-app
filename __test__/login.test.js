const app = require("../app/app")
const request = require("supertest")

describe("login testing",()=>{
    test("login POST api call",async()=>{
        const respons = request(app).post("/api/v1/auth/login").send({
            email:"mdforhad@gmail.com",
            password:"12"
        })
        expect(respons).not.toBeNull();
    })
})
