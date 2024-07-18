const playBackRouter = require("express").Router();
const path = require("path");

//ROUTES (/playback)'
//get HTML
playBackRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../public/pages/playback", "playback.html")
  );
});
module.exports = playBackRouter;
