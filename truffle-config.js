require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember protect grace crime obscure spawn'; 
let testAccounts = [
"0xc44bed6162435069c302fbb570cca530a1872e55764e4349bacabb96f34cf024",
"0xaa825c67a7b8ad64dc15fc7cd6162ac98f3cbb86ae0c7190937156a156cedf4f",
"0xbd059fb40bd92d0b29faf385d806807d0616b791af69024a18cfa3be4789e378",
"0x871b1ebe5000ffc83ecc1a2b85900967285f30d98e423ea643c2d56bf19b0a8c",
"0xb86431a6550e17b1b1a0b9df768396cba11d8de6a5f3ffebe3ed74edc87ff51e",
"0x7c6087fb45b3cce14b2ed9bc32332ef659341243d29adbe9f441804440f24351",
"0x3b7f750a68dfdc080c342bfb4be538faf33488d325b23e1cae5561ccaafa5bd0",
"0xde6dfd2a4f60cf0ca2beae060eaabcf4e2451111d9648bde59b4dead865db1df",
"0x948796862cec93540a13d5bff59d2d4d6f5af8bd322cc8920c3459aa7bf94925",
"0x29d723acebfb6e26d303f902ea5be35f7f4d6e2f3f70adbde69e87f3156d3697"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
