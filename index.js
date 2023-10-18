const express = require("express");
const pkmRouter = require("./router/PkmRouter");
const userRouter = require("./router/UserRouter");
const cookieParser = require("cookie-parser");
require('dotenv').config()
const app = express();
const port = 3000;
const mongoose = require("mongoose");
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use("/pkm", pkmRouter);

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(port, () => {
  console.log("Server started at port http://localhost:" + port);
});
