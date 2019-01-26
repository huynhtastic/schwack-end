const Web3 = require('web3');
const contract_abi = require('./userauthenticate_abi.js');
//const fs = require("fs");
const web3 = new Web3('http://localhost:7545'); //depends on local
const eth_main_address = "0x08478FDeE12cb70eB9De7bF5098E72a1b92219c8";
const contract_address = "0x1d943Cef7f80Cc35c96BCfBed6143bD3f00EFdC5";
const UserAuthContract = web3.eth.Contract(contract_abi, contract_address);


console.log(UserAuthContract);


//web3.eth.getAccounts(console.log);
