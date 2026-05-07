const fs = require("fs");

function cat(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(data.toString());
    }
  });
}

// const filePath = process.argv[2];
// cat(filePath);

const a = require("axios");
async function webCat(url) {
  try {
    const response = await a.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
// const url = process.argv[2];
// webCat(url);

const input = process.argv[2];

if (input.startsWith("http")) {
  webCat(input);
} else {
  cat(input);
}
