const express = require("express");
const { validate } = require("../middleware/validate");
const { userSignupSchema, loginSchema } = require("../validations/user.validation");
const { userSignup, userLogin } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/register", validate(userSignupSchema), userSignup);
userRouter.post("/login", validate(loginSchema), userLogin)


module.exports = {
    userRouter
}