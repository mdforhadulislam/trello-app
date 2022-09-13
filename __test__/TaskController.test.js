const app = require("../app/app");
const { taskCreate } = require("../db/config/taskCRUD");


describe("task method test", () => {
    test("task Create method", async () => {
      const createdTask = taskCreate("hello",true,"12334445")
      expect(createdTask).not.toBeNull()
      
    });
  });
  