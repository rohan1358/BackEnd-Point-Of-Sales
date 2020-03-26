const express = require("express");

const Router = express.Router();
const orderController = require("../controllers/order");

Router

  .get("/history", orderController.history)

  // pagination
  .get("/page", orderController.pageOrder)
  // .get digunakan untuk menampilkan data
  .get("/", orderController.getOrder)
  // .post untuk melakukan order/product

  // .post('/', orderController.insertOrder) melakukan eksekusi terhadap function insertOrder yang berada pada file controllers/order
  .post("/", orderController.insertOrder)
  .get("/:id", orderController.orderDetail);

module.exports = Router;
