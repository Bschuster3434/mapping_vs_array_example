require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
              accounts: {
                count: 1000
            },
  networks: {
    hardhat: {
        accounts: {
            count: 1010
        }
    }
  }
};