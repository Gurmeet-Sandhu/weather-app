const app = require("./app")()
const request = require("supertest")

describe("successfully returning the page", () => {
    test("should succesfully return the main page", (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})