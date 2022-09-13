const app = require("../app/app");
const request = require("supertest");

describe("list api testing", () => {
  test("get list controlllter", async () => {
    const respons = await request(app).get("/api/v1/lists/?bi=68TEpN2Wo");
    expect(respons.body).not.toBeNull();
  });
});
