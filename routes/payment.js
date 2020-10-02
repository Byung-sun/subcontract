var express = require("express");
var router = express.Router();

module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("payment_company");
  });

  router.route("/list").get(function (req, res, next) {
    res.render("payment_list");
  });

  router.route("/request").get(function (req, res, next) {
    res.render("request_payment");
  });

  router.route("/view").get(function (req, res, next) {
    res.render("view_payment");
  });

  router.route("/refuse").get(function (req, res, next) {
    res.render("refuse_payment");
  });

  return router;
};
