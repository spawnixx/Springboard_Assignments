/** Command-line tool to generate Markov text. */
const fs = require("fs");
const { MarkovMachine } = require("./markov");
const axios = require("axios");
const process = require("process");

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

function makeText(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}: ${err.message}`);
      process.exit(1);
    }
    generateText(data);
  });
}

async function makeUrlText(url) {
  try {
    const response = await axios.get(url);
    generateText(response.data);
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
    process.exit(1);
  }
}

let [type, path] = process.argv.slice(2);

if (type === "file") {
  makeText(path);
} else if (type === "url") {
  makeUrlText(path);
} else {
  console.error(
    "Usage: node makeText.js file <file.txt> or node makeText.js url <url>",
  );
  process.exit(1);
}
