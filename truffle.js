var config = require('./config');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = config.mnemonic;
var accessToken = config.infuraAccessToken;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks:{
    development:{
      host:"localhost",
      port:8545,
      network_id:"10"
    },
    ropsten:{
      provider:function(){
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id:3,
      gas:500000
    }
  }
};
