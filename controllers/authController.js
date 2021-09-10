const User = require("../models/user");
const { body, validationResult } = require("express-validator");

//Display login page

exports.index = (req, res) => {
  res.render("index", { title: "Pet-tracker Login" });
  console.log("Welcome to login page");
};
