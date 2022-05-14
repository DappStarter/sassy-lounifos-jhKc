require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strategy dash stick snake grid knee slot gift'; 
let testAccounts = [
"0xfa7e37cc81378c0b0f52fc4e551845faec348f448c2f75c51a4dda686d159d57",
"0x7908daae344b8361050a8fc9227ffe3c14b7ef475a191d4f9f897fc7a2ec04c3",
"0xa13b9f1bcf7ffd412be54b45b31d6b57f8f8d2d22de16e2bfd0989ddb54ef4a7",
"0xe011d3f199ed61c002bf16b3a14e9f4045758d15aafb779da74c4d14a947c937",
"0x41d93c90b89bf58610db0b655bd1a20ca56187b9b9702a8367265cc8de63cce4",
"0xe937002e2953495e20311343a8ec92a48df7e9574604a231e61e7588cb4c6f26",
"0x7f95d53f5c71be27ab9088f136ce9d8092a1ebd0d54b36c9c52242a0f5fdf4f4",
"0x5b99b40fa2e2dd2a466af28fbffd28df2056d2765cc868ab1e60e640999fff87",
"0xda71311ca26d59954670257aee441e6103a9214ebbd6f4c625c120da19a1d0d0",
"0xc86c4e1ce18fe41c7790b1eb57ee644324cd024b88b04b2b4a5dc2384852299f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


