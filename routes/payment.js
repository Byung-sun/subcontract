var express = require("express");
var router = express.Router();


module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("payment/payment_company");
  });

  router.route("/list").get(function (req, res, next) {
    res.render("payment/payment_list");
  });

  router.route("/request").get(function (req, res, next) {
    res.render("payment/request_payment");
  });

  router.route("/view").get(function (req, res, next) {
    res.render("payment/view_payment");
  });

  router.route("/refuse").get(function (req, res, next) {
    res.render("payment/refuse_payment");
  });

  return router;
};
