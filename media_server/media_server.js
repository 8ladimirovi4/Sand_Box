const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const config = require("./config/config");
const realTimeRouter = require("./routes/realTimeRouter");


const app = express();
const port = 3001;

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/cert.key")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/cert.pem")),
};

app.use(cors());
config(app);
app.use("/real_time", realTimeRouter);

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Сервер запущен на https://127.0.0.1:${port}`);
});
