const express = require('express');
const {authorization} = require('../middlewares/auth.middleware')
const { register, login, logout } = require('../controllers/user.controllers');

const userRouter = express.Router();


//registration route
userRouter.post('/register', register);


//login route
userRouter.post('/login', login);

userRouter.use(authorization);
userRouter.post('/logout', logout);

module.exports = userRouter
