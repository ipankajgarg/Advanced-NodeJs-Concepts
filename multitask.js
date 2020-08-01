// process.env.UV_THREADPOOL_SIZE = 1;

const https = require("https");
// const crypto = require("crypto");
const fs = require("fs");

// const start = Date.now();

// function doRequest() {
//   https
//     .request("https://www.google.com", res => {
//       res.on("data", () => {});
//       res.on("end", () => {
//         console.log(Date.now() - start);
//       });
//     })
//     .end();
// }

// function doHash() {
//   crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//     console.log("Hash", Date.now() - start);
//   });
// }

// doRequest();

// doHash();
// doHash();
// doHash();
// doHash();

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile("multitask.js", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  //   console.log("done reading file", Date.now() - timeoutScheduled);
});
