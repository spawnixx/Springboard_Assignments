const fs = require("fs");
const a = require("axios");
const process = require("process");

// function cat(path) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//       return;
//     } else {
//       console.log(data.toString());
//     }
//   });
// }

// // const filePath = process.argv[2];
// // cat(filePath);

// async function webCat(url) {
//   try {
//     const response = await a.get(url);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }
// // const url = process.argv[2];
// // webCat(url);

// function catWrite(newFile, path) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.error(err);
//       process.exit(1);
//       return;
//     } else {
//       const content = data.toString();
//       fs.writeFile(newFile, content, (err) => {
//         if (err) {
//           console.error(err);
//           process.exit(1);
//         }
//         console.log("File written successfully.");
//       });
//     }
//   });
// }

// async function webCatWrite(newFile, url) {
//   try {
//     const response = await a.get(url);
//     fs.writeFile(newFile, response.data, (err) => {
//       if (err) {
//         console.error(err);
//         process.exit(1);
//       }
//       console.log("File written successfully.");
//     });
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// const input = process.argv[2];

// if (input.startsWith("http")) {
//   webCat(input);
// } else if (input.startsWith("--out")) {
//   if (process.argv[4].startsWith("http")) {
//     webCatWrite(process.argv[3], process.argv[4]);
//   } else {
//     catWrite(process.argv[3], process.argv[4]);
//   }
// } else {
//   cat(input);
// }

function handleOutput(text, output) {
  if (output) {
    fs.writeFile(output, text, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log("File written successfully.");
    });
  } else {
    console.log(text);
  }
}

function cat(path, output) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      handleOutput(data.toString(), output);
    }
  });
}

async function webCat(url, output) {
  try {
    const response = await a.get(url);
    handleOutput(response.data, output);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

let path;
let output;

if (process.argv[2] === "--out") {
  output = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.startsWith("http")) {
  webCat(path, output);
} else {
  cat(path, output);
}
