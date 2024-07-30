require("@babel/register");
const express = require("express");
const app = express();
const config = require("./config/config");
const mainRouter = require("./routes/mainRouter");
const homeRouter = require("./routes/homeRouter");

const PORT = 3000;

config(app);

app.use("/", mainRouter);
app.use("/home", homeRouter);


app.listen(PORT, () => {
  console.log(`мы на порту ${PORT}`);
});
