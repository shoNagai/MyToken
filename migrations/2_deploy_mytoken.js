var MyToken = artifacts.require("../contracts/MyToken.sol");

module.exports = function(deployer) {
  var initialSupply = 1000e18;
  deployer.deploy(MyToken, initialSupply, {
    gas:2000000
  });
}