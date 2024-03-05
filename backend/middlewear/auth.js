// middleware.js

const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Authentication failed! Please authenticate using a valid TOKEN" });
  } else {
    try {
      const data = jwt.verify(token, "secrete_ecom");
      req.user = data.user;
      next();
    } catch (errors) {
      res.status(401).send({ errors: "Authentication failed! Please authenticate using a valid PROFILE" });
    }
  }
};

module.exports = { verifyToken };
