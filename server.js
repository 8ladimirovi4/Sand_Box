const express = require("express");
const https = require("https");
const path = require("path");
const fs = require('fs')
const cors = require("cors");
const config = require("./config/config");

const app = express();
const port = 3001;
const options = {
  key: fs.readFileSync(path.join(__dirname, "ssl/cert.key")),
  cert: fs.readFileSync(path.join(__dirname, "ssl/cert.pem")),
};

config(app);
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.get("/realtime", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "realtime.html"));
});

app.get("/playback", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "playback.html"));
});

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`Сервер запущен на https://127.0.0.1:${port}`);
});
