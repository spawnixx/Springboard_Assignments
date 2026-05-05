const connect = require("./db");

const runDatabaseQueries = async () => {
  const db = await connect();
  const movies = db.collection("movies");

  // Run this query, should get top 5 best rated movies on IMDB
  const topMovies = await movies
    .find({ "imdb.rating": { $gt: 8.0 } })
    .project({ title: 1, year: 1, "imdb.rating": 1 })
    .sort({ "imdb.rating": -1 })
    .limit(5)
    .toArray();

  console.log("Top Rated Movies:", topMovies);
  //CREATE
  // 1 Insert a New Document into the Users Collection: Practice adding a new user document to the users collection. Include fields name and email.
  const users = db.collection("users");
  const newUser = await users.insertOne({
    name: "Alleria Windrunner",
    email: "alleria.windrunner@example.com",
  });
  console.log("New User:", newUser);

  //READ
  // 1 Find all movies directed by Christopher Nolan.
  const nolanMovies = await movies
    .find({ director: "Christopher Nolan" })
    .project({ title: 1, year: 1 })
    .toArray();
  console.log("Christopher Nolan Movies:", nolanMovies);
  // 2 Find movies that include the genre "Action" and sort (descending) them by year.
  const actionMovies = await movies
    .find({ genres: "Action" })
    .project({ title: 1, year: 1 })
    .sort({ year: -1 })
    .toArray();
  console.log("Action Movies:", actionMovies);
  //3 Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.
  const highRatedMovies = await movies
    .find({ "imdb.rating": { $gt: 8 } })
    .project({ title: 1, "imdb.rating": 1 })
    .toArray();
  console.log("High Rated Movies:", highRatedMovies);
  //4 Find movies that starred both "Tom Hanks" and "Tim Allen".
  const tomAndTimMovies = await movies
    .find({ cast: { $all: ["Tom Hanks", "Tim Allen"] } })
    .project({ title: 1, cast: 1 })
    .toArray();
  console.log("Tom Hanks and Tim Allen Movies:", tomAndTimMovies);
  //5 Find movies that starred both and only "Tom Hanks" and "Tim Allen".
  const onlyTomAndTimMovies = await movies
    .find({
      cast: { $all: ["Tom Hanks", "Tim ALlen"] },
      "cast.2": { $exists: false },
    })
    .project({ title: 1, cast: 1 })
    .toArray();
  console.log("Only Tom Hanks and Tim Allen Movies:", onlyTomAndTimMovies);
  //6 Find comedy movies that are directed by Steven Spielberg.
  const spielbergComedyMovies = await movies
    .find({ genres: "Comedy", director: "Steven Spielberg" })
    .project({ title: 1, genres: 1, director: 1 })
    .toArray();
  console.log("Steven Spielberg Comedy Movies:", spielbergComedyMovies);

  //UPDATE
  //1 Add a new field "available_on" with the value "Sflix" to "The Matrix".
  const matrixAvailable = await movies.updateOne(
    { title: "The Matrix" },
    { $set: { available_on: "Sflix" } },
  );
  //2 Increment the metacritic of "The Matrix" by 1.
  const matrixMetacritic = await movies.updateOne(
    { title: "The Matrix" },
    { $inc: { metacritic: 1 } },
  );
  //3 Add a new genre "Gen Z" to all movies released in the year 1997.
  const genZMovies = await movies.updateMany(
    { year: 1997 },
    { $push: { genres: "Gen Z" } },
  );
  //4 Increase IMDb rating by 1 for all movies with a rating less than 5.
  const lowImdbMovies = await movies.updateMany(
    { "imdb.rating": { $lt: 5 } },
    { $inc: { "imdb.rating": 1 } },
  );
  //DELETE
  //1 Delete a comment with a specific ID.
  const { ObjectId } = require("mongodb");

  await movies.deleteOne({
    _id: new ObjectId("5a9427648b0beebeb69579e7"),
  });
  //2 Delete all comments made for "The Matrix".

  // const deleteMatrixComments = await comments.deleteMany({
  //   movie_id: new ObjectId(I deleted the matrix on accident so i can't find the ID)),
  // });

  //3 Delete all movies that do not have any genres.
  const deleteNoGenresMovies = await movies.deleteMany({
    genres: { $exists: false },
  });

  //AGGREGATE
  //1 Aggregate movies to count how many were released each year and display from the earliest year to the latest.
  const yearCount = await movies
    .aggregate([
      { $group: { _id: "$year", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ])
    .toArray();
  console.log("Year Count:", yearCount);
  //2 Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.
  const avgImdbByDirector = await movies
    .aggregate([
      { $group: { _id: "$director", avgImdb: { $avg: "$imdb.rating" } } },
      { $sort: { avgImdb: -1 } },
    ])
    .toArray();

  process.exit(0);
};

runDatabaseQueries();
