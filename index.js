process.env.UV_THREADPOOL_SIZE = 4;

// const cluster = require("cluster");

// // console.log(cluster.isMaster);

// // Is the file being executed in master moode
// const start = Date.now();
// if (cluster.isMaster) {
//   //cause index.js to be executed *again* but
//   //in child mode
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   //   cluster.fork();
//   //   cluster.fork();
//   //   cluster.fork();
//   // cluster.fork();
//   //   cluster.fork();
//   //   cluster.fork();
// } else {
// Im a child , Im going to act like a server
// and do nothing else
const crypto = require("crypto");

const express = require("express");
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  console.log("coming");
  // console.log(cluster.isMaster);

  doWork(1000);

  // crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  //   console.log("1:", Date.now() - start, start);
  //   res.send("hi there!");
  // });
  //console.log("1:", Date.now() - start, start);
  res.send("hi there!");
});

app.get("/fast", (req, res) => {
  res.send("This is fast");
});

app.listen(3000);
//}
