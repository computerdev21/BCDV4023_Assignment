require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/KVMwZAkdCm4qDBNhBdC8d9YWvhuH1ArF',
      accounts: [`0x3b78e92e573e07f11e6382a9ecb49773f60cdfe05bf5e76c4dce90a864a51934`]
    }
  }
};
