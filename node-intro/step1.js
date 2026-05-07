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

const filePath = process.argv[2];
cat(filePath);
