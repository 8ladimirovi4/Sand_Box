const React = require("react");
const ReactDOMServer = require("react-dom/server");

const mainRouter = require("express").Router();
const Home = require("../views/src/Home");

mainRouter.get("/", (req, res) => {
     res.renderComponent(Home, {});
});

module.exports = mainRouter;
