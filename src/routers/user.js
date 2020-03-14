const express = require('express');

const Router = express.Router();
const userController = require('../controllers/user');
Router
.post('/insert', userController.insertUser)
.post('/login', userController.loginUser)
.get('/', userController.getUser)

module.exports = Router;