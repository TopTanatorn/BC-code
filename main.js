
const SHA256 = require('crypto-js/sha256');


class Block{
    constructor(index, timestamp ,data , previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}
class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block(0,"12/1/2022","Genesis block","0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        for(let i = 1;i< this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
    
}
let topCoin = new Blockchain();
topCoin.addBlock(new Block(1,"13/1/2022",{amout: 4}));
topCoin.addBlock(new Block(2,"14/1/2022",{amout: 10}));
console.log('Is blockchain vaild?'+ topCoin.isChainValid()); 

topCoin.chain[1].data = {amout: 100};
topCoin.chain[1].hash = topCoin.chain[1].calculateHash();

console.log('Is blockchain vaild?'+ topCoin.isChainValid()); 
// console.log(JSON.stringify(topCoin,null,4));