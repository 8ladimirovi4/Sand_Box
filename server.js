const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const config = require("./config/config");

const indexRouter = require("./routes/indexRouter");
const realTimeRouter = require("./routes/realTimeRouter");
const playBackRouter = require("./routes/playBackRouter");

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/cert.key")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/cert.pem")),
};

config(app);
app.use(cors());

//routers
app.use("/", indexRouter);
app.use("/real_time", realTimeRouter);
app.use("/playback", playBackRouter);

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Сервер запущен на https://127.0.0.1:${port}`);
});
