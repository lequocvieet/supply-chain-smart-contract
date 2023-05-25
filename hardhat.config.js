const { env } = require("process");

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.8.9",
        settings: {},
      },

      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.5.10",
        settings: {},
      },
      {
        version: "0.4.0",
        settings: {},
      },
      {
        version: "0.4.23",
        settings: {},
      },
      {
        version: "0.6.12",
        settings: {},
      },
      {
        version: "0.5.12",
        settings: {},
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.6.4",
        settings: {},
      },
      {
        version: "0.5.0",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      chainId: 31337,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/2e5775eb41aa490991bff9eb183e1122",
      accounts: [
        "0a6bbab2d0fb0d7b049ae0d8de395f4cfe9c3783ad302c56f21676fcc34f4fbe",
        "5d431bc2224a7b4e37dd111ffa80bc30416f4f65a66207c4f5778bccb9aa9380",
        "2324cf953808071c8c97002827d17d6db6e8911fc6262f43ffceb58df8131160",
      ],
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        `0xf11ec68ffa53f99716290b721d65db46436a1945e7508c9bca425c8b9b2ce97b`,
        "0x0e5bd123b6f03b2ffd5680e416c6bbfd3bc4713308d1e723cec000972a68241a",
        "0xa6a6002d7f3506627ff5bb342bad2ed4153970068461d875768388c2b245fdcb",
        "0x570d912352e0593b5e5aa6346665d9e4ce6b1ad12487a66afa5e8e92afd27ac3",
      ],
      allowUnlimitedContractSize: true,
      chainId: 1337,
    },
  },
};
