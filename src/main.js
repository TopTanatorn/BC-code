const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const {Blockchain, Transaction} = require('./blockchain');

const myKey = ec.keyFromPrivate('4f498a1233195dde48387a74fa4d3a5f2eddc95720fda1af0e0fec0487f79d97');
const myWalletAddress = myKey.getPublic('hex');

let topCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress,'public key goes here', 10);
tx1.signTransaction(myKey);
topCoin.addTransaction(tx1);


console.log('\n Strating the miner...');
topCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of top is', topCoin.getBalanceOfAddress(myWalletAddress));

