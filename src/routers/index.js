const express = require("express");
const product = require("./product");
const category = require("./category");
const order = require("./order");
const checkout = require("./checkout");
const user = require("./user");

const Router = express.Router();

Router.use("/product", product);
Router.use("/category", category);
Router.use("/user", user);
Router.use("/order", order);
Router.use("/checkout", checkout);

Router.use;
module.exports = Router;
