import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  const requestedURL = req.url;
  let path = "./";

  switch (requestedURL) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact":
      path += "contact.html";
      break;
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
      return;
    }
    res.end(data);
  });
});

server.listen(8000);
