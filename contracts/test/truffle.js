/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:3030/'));

module.exports =
{
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  rpc:
  {
    host:"0.0.0.0",
    port: 3030
  },
  networks:
  {
    'sawtooth':
    {
      network_id: '*',
      host: '127.0.0.1',
      from: '0x28454cad80a6e30087e1d9388a5c073a3cc4babb',
      port: 3030
    }
  }
};
