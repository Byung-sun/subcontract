var express = require("express");
var router = express.Router();

module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("contract/contract");
  });

  router.route("/detail").post(function (req, res, next) {
    const a = req.body.a;
    const b = req.body.b;
    const c = req.body.c;
    const d = req.body.d;
    const e = req.body.e;
    const f = req.body.f;
    const g = req.body.g;
    const h = req.body.h;
    const i = req.body.i;
    const j = req.body.j;
    const k = req.body.k;
    const contract_info = a + "," + b + "," + c + "," + d + "," + e + "," + f + "," + g + "," + h + "," + i + "," + j + "," + k;
    console.log(contract_info);
    res.render("contract/contract2", { contract_info: contract_info });
  });

  router.route("/confirm").post(function (req, res, next) {
    const a = req.body.a;
    const b = req.body.b;
    const c = req.body.c;
    const d = req.body.d;
    const e = req.body.e;
    const f = req.body.f;
    const g = req.body.g;
    const h = req.body.h;
    const i = req.body.i;
    const contract_info = a + "," + b + "," + c + "," + d + "," + e + "," + f + "," + g + "," + h + "," + i;
    res.render("contract/confirm_contract", {contract_info: contract_info});
  });

  router.route("/sign").post(function (req, res, next) {
    const a = req.body.a;
    const contract_info2 = a.split(",");
    console.log(contract_info2);
    res.redirect("/");
  });

  router.route("/modify").post(function (req, res, next) {
    res.render("contract/modify_contract");
  });

  router.route("/confirm_h").get(function (req, res, next) {
    res.render("contract/confirm_contract_h");
  });

  router.route("/company").get(function (req, res, next) {
    res.render("contract/company_list");
  });

  router.route("/company_h").get(function (req, res, next) {
    res.render("contract/company_list_h");
  });

  router.route("/list").get(function (req, res, next) {
    res.render("contract/contract_list");
  });

  router.route("/view").get(function (req, res, next) {
    res.render("contract/view_contract");
  });

  return router;
};
