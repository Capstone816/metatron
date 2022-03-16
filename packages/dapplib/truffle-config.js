require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember common half fashion flower ski'; 
let testAccounts = [
"0xada5d9204e6c0c03f817a2308b44b537c6f138d98f19d5d44af257957c610ba0",
"0xf62c647f1dae53e00e8921fea8fd3ea02a9b5afbacb8a79059189f75f7325140",
"0x864d6ecb2cc2c07df72de0fd77217956da13e5b91dddfe0fa83711a36b23e0b1",
"0x16730bd5ad8396b9435ab41c7a9bf56aef467190ca2df9b95cb1d14e88075e7a",
"0xeee8d28b0171f719d0b798113262d447f1f1d50d2669755310b43bd68f05a33f",
"0xe48dfedb638b0a56c96cf7c81e06fe7c2ebc2e22c4a4edfebe5f4162fc178cf3",
"0x5cfafeed1741a79e3692d294c14411c3e8a74945173b239dd33182dc8e432649",
"0xb8070a327ce883a4fec69da8dd1567a9d1ac72a4d41ec448b3059c857bc5be42",
"0x9d004ad568661958c458af734069014bf036eeb7679102339e57857fb333301c",
"0x93c888d3f7c726095a5ed095ce30703941df1bf2611c95077a1f47f6dc39c435"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

