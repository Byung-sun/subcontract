const Migrations = artifacts.require("Migrations");
const subcontract = artifacts.require("subcontract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(subcontract);
};
