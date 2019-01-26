const Web3 = require('web3');
const contract_abi = require('../contracts/HelloWorld.json')['abi']
const web3 = new Web3('http://localhost:7545'); //depends on local
const eth_main_address = "0xa9f86029019B1378A4fAe10C9D2aD600f48D7DAC";
const contract_address = "0xd884e937d4e004a167627be0971571fd99a5c354";
const vt = new web3.eth.Contract(contract_abi, contract_address);
const gasLimit = "3000000"

console.log(vt.methods.displayMessage().call())

//var result = contractInstance.createTableToken(1, "some_table", "some_database");
//console.log(result)
//var result = UserAuthContract.methods.createTableToken.sendTransaction(1, "some_table", "some_database").send({ from: eth_main_address, gas: gasLimit })
//var result = UserAuthContract.methods.balanceOf(eth_main_address).call().then(console.log);




//web3.eth.getAccounts(console.log);
