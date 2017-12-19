module.exports = {
  networks: {
    development: {
      host: "172.21.0.5",
      port: 8545,
      network_id: "*",
      gas: 4710000
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      gas: 4710000
    }
  }
};
