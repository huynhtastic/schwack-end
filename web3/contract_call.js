const Web3 = require('web3');
const contract_abi = require('./userauthenticate_abi.js');
//const fs = require("fs");
const web3 = new Web3('http://localhost:7545'); //depends on local
const eth_main_address = "0x08478FDeE12cb70eB9De7bF5098E72a1b92219c8";
const contract_address = "0x924c12DBbD8F945525240c99eCF35bCA86EE766d";
const UserAuthContract = web3.eth.Contract(contract_abi);
const gasLimit = "3000000"
var contractInstance = UserAuthContract.at(contract_address);


var result = contractInstance.createTableToken(1, "some_table", "some_database");
console.log(result)
//var result = UserAuthContract.createTableToken.sendTransaction(1, "some_table", "some_database").send({ from: eth_main_address, gas: gasLimit })
//var result = UserAuthContract.methods.balanceOf(eth_main_address).call().then(console.log);


//console.log(UserAuthContract);


//web3.eth.getAccounts(console.log);
