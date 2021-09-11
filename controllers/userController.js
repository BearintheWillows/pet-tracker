const User = require("../models/user");
const Pet = require("../models/pet");
const async = require("async");

exports.home = (req, res) => {
  res.render("home", { title: "User Home" });
  console.log("Welcome to Home page");
};

exports.createPet = (req, res) => {
  res.render("createPet", { title: "Create Pet" });
  console.log("Create a pet");
};
