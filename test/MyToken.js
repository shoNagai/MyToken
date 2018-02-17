var MyToken = artifacts.require("../contracts/MyToken.sol");

contract('MyToken', function(accounts) {

  it("should put 1000 MyToken in the first account", function() {
    return MyToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account")
    });

  });
});