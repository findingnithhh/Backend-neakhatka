import request from "supertest";
import app from "../../app"; // Assuming your Express app is exported from app.ts

describe("GET /", () => {
  it('responds with status 200 and "ok"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
