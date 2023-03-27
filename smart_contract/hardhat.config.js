require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
// contract: 0xA92dFf14e91e33Ed8e435eA3521Be66185EF54F0
// contract: 0xaA1845A914bB9C3eE59DcF61EC5688EAAbC8f1B9

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.Goe_API,
      accounts: [process.env.Private_Key],
    },
  },
  etherscan: {
    apiKey: process.env.Etherscan_API,
  },
};
