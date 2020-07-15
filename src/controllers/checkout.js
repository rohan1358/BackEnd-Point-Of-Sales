const checkoutModel = require("../models/checkout");
const miscHelper = require("../helper/helper");

// kontroller checkout
module.exports = {
  checkoutOrder: (req, res) => {
    const { invoices, total } = req.body;
    const data = {
      invoices,
      total
    };
    console.log(req.body)
    checkoutModel
      .checkoutOrder(data)
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
