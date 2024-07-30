
const homeRouter = require("express").Router();
const Home = require("../views/src/Home");


homeRouter.get("/", async (req, res) => {
  res.renderComponent(Home, {});
});

module.exports = homeRouter;
