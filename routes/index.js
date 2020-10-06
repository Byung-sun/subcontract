var express = require("express");
var router = express.Router();

module.exports = function () {
  router.get("/", function (req, res, next) {
    res.render("index/login");
  });

  router.route("/signup").get(function (req, res, next) {
    res.render("index/signUp");
  });

  router.route("/confirm_email").get(function (req, res, next) {
    //email 인증 번호
  });

  router.route("/create_id").post(function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const company_num = req.body.company_num;
    const company_name = req.body.company_name;
    const person_name = req.body.person_name;
    const phone = req.body.phone;
    const company_address = req.body.company_address;
    console.log(
      "email = ",
      email,
      "password = ",
      password,
      "company = ",
      company_num,
      company_name,
      company_address,
      "person = ",
      person_name,
      phone
    );
    res.redirect("/");
  });

  router.route("/find_id").get(function (req, res, next) {
    res.render("index/findId");
  });

  router.route("/search_id").post(function (req, res, next) {
    const company_num = req.body.company_num;
    console.log("company_num = ", company_num);
    res.redirect("/");
  });

  router.route("/find_pass").get(function (req, res, next) {
    res.render("index/findPw");
  });

  router.route("/search_pass").post(function (req, res, next) {
    const company_num = req.body.company_num;
    const email = req.body.email;
    console.log("company_num = ", company_num, "email = ", email);
    res.redirect("/");
  });

  router.route("/main").post(function (req, res, next) {
    const id = req.body.email;
    const pass = req.body.password;
    console.log("id = ", id, "pass = ", pass);

    res.render("index/main");
  });

  return router;
};
