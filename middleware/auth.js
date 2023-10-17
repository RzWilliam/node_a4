const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(403).send("Access denied.");
    const decoded = jwt.verify(token, "mykey");
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
