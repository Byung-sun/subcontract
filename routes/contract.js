var express = require("express");
var router = express.Router();

module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("contract");
  });

  router.route("/detail").post(function (req, res, next) {
    const document_num = req.body.document_num;
    console.log(document_num);
    res.render("contract2", { name: document_num });
  });

  router.route("/confirm").post(function (req, res, next) {
    res.render("confirm_contract");
  });

  router.route("/confirm_h").get(function (req, res, next) {
    res.render("confirm_contract_h");
  });

  router.route("/company").get(function (req, res, next) {
    res.render("company_list");
  });

  router.route("/company_h").get(function (req, res, next) {
    res.render("company_list_h");
  });

  router.route("/list").get(function (req, res, next) {
    res.render("contract_list");
  });

  router.route("/view").get(function (req, res, next) {
    res.render("view_contract");
  });

  return router;
};
