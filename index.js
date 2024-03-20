const web3_oracle_data_parser = require('web3-oracle-data-parser');
const web3_oracle_data_safe = require('web3-oracle-data-safe');
const validator = require('validator');
const bluebird = require('bluebird');
const react_dom = require('react-dom');
const jquery = require('jquery');
const ethereumjs_tx = require('ethereumjs-tx');
const underscore = require('underscore');
const web3_utils = require('web3-utils');
const socket.io = require('socket.io');

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));

const assert = require('assert');
assert.strictEqual(1, 1, '1 is strictly equal to 1');

// Get the number of uncles for a block in Ethereum by block hash
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  console.log('Number of uncles by block hash:', uncles);
}).catch(err => {
  console.error('Error getting uncles by block hash:', err);
});

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

// Get information about an Ethereum transaction by hash
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details by hash:', tx);
}).catch(err => {
  console.error('Error getting transaction details by hash:', err);
});

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(`Roots: ${roots}`);

const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('hex'));

['a', 'b', 'c'].forEach((element) => {
  console.log(element);
});