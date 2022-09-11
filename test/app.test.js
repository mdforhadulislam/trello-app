const app = require("../app/app");
const request = require("supertest");

describe("first", () => {
  test("should work", async () => {
    console.log("my first test");
    let respons =  await request(app).get("/health/");
    expect(respons).not.toBeNull();
  });
});
