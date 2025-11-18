const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Express app listening on port ${PORT}`);
});
