const {Blockchain, Transaction} = require('./blockchain');

let topCoin = new Blockchain();
topCoin.createTransaction(new Transaction('address1', 'address2', 100));
topCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Strating the miner...');
topCoin.minePendingTransactions('top-address');

console.log('\nBalance of top is', topCoin.getBalanceOfAddress('top-address'));

console.log('\n Strating the miner again...');
topCoin.minePendingTransactions('top-address');
console.log('\nBalance of top is', topCoin.getBalanceOfAddress('top-address'));