require("dotenv").config();

const connecttion = require("../configs/db");

module.exports = {
  checkoutOrder: data => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "INSERT INTO checkout SET ?",
        data,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  history: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "SELECT * FROM checkout",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
