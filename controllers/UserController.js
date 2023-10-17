const User = require("../models/UserModel");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const SECRET = "mykey";

exports.createUser = (req, res) => {
  console.log("createuser");
  console.log(req.body);

  const u = new User({
    mail: req.body.mail,
    password: bcrypt.hashSync(req.body.password, salt),
  });
  u.save()
    .then(() => {
      res.status(200).json({ message: "User Created" });
    })
    .catch((error) => res.status(498).json({ error }));
};

exports.getUsers = (req, res) => {
  User.find()
    .then((user) => res.status(200).json({ user }))
    .catch((error) => res.status(400).json({ error }));
};

exports.loginUser = (req, res) => {
  let postMail = req.body.mail;
  let postPassword = req.body.password;

  User.findOne({ mail: postMail }).then((data) => {
    if (data == null) {
      return res.status(400).json("Wrong mail");
    } else {
      if (bcrypt.compareSync(postPassword, data.password)) {
        const token = jwt.sign(
          {
            id: data.id,
            mail: data.mail,
          },
          SECRET,
          { expiresIn: "6 hours" }
        );

        return res.status(200).json(token);
      } else {
        return res.status(400).json("Wrong Password");
      }
    }
  });
};
