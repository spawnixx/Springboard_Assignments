process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
let items = require("../fakeDb");
let item = { name: "popsicle", price: 1.45 };

beforeEach(() => {
  let item = { name: "popsicle", price: 1.45 };

  items.push(item);
});

afterEach(() => {
  items.length = 0;
});

describe("GET /items", function () {
  test("Get all items", async function () {
    const res = await request(app).get("/items");
    const { items: resItems } = res.body;
    expect(res.statusCode).toBe(200);
    expect(resItems).toHaveLength(1);
  });
});

describe("POST /items", function () {
  test("Add a new item", async function () {
    const res = await request(app)
      .post("/items")
      .send({ name: "gummy bears", price: 2.45 });
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toHaveProperty("name");
    expect(res.body.item).toHaveProperty("price");
    expect(res.body.item.name).toEqual("gummy bears");
    expect(res.body.item.price).toEqual(2.45);
  });
});

describe("GET /items/:name", function () {
  test("Get a single item", async function () {
    const res = await request(app).get(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toEqual(item);
  });

  test("Responds with 404 if item not found", async function () {
    const res = await request(app).get("/items/0");
    expect(res.statusCode).toBe(404);
  });
});

describe("PATCH /items/:name", function () {
  test("Update a single item", async function () {
    const res = await request(app)
      .patch(`/items/${item.name}`)
      .send({ name: "whistle " });
    expect(res.statusCode).toBe(200);
    expect(res.body.item).toEqual({ name: "whistle ", price: 1.45 });
  });

  test("Responds with 404 if item not found", async function () {
    const res = await request(app).patch("/items/0").send({ name: "whistle " });
    expect(res.statusCode).toBe(404);
  });
});

describe("DELETE /items/:name", function () {
  test("Delete a single item", async function () {
    const res = await request(app).delete(`/items/${item.name}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
});
