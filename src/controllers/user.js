require("dotenv").config();

const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const miscHelper = require("../helper/helper");

module.exports = {
  getUser: (req, res) => {
    userModel
      .getUser()
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  insertUser: (req, res) => {
    const { name, password, email } = req.body;

    const data = {
      name,
      password,
      email
    };
    userModel
      .insertUser(data)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  loginUser: (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    // console.log('bisa')
    userModel
      .loginUser(name, password)
      .then(result => {
        console.log(result.length);
        // res.json(result);
        if (result.length !== 0) {
          var token = jwt.sign(
            { name: name, password: password },
            process.env.PRIVATE_KEY
          );
          console.log(token);
          res.json({
            token: token
          });
        } else {
          res.json({
            message: "user tidak ditemukan"
          });
        }
      })
      .catch(err => console.log(err));
  }
};
