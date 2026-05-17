const express = require("express");
const app = express();

const ExpressError = require("./expressError");
const {
  validateNumbers,
  calculateMean,
  calculateMedian,
  findMode,
} = require("./helpers");

app.get("/mean", (req, res) => {
  if (!req.query.numbers) {
    throw new ExpressError("Numbers query parameter is required", 400);
  }
  let numbersAsStrings = req.query.numbers.split(",");
  let numbers = validateNumbers(numbersAsStrings);
  if (numbers instanceof Error) {
    throw new ExpressError(nums.message, 400);
  }

  let result = {
    operation: "mean",
    value: calculateMean(numbers),
  };
  return res.send(result);
});

app.get("/median", (req, res) => {
  if (!req.query.numbers) {
    throw new ExpressError("Numbers query parameter is required", 400);
  }

  let numbersAsStrings = req.query.numbers.split(",");
  let numbers = validateNumbers(numbersAsStrings);
  if (numbers instanceof Error) {
    throw new ExpressError(numbers.message, 400);
  }

  let result = {
    operation: "median",
    value: calculateMedian(numbers),
  };
  return res.send(result);
});

app.get("/mode", (req, res) => {
  if (!req.query.numbers) {
    throw new ExpressError("Numbers query parameter is required", 400);
  }

  let numbersAsStrings = req.query.numbers.split(",");
  let numbers = validateNumbers(numbersAsStrings);
  if (numbers instanceof Error) {
    throw new ExpressError(numbers.message, 400);
  }

  let result = {
    operation: "mode",
    value: findMode(numbers),
  };
  return res.send(result);
});

app.use((req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
