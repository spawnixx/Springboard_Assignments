process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");
const db = require("../db");
let testBook;

beforeEach(async () => {
  let result = await db.query(`
    INSERT INTO
      books (isbn, amazon_url,author,language,pages,publisher,title,year)
      VALUES(
        '123432122',
        'https://amazon.com/taco',
        'Elie',
        'English',
        100,
        'Nothing publishers',
        'my first book', 2008)
      RETURNING isbn`);

  testBook = result.rows[0].isbn;
});

describe("GET /books", function () {
  test("Gets a list of books", async function () {
    const response = await request(app).get("/books");
    const books = response.body.books;
    expect(books).toHaveLength(1);
    expect(books[0]).toHaveProperty("isbn");
  });
});

describe("GET /books/:isbn", function () {
  test("Gets a single book", async function () {
    const response = await request(app).get(`/books/${testBook}`);
    expect(response.body.book).toHaveProperty("isbn");
    expect(response.body.book.isbn).toBe(testBook);
  });

  test("Responds with 404 if can't find book", async function () {
    const response = await request(app).get(`/books/9999999999`);
    expect(response.statusCode).toBe(404);
  });
});

describe("POST /books", function () {
  test("Creates a new book", async function () {
    const response = await request(app).post("/books").send({
      isbn: "8198436441",
      amazon_url: "http://builder.com",
      author: "Brendan Kapcsos",
      language: "english",
      pages: 250,
      publisher: "The Book Builders",
      title: "The Book Builder's Guide to Starting Your Own Business",
      year: 2025,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.book).toHaveProperty("isbn");
  });

  test("Rejects invalid book data", async function () {
    const response = await request(app).post("/books").send({
      pages: "Not a number of pages",
      year: "Not a year",
    });
    expect(response.statusCode).toBe(400);
  });
});

describe("PUT /books/:isbn", function () {
  test("Updates a single book", async function () {
    const response = await request(app).put(`/books/${testBook}`).send({
      amazon_url: "http://UpdatedURL.com",
      author: "Updated Author",
      language: "updated language",
      pages: 150,
      publisher: "Updated Publisher",
      title: "Updated Title",
      year: 2025,
    });
    expect(response.body.book).toHaveProperty("isbn");
    expect(response.body.book.title).toBe("Updated Title");
  });
  test("Rejects invalid book data", async function () {
    const response = await request(app).put(`/books/${testBook}`).send({
      pages: "SO MANY PAGES",
    });
    expect(response.statusCode).toBe(400);
  });

  test("Responds with 404 if can't find book", async function () {
    await request(app).delete(`/books/${testBook}`);
    const response = await request(app).delete(`/books/${testBook}`);
    expect(response.statusCode).toBe(404);
  });
});

describe("DELETE /books/:isbn", function () {
  test("Deletes a single book", async function () {
    const response = await request(app).delete(`/books/${testBook}`);
    expect(response.body).toEqual({ message: "Book deleted" });
  });
});

afterEach(async function () {
  await db.query("DELETE FROM BOOKS");
});

afterAll(async function () {
  await db.end();
});
