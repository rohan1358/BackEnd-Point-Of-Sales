const checkoutModel = require("../models/checkout");
const miscHelper = require("../helper/helper");

// kontroller checkout
module.exports = {
  checkoutOrder: (req, res) => {
    const id_order = req.body.id_order;
    checkoutModel
      .checkoutOrder(id_order)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  history: (req, res) => {
    checkoutModel
      .history()
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
