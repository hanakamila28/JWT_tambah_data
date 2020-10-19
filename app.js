require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const userRouter = require("./api/users/user.router");
const bodyParser = require('body-parser')
// const itemRouter = require("./api/barang/barang.router")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/api/users", userRouter);
// app.use("/api/item", itemRouter)
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.listen(process.env.APP_PORT, () => {
  console.log("running on port " + process.env.APP_PORT);
});

module.exports = app;