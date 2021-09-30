const PrivateKeyProvider = require("@truffle/hdwallet-provider");
     
      const privateKey =[
         "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",
         "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
         "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"
      ];

const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://127.0.0.1:8545");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    besuWallet: {
      provider: privateKeyProvider,
      network_id: "*"
    },
  }
};