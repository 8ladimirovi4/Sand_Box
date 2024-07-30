require("@babel/register");
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config/config");
const mainRouter = require("./routes/mainRouter");
const downloadsRouter = require("./routes/downloadsRouter");

const PORT = 3000;

config(app);
app.use(cors());

app.use("/", mainRouter);
app.use("/downloads", downloadsRouter);


app.listen(PORT, () => {
  console.log(`мы на порту ${PORT}`);
});
