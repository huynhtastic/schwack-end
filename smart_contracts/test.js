Web3 = require('web3')
web3 = new Web3('http://localhost:8545')

abi = require('./build/contracts/HelloWorld.json')['abi']
addr = "0x1FD8c633946D4FB0D6e1c891f12279C6d61F14DA"

vt = new web3.eth.Contract(abi, addr)
console.log(vt.methods.displayMessage().call())
