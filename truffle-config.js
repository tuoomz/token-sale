const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 9545,
      network_id: "*",
      host: "127.0.0.1"
    },  
    infura_gorli: {
      port: 80,
      network_id: "*",
      host: "https://goerli.infura.io/v3/0109766d4da04cb5a61da4177b773c9d"
    },  
    development: {
      port: 9545,
      network_id: "*",
      host: "127.0.0.1"
    },
    ganache_local: {
    provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545", MetaMaskAccountIndex )
    },
    network_id: 1337
    },
    infura: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/0109766d4da04cb5a61da4177b773c9d", MetaMaskAccountIndex )
      },
      network_id: 5,
      gas : 4700000,
      gasPrice : 1,
      },
      testnet: {
        provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
        network_id: 97,
        confirmations: 10,
        timeoutBlocks: 500,
        skipDryRun: true
      },
      bsc: {
        provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed1.binance.org`),
        network_id: 56,
        confirmations: 10,
        timeoutBlocks: 500,
        skipDryRun: true
      },
},
  compilers: {    
    solc: {
    version: "^0.6.1"
    }
}
};
