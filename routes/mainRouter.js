const mainRouter = require("express").Router();
const Layout = require("../views/src/Layout");

mainRouter.get("/", (req, res) => {

  res.renderComponent(Layout, {});
});

module.exports = mainRouter;
