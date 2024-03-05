const { Router } = require("express");
const { userSignup, userLogin } = require("../controller/user");

const userRoute = Router();

userRoute.post("/signup", userSignup);
userRoute.post("/login", userLogin);

module.exports = { userRoute };