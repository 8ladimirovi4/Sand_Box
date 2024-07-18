const realTimeRouter = require("express").Router();
const path = require("path");

//ROUTES (/real_time)'
//get HTML
realTimeRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../public/pages/real_time", "real_time.html")
  );
});
module.exports = realTimeRouter;
