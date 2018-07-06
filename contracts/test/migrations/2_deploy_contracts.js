var Test = artifacts.require("./test.sol");

module.exports = function(deployer) {
  deployer.deploy(Test);
};
