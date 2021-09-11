const User = require("../models/user");
const Pet = require("../models/pet");
const async = require("async");

exports.petHome = (req, res) => {
  res.render("petHome", { title: "Pet Home" });
};

exports.petDetails = (req, res) => {
  res.render("petDetails", { title: "Pet Details" });
};

exports.addTrackable = (req, res) => {
  res.render("addTrackable", { title: "Add/Edit Trackable" });
};
