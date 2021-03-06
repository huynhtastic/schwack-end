var userauthenticate_abi = [
  {
    "contractName": "UserAuthenticate",
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x01ffc9a7"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x06fdde03"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x081812fc"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x095ea7b3"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x40c10f19"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x42842e0e"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_tableId",
            "type": "uint256"
          },
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_database",
            "type": "string"
          }
        ],
        "name": "createTable",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x51d71816"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "unfreezeOf",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x5772437f"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "freeze",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x62a5af3b"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "transferAccess",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x66e759ee"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "unfreeze",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6a28f000"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x715018a6"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tables",
        "outputs": [
          {
            "name": "creationId",
            "type": "uint256"
          },
          {
            "name": "tableId",
            "type": "uint256"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "database",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x71671bf2"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "transferAccessOff",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x71cea5ae"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "transferAccessOn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x86886a38"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8da5cb5b"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8f32d59b"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x95d89b41"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x983b2d56"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x98650275"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa22cb465"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isMinter",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xaa271e1a"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "freezed",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xb7540d9f"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb88d4fde"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "freezeOf",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xcd4217c1"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe985e9c5"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tableToOwner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xefba4f36"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xf2fde38b"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Freeze",
        "type": "event",
        "signature": "0x615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Unfreeze",
        "type": "event",
        "signature": "0x2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "to",
            "type": "address"
          }
        ],
        "name": "Freeze",
        "type": "event",
        "signature": "0xaf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc323049"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "to",
            "type": "address"
          }
        ],
        "name": "UnfreezeOf",
        "type": "event",
        "signature": "0x8c6eeed3d39dffff685e18609fe88a9ac5445fe9e5e040bad017160a1c36a38c"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "TransferAccessOn",
        "type": "event",
        "signature": "0x6ca27a1cd0d569bf14783cb6e210f86fde6257948765cf6b00e203620a66f336"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "TransferAccessOff",
        "type": "event",
        "signature": "0x6c2d504e07f6ab725bcb41deee55a5809ecdca13297f060fa925865af3915fbd"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterAdded",
        "type": "event",
        "signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event",
        "signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event",
        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event",
        "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event",
        "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "creationId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "database",
            "type": "string"
          }
        ],
        "name": "NewTable",
        "type": "event",
        "signature": "0x047e617a8af48c14ec140c1e3b1f1920821ca1675d0c19756be36bfbe772b8ca"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event",
        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_tableId",
            "type": "uint256"
          },
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_database",
            "type": "string"
          }
        ],
        "name": "createTableToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x60778787"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x70a08231"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6352211e"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x23b872dd"
      }
    ],
    "bytecode": "0x60806040526000600a60006101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620001186301ffc9a77c01000000000000000000000000000000000000000000000000000000000262000175640100000000026401000000009004565b620001556380ac58cd7c01000000000000000000000000000000000000000000000000000000000262000175640100000000026401000000009004565b6200016f3362000234640100000000026401000000009004565b620003f6565b63ffffffff7c010000000000000000000000000000000000000000000000000000000002817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614151515620001c757600080fd5b600160046000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b620002588160096200029e6401000000000262002922179091906401000000009004565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515620002db57600080fd5b620002f6828262000361640100000000026401000000009004565b1515156200030357600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156200039f57600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b612b6580620004066000396000f3fe608060405260043610610196576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461019b57806306fdde031461020d578063081812fc1461029d578063095ea7b31461031857806323b872dd1461037357806340c10f19146103ee57806342842e0e1461046157806351d71816146104dc5780635772437f14610645578063607787871461069657806362a5af3b146107ff5780636352211e1461081657806366e759ee146108915780636a28f000146108fa57806370a0823114610911578063715018a61461097657806371671bf21461098d57806371cea5ae14610abb57806386886a3814610b0c5780638da5cb5b14610b5d5780638f32d59b14610bb457806395d89b4114610be3578063983b2d5614610c735780639865027514610cc4578063a22cb46514610cdb578063aa271e1a14610d38578063b7540d9f14610da1578063b88d4fde14610dd0578063cd4217c114610ee2578063e985e9c514610f4b578063efba4f3614610fd4578063f2fde38b1461104f575b600080fd5b3480156101a757600080fd5b506101f3600480360360208110156101be57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506110a0565b604051808215151515815260200191505060405180910390f35b34801561021957600080fd5b50610222611108565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610262578082015181840152602081019050610247565b50505050905090810190601f16801561028f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102a957600080fd5b506102d6600480360360208110156102c057600080fd5b8101908080359060200190929190505050611141565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032457600080fd5b506103716004803603604081101561033b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611192565b005b34801561037f57600080fd5b506103ec6004803603606081101561039657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112d7565b005b3480156103fa57600080fd5b506104476004803603604081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113bd565b604051808215151515815260200191505060405180910390f35b34801561046d57600080fd5b506104da6004803603606081101561048457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113e7565b005b3480156104e857600080fd5b50610643600480360360608110156104ff57600080fd5b81019080803590602001909291908035906020019064010000000081111561052657600080fd5b82018360208201111561053857600080fd5b8035906020019184600183028401116401000000008311171561055a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105bd57600080fd5b8201836020820111156105cf57600080fd5b803590602001918460018302840111640100000000831117156105f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611408565b005b34801561065157600080fd5b506106946004803603602081101561066857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061167e565b005b3480156106a257600080fd5b506107fd600480360360608110156106b957600080fd5b8101908080359060200190929190803590602001906401000000008111156106e057600080fd5b8201836020820111156106f257600080fd5b8035906020019184600183028401116401000000008311171561071457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561077757600080fd5b82018360208201111561078957600080fd5b803590602001918460018302840111640100000000831117156107ab57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061176a565b005b34801561080b57600080fd5b5061081461178d565b005b34801561082257600080fd5b5061084f6004803603602081101561083957600080fd5b8101908080359060200190929190505050611805565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561089d57600080fd5b506108e0600480360360208110156108b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611842565b604051808215151515815260200191505060405180910390f35b34801561090657600080fd5b5061090f611862565b005b34801561091d57600080fd5b506109606004803603602081101561093457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118d9565b6040518082815260200191505060405180910390f35b34801561098257600080fd5b5061098b611922565b005b34801561099957600080fd5b506109c6600480360360208110156109b057600080fd5b81019080803590602001909291905050506119f4565b604051808581526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610a165780820151818401526020810190506109fb565b50505050905090810190601f168015610a435780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610a7c578082015181840152602081019050610a61565b50505050905090810190601f168015610aa95780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b348015610ac757600080fd5b50610b0a60048036036020811015610ade57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b63565b005b348015610b1857600080fd5b50610b5b60048036036020811015610b2f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c57565b005b348015610b6957600080fd5b50610b72611d4c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610bc057600080fd5b50610bc9611d75565b604051808215151515815260200191505060405180910390f35b348015610bef57600080fd5b50610bf8611dcc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c38578082015181840152602081019050610c1d565b50505050905090810190601f168015610c655780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610c7f57600080fd5b50610cc260048036036020811015610c9657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e05565b005b348015610cd057600080fd5b50610cd9611e25565b005b348015610ce757600080fd5b50610d3660048036036040811015610cfe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611e30565b005b348015610d4457600080fd5b50610d8760048036036020811015610d5b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f6c565b604051808215151515815260200191505060405180910390f35b348015610dad57600080fd5b50610db6611f89565b604051808215151515815260200191505060405180910390f35b348015610ddc57600080fd5b50610ee060048036036080811015610df357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610e5a57600080fd5b820183602082011115610e6c57600080fd5b80359060200191846001830284011164010000000083111715610e8e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611f9c565b005b348015610eee57600080fd5b50610f3160048036036020811015610f0557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fc4565b604051808215151515815260200191505060405180910390f35b348015610f5757600080fd5b50610fba60048036036040811015610f6e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fe4565b604051808215151515815260200191505060405180910390f35b348015610fe057600080fd5b5061100d60048036036020811015610ff757600080fd5b8101908080359060200190929190505050612078565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561105b57600080fd5b5061109e6004803603602081101561107257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120ab565b005b600060046000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6040805190810160405280600b81526020017f536368776162546f6b656e00000000000000000000000000000000000000000081525081565b600061114c826120ca565b151561115757600080fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061119d82611805565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156111da57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061121a57506112198133611fe4565b5b151561122557600080fd5b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b3373ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806113a257503373ffffffffffffffffffffffffffffffffffffffff16600d600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15156113ad57600080fd5b6113b883838361213c565b505050565b60006113c833611f6c565b15156113d357600080fd5b6113dd838361231a565b6001905092915050565b6114038383836020604051908101604052806000815250611f9c565b505050565b611410611d75565b151561141b57600080fd5b60006001806080604051908101604052804263ffffffff1681526020018781526020018681526020018581525090806001815401808255809150509060018203906000526020600020906004020160009091929091909150600082015181600001556020820151816001015560408201518160020190805190602001906114a3929190612a94565b5060608201518160030190805190602001906114c0929190612a94565b505050039050336002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055507f047e617a8af48c14ec140c1e3b1f1920821ca1675d0c19756be36bfbe772b8ca818484604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156115d55780820151818401526020810190506115ba565b50505050905090810190601f1680156116025780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561163b578082015181840152602081019050611620565b50505050905090810190601f1680156116685780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a150505050565b611686611d75565b151561169157600080fd5b600a60009054906101000a900460ff1615156116ac57600080fd5b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f8c6eeed3d39dffff685e18609fe88a9ac5445fe9e5e040bad017160a1c36a38c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b611772611d75565b151561177d57600080fd5b611788838383611408565b505050565b611795611d75565b15156117a057600080fd5b600a60009054906101000a900460ff161515156117bc57600080fd5b6001600a60006101000a81548160ff0219169083151502179055507f615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de60405160405180910390a1565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600c6020528060005260406000206000915054906101000a900460ff1681565b61186a611d75565b151561187557600080fd5b600a60009054906101000a900460ff16151561189057600080fd5b6000600a60006101000a81548160ff0219169083151502179055507f2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded60405160405180910390a1565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61192a611d75565b151561193557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600181815481101515611a0357fe5b9060005260206000209060040201600091509050806000015490806001015490806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611abb5780601f10611a9057610100808354040283529160200191611abb565b820191906000526020600020905b815481529060010190602001808311611a9e57829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b595780601f10611b2e57610100808354040283529160200191611b59565b820191906000526020600020905b815481529060010190602001808311611b3c57829003601f168201915b5050505050905084565b611b6b611d75565b1515611b7657600080fd5b80600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611bcf57600080fd5b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6c2d504e07f6ab725bcb41deee55a5809ecdca13297f060fa925865af3915fbd60405160405180910390a15050565b611c5f611d75565b1515611c6a57600080fd5b80600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515611cc457600080fd5b6001600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6ca27a1cd0d569bf14783cb6e210f86fde6257948765cf6b00e203620a66f33660405160405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6040805190810160405280600481526020017f534348570000000000000000000000000000000000000000000000000000000081525081565b611e0e33611f6c565b1515611e1957600080fd5b611e2281612464565b50565b611e2e336124be565b565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611e6b57600080fd5b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000611f8282600961251890919063ffffffff16565b9050919050565b600a60009054906101000a900460ff1681565b611fa78484846112d7565b611fb3848484846125ac565b1515611fbe57600080fd5b50505050565b600b6020528060005260406000206000915054906101000a900460ff1681565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6120b3611d75565b15156120be57600080fd5b6120c7816127cf565b50565b6000806005600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b61218f6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128c990919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506122256001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128ea90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561235657600080fd5b61235f816120ca565b15151561236b57600080fd5b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612404600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061290c565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61247881600961292290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6124d28160096129d290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561255557600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006125cd8473ffffffffffffffffffffffffffffffffffffffff16612a81565b15156125dc57600190506127c7565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156126d35780820151818401526020810190506126b8565b50505050905090810190601f1680156127005780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561272257600080fd5b505af1158015612736573d6000803e3d6000fd5b505050506040513d602081101561274c57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561280b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082840190508381101515156128e057600080fd5b8091505092915050565b60008282111515156128fb57600080fd5b600082840390508091505092915050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561295e57600080fd5b6129688282612518565b15151561297457600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612a0e57600080fd5b612a188282612518565b1515612a2357600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b905060008111915050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612ad557805160ff1916838001178555612b03565b82800160010185558215612b03579182015b82811115612b02578251825591602001919060010190612ae7565b5b509050612b109190612b14565b5090565b612b3691905b80821115612b32576000816000905550600101612b1a565b5090565b9056fea165627a7a723058201598fc012f9386926912990bf327508a2acf4ce26d68c5ad70afe76457a0af500029",
    "deployedBytecode": "0x608060405260043610610196576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461019b57806306fdde031461020d578063081812fc1461029d578063095ea7b31461031857806323b872dd1461037357806340c10f19146103ee57806342842e0e1461046157806351d71816146104dc5780635772437f14610645578063607787871461069657806362a5af3b146107ff5780636352211e1461081657806366e759ee146108915780636a28f000146108fa57806370a0823114610911578063715018a61461097657806371671bf21461098d57806371cea5ae14610abb57806386886a3814610b0c5780638da5cb5b14610b5d5780638f32d59b14610bb457806395d89b4114610be3578063983b2d5614610c735780639865027514610cc4578063a22cb46514610cdb578063aa271e1a14610d38578063b7540d9f14610da1578063b88d4fde14610dd0578063cd4217c114610ee2578063e985e9c514610f4b578063efba4f3614610fd4578063f2fde38b1461104f575b600080fd5b3480156101a757600080fd5b506101f3600480360360208110156101be57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506110a0565b604051808215151515815260200191505060405180910390f35b34801561021957600080fd5b50610222611108565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610262578082015181840152602081019050610247565b50505050905090810190601f16801561028f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102a957600080fd5b506102d6600480360360208110156102c057600080fd5b8101908080359060200190929190505050611141565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032457600080fd5b506103716004803603604081101561033b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611192565b005b34801561037f57600080fd5b506103ec6004803603606081101561039657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112d7565b005b3480156103fa57600080fd5b506104476004803603604081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113bd565b604051808215151515815260200191505060405180910390f35b34801561046d57600080fd5b506104da6004803603606081101561048457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113e7565b005b3480156104e857600080fd5b50610643600480360360608110156104ff57600080fd5b81019080803590602001909291908035906020019064010000000081111561052657600080fd5b82018360208201111561053857600080fd5b8035906020019184600183028401116401000000008311171561055a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105bd57600080fd5b8201836020820111156105cf57600080fd5b803590602001918460018302840111640100000000831117156105f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611408565b005b34801561065157600080fd5b506106946004803603602081101561066857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061167e565b005b3480156106a257600080fd5b506107fd600480360360608110156106b957600080fd5b8101908080359060200190929190803590602001906401000000008111156106e057600080fd5b8201836020820111156106f257600080fd5b8035906020019184600183028401116401000000008311171561071457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561077757600080fd5b82018360208201111561078957600080fd5b803590602001918460018302840111640100000000831117156107ab57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061176a565b005b34801561080b57600080fd5b5061081461178d565b005b34801561082257600080fd5b5061084f6004803603602081101561083957600080fd5b8101908080359060200190929190505050611805565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561089d57600080fd5b506108e0600480360360208110156108b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611842565b604051808215151515815260200191505060405180910390f35b34801561090657600080fd5b5061090f611862565b005b34801561091d57600080fd5b506109606004803603602081101561093457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118d9565b6040518082815260200191505060405180910390f35b34801561098257600080fd5b5061098b611922565b005b34801561099957600080fd5b506109c6600480360360208110156109b057600080fd5b81019080803590602001909291905050506119f4565b604051808581526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610a165780820151818401526020810190506109fb565b50505050905090810190601f168015610a435780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610a7c578082015181840152602081019050610a61565b50505050905090810190601f168015610aa95780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b348015610ac757600080fd5b50610b0a60048036036020811015610ade57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b63565b005b348015610b1857600080fd5b50610b5b60048036036020811015610b2f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c57565b005b348015610b6957600080fd5b50610b72611d4c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610bc057600080fd5b50610bc9611d75565b604051808215151515815260200191505060405180910390f35b348015610bef57600080fd5b50610bf8611dcc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c38578082015181840152602081019050610c1d565b50505050905090810190601f168015610c655780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610c7f57600080fd5b50610cc260048036036020811015610c9657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e05565b005b348015610cd057600080fd5b50610cd9611e25565b005b348015610ce757600080fd5b50610d3660048036036040811015610cfe57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611e30565b005b348015610d4457600080fd5b50610d8760048036036020811015610d5b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f6c565b604051808215151515815260200191505060405180910390f35b348015610dad57600080fd5b50610db6611f89565b604051808215151515815260200191505060405180910390f35b348015610ddc57600080fd5b50610ee060048036036080811015610df357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610e5a57600080fd5b820183602082011115610e6c57600080fd5b80359060200191846001830284011164010000000083111715610e8e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611f9c565b005b348015610eee57600080fd5b50610f3160048036036020811015610f0557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fc4565b604051808215151515815260200191505060405180910390f35b348015610f5757600080fd5b50610fba60048036036040811015610f6e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611fe4565b604051808215151515815260200191505060405180910390f35b348015610fe057600080fd5b5061100d60048036036020811015610ff757600080fd5b8101908080359060200190929190505050612078565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561105b57600080fd5b5061109e6004803603602081101561107257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120ab565b005b600060046000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6040805190810160405280600b81526020017f536368776162546f6b656e00000000000000000000000000000000000000000081525081565b600061114c826120ca565b151561115757600080fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061119d82611805565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156111da57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061121a57506112198133611fe4565b5b151561122557600080fd5b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b3373ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806113a257503373ffffffffffffffffffffffffffffffffffffffff16600d600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15156113ad57600080fd5b6113b883838361213c565b505050565b60006113c833611f6c565b15156113d357600080fd5b6113dd838361231a565b6001905092915050565b6114038383836020604051908101604052806000815250611f9c565b505050565b611410611d75565b151561141b57600080fd5b60006001806080604051908101604052804263ffffffff1681526020018781526020018681526020018581525090806001815401808255809150509060018203906000526020600020906004020160009091929091909150600082015181600001556020820151816001015560408201518160020190805190602001906114a3929190612a94565b5060608201518160030190805190602001906114c0929190612a94565b505050039050336002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919060010191905055507f047e617a8af48c14ec140c1e3b1f1920821ca1675d0c19756be36bfbe772b8ca818484604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156115d55780820151818401526020810190506115ba565b50505050905090810190601f1680156116025780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561163b578082015181840152602081019050611620565b50505050905090810190601f1680156116685780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a150505050565b611686611d75565b151561169157600080fd5b600a60009054906101000a900460ff1615156116ac57600080fd5b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f8c6eeed3d39dffff685e18609fe88a9ac5445fe9e5e040bad017160a1c36a38c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b611772611d75565b151561177d57600080fd5b611788838383611408565b505050565b611795611d75565b15156117a057600080fd5b600a60009054906101000a900460ff161515156117bc57600080fd5b6001600a60006101000a81548160ff0219169083151502179055507f615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de60405160405180910390a1565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600c6020528060005260406000206000915054906101000a900460ff1681565b61186a611d75565b151561187557600080fd5b600a60009054906101000a900460ff16151561189057600080fd5b6000600a60006101000a81548160ff0219169083151502179055507f2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded60405160405180910390a1565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61192a611d75565b151561193557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600181815481101515611a0357fe5b9060005260206000209060040201600091509050806000015490806001015490806002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611abb5780601f10611a9057610100808354040283529160200191611abb565b820191906000526020600020905b815481529060010190602001808311611a9e57829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b595780601f10611b2e57610100808354040283529160200191611b59565b820191906000526020600020905b815481529060010190602001808311611b3c57829003601f168201915b5050505050905084565b611b6b611d75565b1515611b7657600080fd5b80600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611bcf57600080fd5b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6c2d504e07f6ab725bcb41deee55a5809ecdca13297f060fa925865af3915fbd60405160405180910390a15050565b611c5f611d75565b1515611c6a57600080fd5b80600c60008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515611cc457600080fd5b6001600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f6ca27a1cd0d569bf14783cb6e210f86fde6257948765cf6b00e203620a66f33660405160405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6040805190810160405280600481526020017f534348570000000000000000000000000000000000000000000000000000000081525081565b611e0e33611f6c565b1515611e1957600080fd5b611e2281612464565b50565b611e2e336124be565b565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611e6b57600080fd5b80600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000611f8282600961251890919063ffffffff16565b9050919050565b600a60009054906101000a900460ff1681565b611fa78484846112d7565b611fb3848484846125ac565b1515611fbe57600080fd5b50505050565b600b6020528060005260406000206000915054906101000a900460ff1681565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6120b3611d75565b15156120be57600080fd5b6120c7816127cf565b50565b6000806005600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b61218f6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128c990919063ffffffff16565b600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506122256001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546128ea90919063ffffffff16565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561235657600080fd5b61235f816120ca565b15151561236b57600080fd5b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612404600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061290c565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61247881600961292290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6124d28160096129d290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561255557600080fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006125cd8473ffffffffffffffffffffffffffffffffffffffff16612a81565b15156125dc57600190506127c7565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156126d35780820151818401526020810190506126b8565b50505050905090810190601f1680156127005780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561272257600080fd5b505af1158015612736573d6000803e3d6000fd5b505050506040513d602081101561274c57600080fd5b8101908080519060200190929190505050905063150b7a027c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561280b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082840190508381101515156128e057600080fd5b8091505092915050565b60008282111515156128fb57600080fd5b600082840390508091505092915050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561295e57600080fd5b6129688282612518565b15151561297457600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612a0e57600080fd5b612a188282612518565b1515612a2357600080fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b905060008111915050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612ad557805160ff1916838001178555612b03565b82800160010185558215612b03579182015b82811115612b02578251825591602001919060010190612ae7565b5b509050612b109190612b14565b5090565b612b3691905b80821115612b32576000816000905550600101612b1a565b5090565b9056fea165627a7a723058201598fc012f9386926912990bf327508a2acf4ce26d68c5ad70afe76457a0af500029",
    "sourceMap": "2490:1599:6:-;;;1053:5;1031:27;;;;;;;;;;;;;;;;;;;;533:10:5;524:6;;:19;;;;;;;;;;;;;;;;;;591:6;;;;;;;;;;;558:40;;587:1;558:40;;;;;;;;;;;;648::10;245:10;667:20;;648:18;;;:40;;;:::i;:::-;1989::0;1246:10;2008:20;;1989:18;;;:40;;;:::i;:::-;283:22:7;294:10;283;;;:22;;;:::i;:::-;2490:1599:6;;998:158:10;1088:10;1073:25;;:11;:25;;;;;1065:34;;;;;;;;1145:4;1109:20;:33;1130:11;1109:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;998:158;:::o;693:119:7:-;749:21;762:7;749:8;:12;;;;;;:21;;;;;:::i;:::-;797:7;785:20;;;;;;;;;;;;693:119;:::o;268:181:8:-;363:1;344:21;;:7;:21;;;;336:30;;;;;;;;385:18;389:4;395:7;385:3;;;:18;;;:::i;:::-;384:19;376:28;;;;;;;;438:4;415;:11;;:20;427:7;415:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;268:181;;:::o;795:162::-;867:4;910:1;891:21;;:7;:21;;;;883:30;;;;;;;;930:4;:11;;:20;942:7;930:20;;;;;;;;;;;;;;;;;;;;;;;;;923:27;;795:162;;;;:::o;2490:1599:6:-;;;;;;;",
    "deployedSourceMap": "2490:1599:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;786:133:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;786:133:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;786:133:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;622:43:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;622:43:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;622:43:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3792:151:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3792:151:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3792:151:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3215:292;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3215:292:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3215:292:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3566:270:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3566:270:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3566:270:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;442:132:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;442:132:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;442:132:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6161::0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6161:132:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6161:132:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;439:336:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;439:336:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;439:336:6;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;439:336:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;439:336:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;439:336:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;439:336:6;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;439:336:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;439:336:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;439:336:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;439:336:6;;;;;;;;;;;;;;;;;;2010:135;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2010:135:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2010:135:6;;;;;;;;;;;;;;;;;;;;;;2786:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2786:167:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2786:167:6;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2786:167:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2786:167:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2786:167:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2786:167:6;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2786:167:6;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2786:167:6;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2786:167:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2786:167:6;;;;;;;;;;;;;;;;;;1674:93;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1674:93:6;;;;;;3111:136;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3111:136:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3111:136:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1108:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1108:47:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1108:47:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1771:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1771:95:6;;;;;;2958:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2958:149:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2958:149:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1356:137:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1356:137:5;;;;;;312:21:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;312:21:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;312:21:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;312:21:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;312:21:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2317:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2317:166:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2317:166:6;;;;;;;;;;;;;;;;;;;;;;2149:164;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2149:164:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2149:164:6;;;;;;;;;;;;;;;;;;;;;;668:77:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;668:77:5;;;;;;;;;;;;;;;;;;;;;;;;;;;988:90;;8:9:-1;5:2;;;30:1;27;20:12;5:2;988:90:5;;;;;;;;;;;;;;;;;;;;;;;;;;;669:38:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;669:38:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;669:38:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;516:90:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;516:90:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;516:90:7;;;;;;;;;;;;;;;;;;;;;;612:75;;8:9:-1;5:2;;;30:1;27;20:12;5:2;612:75:7;;;;;;4235:213:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4235:213:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4235:213:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;403:107:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;403:107:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;403:107:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1031:27:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1031:27:6;;;;;;;;;;;;;;;;;;;;;;;;;;;6998:211:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6998:211:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;6998:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;6998:211:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;6998:211:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;6998:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;6998:211:0;;;;;;;;;;;;;;;;;;1063:41:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1063:41:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1063:41:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4769:145:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4769:145:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4769:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;340:45:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;340:45:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;340:45:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1664:107:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1664:107:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1664:107:5;;;;;;;;;;;;;;;;;;;;;;786:133:10;856:4;879:20;:33;900:11;879:33;;;;;;;;;;;;;;;;;;;;;;;;;;;872:40;;786:133;;;:::o;622:43:3:-;;;;;;;;;;;;;;;;;;;;:::o;3792:151:0:-;3851:7;3878:16;3886:7;3878;:16::i;:::-;3870:25;;;;;;;;3912:15;:24;3928:7;3912:24;;;;;;;;;;;;;;;;;;;;;3905:31;;3792:151;;;:::o;3215:292::-;3278:13;3294:16;3302:7;3294;:16::i;:::-;3278:32;;3334:5;3328:11;;:2;:11;;;;3320:20;;;;;;;;3372:5;3358:19;;:10;:19;;;:58;;;;3381:35;3398:5;3405:10;3381:16;:35::i;:::-;3358:58;3350:67;;;;;;;;3455:2;3428:15;:24;3444:7;3428:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3492:7;3488:2;3472:28;;3481:5;3472:28;;;;;;;;;;;;3215:292;;;:::o;3566:270:6:-;3741:10;3715:36;;:12;:22;3728:8;3715:22;;;;;;;;;;;;;;;;;;;;;:36;;;:78;;;;3783:10;3755:38;;:14;:24;3770:8;3755:24;;;;;;;;;;;;;;;;;;;;;:38;;;3715:78;3706:88;;;;;;;;3800:31;3810:5;3817:3;3822:8;3800:9;:31::i;:::-;3566:270;;;:::o;442:132:3:-;512:4;358:20:7;367:10;358:8;:20::i;:::-;350:29;;;;;;;;528:18:3;534:2;538:7;528:5;:18::i;:::-;563:4;556:11;;442:132;;;;:::o;6161::0:-;6247:39;6264:4;6270:2;6274:7;6247:39;;;;;;;;;;;;;:16;:39::i;:::-;6161:132;;;:::o;439:336:6:-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;548:15:6;628:1;566:6;578:46;;;;;;;;;591:3;578:46;;;;;;597:8;578:46;;;;607:5;578:46;;;;614:9;578:46;;;566:59;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;566:59:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:63;548:81;;666:10;639:12;:24;652:10;639:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;686:15;:27;702:10;686:27;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;730:38;739:10;751:5;758:9;730:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;730:38:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;730:38:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;892:1:5;439:336:6;;;:::o;2010:135::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;1260:7:6;;;;;;;;;;;1252:16;;;;;;;;2104:5;2083:8;:18;2092:8;2083:18;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;2120:20;2131:8;2120:20;;;;;;;;;;;;;;;;;;;;;;2010:135;:::o;2786:167::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;2896:52:6;2921:8;2931:5;2938:9;2896:24;:52::i;:::-;2786:167;;;:::o;1674:93::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;1200:7:6;;;;;;;;;;;1199:8;1191:17;;;;;;;;1739:4;1729:7;;:14;;;;;;;;;;;;;;;;;;1754:8;;;;;;;;;;1674:93::o;3111:136::-;3167:7;3189:12;:22;3202:8;3189:22;;;;;;;;;;;;;;;;;;;;;3182:29;;3111:136;;;:::o;1108:47::-;;;;;;;;;;;;;;;;;;;;;;:::o;1771:95::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;1260:7:6;;;;;;;;;;;1252:16;;;;;;;;1835:5;1825:7;;:15;;;;;;;;;;;;;;;;;;1851:10;;;;;;;;;;1771:95::o;2958:149::-;3014:7;3036:15;:23;3052:6;3036:23;;;;;;;;;;;;;;;;3029:30;;2958:149;;;:::o;1356:137:5:-;872:9;:7;:9::i;:::-;864:18;;;;;;;;1454:1;1417:40;;1438:6;;;;;;;;;;;1417:40;;;;;;;;;;;;1484:1;1467:6;;:19;;;;;;;;;;;;;;;;;;1356:137::o;312:21:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2317:166::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;2389:8:6;1526:14;:24;1541:8;1526:24;;;;;;;;;;;;;;;;;;;;;;;;;1518:33;;;;;;;;2441:5;2414:14;:24;2429:8;2414:24;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;;;;;;;2459:19;;;;;;;;;;892:1:5;2317:166:6;:::o;2149:164::-;872:9:5;:7;:9::i;:::-;864:18;;;;;;;;2221:8:6;1631:14;:24;1646:8;1631:24;;;;;;;;;;;;;;;;;;;;;;;;;1630:25;1622:34;;;;;;;;2273:4;2246:14;:24;2261:8;2246:24;;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;2290:18;;;;;;;;;;892:1:5;2149:164:6;:::o;668:77:5:-;706:7;732:6;;;;;;;;;;;725:13;;668:77;:::o;988:90::-;1028:4;1065:6;;;;;;;;;;;1051:20;;:10;:20;;;1044:27;;988:90;:::o;669:38:3:-;;;;;;;;;;;;;;;;;;;;:::o;516:90:7:-;358:20;367:10;358:8;:20::i;:::-;350:29;;;;;;;;580:19;591:7;580:10;:19::i;:::-;516:90;:::o;612:75::-;655:25;669:10;655:13;:25::i;:::-;612:75::o;4235:213:0:-;4320:10;4314:16;;:2;:16;;;;4306:25;;;;;;;;4378:8;4341:18;:30;4360:10;4341:30;;;;;;;;;;;;;;;:34;4372:2;4341:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;4428:2;4401:40;;4416:10;4401:40;;;4432:8;4401:40;;;;;;;;;;;;;;;;;;;;;;4235:213;;:::o;403:107:7:-;459:4;482:21;495:7;482:8;:12;;:21;;;;:::i;:::-;475:28;;403:107;;;:::o;1031:27:6:-;;;;;;;;;;;;;:::o;6998:211:0:-;7104:31;7117:4;7123:2;7127:7;7104:12;:31::i;:::-;7153:48;7176:4;7182:2;7186:7;7195:5;7153:22;:48::i;:::-;7145:57;;;;;;;;6998:211;;;;:::o;1063:41:6:-;;;;;;;;;;;;;;;;;;;;;;:::o;4769:145:0:-;4849:4;4872:18;:25;4891:5;4872:25;;;;;;;;;;;;;;;:35;4898:8;4872:35;;;;;;;;;;;;;;;;;;;;;;;;;4865:42;;4769:145;;;;:::o;340:45:6:-;;;;;;;;;;;;;;;;;;;;;;:::o;1664:107:5:-;872:9;:7;:9::i;:::-;864:18;;;;;;;;1736:28;1755:8;1736:18;:28::i;:::-;1664:107;:::o;7403:152:0:-;7460:4;7476:13;7492:11;:20;7504:7;7492:20;;;;;;;;;;;;;;;;;;;;;7476:36;;7546:1;7529:19;;:5;:19;;;;7522:26;;;7403:152;;;:::o;3251:311:6:-;3385:27;3410:1;3385:15;:20;3401:3;3385:20;;;;;;;;;;;;;;;;:24;;:27;;;;:::i;:::-;3362:15;:20;3378:3;3362:20;;;;;;;;;;;;;;;:50;;;;3448:34;3480:1;3448:15;:27;3464:10;3448:27;;;;;;;;;;;;;;;;:31;;:34;;;;:::i;:::-;3418:15;:27;3434:10;3418:27;;;;;;;;;;;;;;;:64;;;;3513:3;3488:12;:22;3501:8;3488:22;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;3548:8;3543:3;3527:30;;3536:5;3527:30;;;;;;;;;;;;3251:311;;;:::o;8404:259:0:-;8489:1;8475:16;;:2;:16;;;;8467:25;;;;;;;;8511:16;8519:7;8511;:16::i;:::-;8510:17;8502:26;;;;;;;;8562:2;8539:11;:20;8551:7;8539:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;8574:33;:17;:21;8592:2;8574:21;;;;;;;;;;;;;;;:31;:33::i;:::-;8648:7;8644:2;8623:33;;8640:1;8623:33;;;;;;;;;;;;8404:259;;:::o;693:119:7:-;749:21;762:7;749:8;:12;;:21;;;;:::i;:::-;797:7;785:20;;;;;;;;;;;;693:119;:::o;818:127::-;877:24;893:7;877:8;:15;;:24;;;;:::i;:::-;930:7;916:22;;;;;;;;;;;;818:127;:::o;795:162:8:-;867:4;910:1;891:21;;:7;:21;;;;883:30;;;;;;;;930:4;:11;;:20;942:7;930:20;;;;;;;;;;;;;;;;;;;;;;;;;923:27;;795:162;;;;:::o;10753:347:0:-;10874:4;10899:15;:2;:13;;;:15::i;:::-;10898:16;10894:58;;;10937:4;10930:11;;;;10894:58;10962:13;10994:2;10978:36;;;11015:10;11027:4;11033:7;11042:5;10978:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10978:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;10978:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;10978:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;10978:70:0;;;;;;;;;;;;;;;;10962:86;;732:10;11076:16;;11066:26;;;:6;:26;;;;11058:35;;;10753:347;;;;;;;:::o;1915:183:5:-;2008:1;1988:22;;:8;:22;;;;1980:31;;;;;;;;2055:8;2026:38;;2047:6;;;;;;;;;;;2026:38;;;;;;;;;;;;2083:8;2074:6;;:17;;;;;;;;;;;;;;;;;;1915:183;:::o;1391:145:12:-;1449:7;1468:9;1484:1;1480;:5;1468:17;;1508:1;1503;:6;;1495:15;;;;;;;;1528:1;1521:8;;;1391:145;;;;:::o;1175:::-;1233:7;1265:1;1260;:6;;1252:15;;;;;;;;1277:9;1293:1;1289;:5;1277:17;;1312:1;1305:8;;;1175:145;;;;:::o;1187:89:9:-;1268:1;1250:7;:14;;;:19;;;;;;;;;;;1187:89;:::o;268:181:8:-;363:1;344:21;;:7;:21;;;;336:30;;;;;;;;385:18;389:4;395:7;385:3;:18::i;:::-;384:19;376:28;;;;;;;;438:4;415;:11;;:20;427:7;415:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;268:181;;:::o;523:184::-;621:1;602:21;;:7;:21;;;;594:30;;;;;;;;642:18;646:4;652:7;642:3;:18::i;:::-;634:27;;;;;;;;695:5;672:4;:11;;:20;684:7;672:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;523:184;;:::o;472:616:13:-;532:4;548:12;1047:7;1035:20;1027:28;;1080:1;1073:4;:8;1066:15;;;472:616;;;:::o;2490:1599:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity >=0.4.22 <0.6.0;\nimport \"./Ownable.sol\";\nimport \"./ERC721/SchwabToken.sol\";\n\ncontract TableFactory is Ownable {\n\n    event NewTable(uint creationId, string name, string database);\n\n    struct Table {\n      uint creationId;\n      uint tableId;\n      string name;\n      string database;\n    }\n\n    Table[] public tables;\n\n    mapping (uint => address) public tableToOwner;\n    mapping (address => uint) ownerTableCount;\n\n    function createTable(uint _tableId, string memory _name, string memory _database) onlyOwner public {\n        uint creationId = tables.push(Table(uint32(now), _tableId, _name, _database)) - 1;\n        tableToOwner[creationId] = msg.sender;\n        ownerTableCount[msg.sender]++;\n        emit NewTable(creationId, _name, _database);\n    }\n\n}\n\n\ncontract Freezing is Ownable { //validate restricting users to access ERC721 authentication\n  event Freeze();\n  event Unfreeze();\n  event Freeze(address to);\n  event UnfreezeOf(address to);\n  event TransferAccessOn();\n  event TransferAccessOff();\n\n  bool public freezed = false;\n\n  mapping (address => bool) public freezeOf;\n  mapping (address => bool) public transferAccess;\n\n  modifier whenNotFreeze() {\n    require(!freezed);\n    _;\n  }\n\n  modifier whenFreeze() {\n    require(freezed);\n    _;\n  }\n\n  modifier whenNotFreezeOf(address _account) {\n    require(!freezeOf[_account]);\n    _;\n  }\n\n  modifier whenFreezeOf(address _account) {\n    require(freezeOf[_account]);\n    _;\n  }\n\n  modifier onTransferAccess(address _account) {\n      require(transferAccess[_account]);\n      _;\n  }\n\n  modifier offTransferAccess(address _account) {\n      require(!transferAccess[_account]);\n      _;\n  }\n\n  function freeze() onlyOwner whenNotFreeze public {\n    freezed = true;\n    emit Freeze();\n  }\n\n  function unfreeze() onlyOwner whenFreeze public {\n    freezed = false;\n    emit Unfreeze();\n  }\n  /*\n  function freezeOf(address _account) onlyOwner whenNotFreeze public {\n    freezeOf[_account] = true;\n    emit Freeze(_account);\n  }*/\n\n  function unfreezeOf(address _account) onlyOwner whenFreeze public  {\n    freezeOf[_account] = false;\n    emit UnfreezeOf(_account);\n  }\n\n  function transferAccessOn(address _account) onlyOwner offTransferAccess(_account) public {\n      transferAccess[_account] = true;\n      emit TransferAccessOn();\n  }\n\n  function transferAccessOff(address _account) onlyOwner onTransferAccess(_account) public {\n      transferAccess[_account] = false;\n      emit TransferAccessOff();\n  }\n\n}\n\n\n\ncontract UserAuthenticate is TableFactory, SchwabToken, Freezing {\n\n  using SafeMath for uint256;\n\n  mapping (uint => address) tableApprovals;\n\n  modifier onlyOwnerOf(uint _creationId) { //maps to that particular token creation\n    require(msg.sender == tableToOwner[_creationId]);\n    _;\n  }\n\n  function createTableToken(uint _tableId, string memory _name, string memory _database) onlyOwner public {\n    TableFactory.createTable(_tableId, _name, _database);\n  }\n\n\n  function balanceOf(address _owner) public view returns (uint256) {\n    return ownerTableCount[_owner]; //check how many tables user has access to\n  }\n\n  function ownerOf(uint256 _tokenId) public view returns (address) {\n    return tableToOwner[_tokenId]; //check owner of certain token\n  }\n\n  function _transfer(address _from, address _to, uint256 _tokenId) private { // basically transfer 721 token\n    ownerTableCount[_to] = ownerTableCount[_to].add(1);\n    ownerTableCount[msg.sender] = ownerTableCount[msg.sender].sub(1);\n    tableToOwner[_tokenId] = _to;\n    emit Transfer(_from, _to, _tokenId);\n  }\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public { //sends the token to the address (basically giving access)\n    require (tableToOwner[_tokenId] == msg.sender || tableApprovals[_tokenId] == msg.sender);\n    _transfer(_from, _to, _tokenId);\n  }\n\n\n/* Don't need for a private network\n  function approve(address _approved, uint256 _tokenId) public onlyOwnerOf(_tokenId) { // approve token access\n    tableApprovals[_tokenId] = _approved;\n    emit Approval(msg.sender, _approved, _tokenId);\n  }\n*/\n\n}\n",
    "sourcePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/UserAuthenticate.sol",
    "ast": {
      "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/UserAuthenticate.sol",
      "exportedSymbols": {
        "Freezing": [
          1135
        ],
        "TableFactory": [
          948
        ],
        "UserAuthenticate": [
          1286
        ]
      },
      "id": 1287,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 868,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:32:6"
        },
        {
          "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/Ownable.sol",
          "file": "./Ownable.sol",
          "id": 869,
          "nodeType": "ImportDirective",
          "scope": 1287,
          "sourceUnit": 867,
          "src": "33:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/ERC721/SchwabToken.sol",
          "file": "./ERC721/SchwabToken.sol",
          "id": 870,
          "nodeType": "ImportDirective",
          "scope": 1287,
          "sourceUnit": 701,
          "src": "57:34:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 871,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 866,
                "src": "118:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$866",
                  "typeString": "contract Ownable"
                }
              },
              "id": 872,
              "nodeType": "InheritanceSpecifier",
              "src": "118:7:6"
            }
          ],
          "contractDependencies": [
            866
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 948,
          "linearizedBaseContracts": [
            948,
            866
          ],
          "name": "TableFactory",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 880,
              "name": "NewTable",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 879,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 874,
                    "indexed": false,
                    "name": "creationId",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "148:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 873,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "148:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 876,
                    "indexed": false,
                    "name": "name",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "165:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 875,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "165:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 878,
                    "indexed": false,
                    "name": "database",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "178:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 877,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "178:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "147:47:6"
              },
              "src": "133:62:6"
            },
            {
              "canonicalName": "TableFactory.Table",
              "id": 889,
              "members": [
                {
                  "constant": false,
                  "id": 882,
                  "name": "creationId",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "222:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 881,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 884,
                  "name": "tableId",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "245:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 883,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 886,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "265:11:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 888,
                  "name": "database",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "284:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 887,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Table",
              "nodeType": "StructDefinition",
              "scope": 948,
              "src": "201:105:6",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 892,
              "name": "tables",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "312:21:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage",
                "typeString": "struct TableFactory.Table[]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 890,
                  "name": "Table",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 889,
                  "src": "312:5:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Table_$889_storage_ptr",
                    "typeString": "struct TableFactory.Table"
                  }
                },
                "id": 891,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "312:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage_ptr",
                  "typeString": "struct TableFactory.Table[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 896,
              "name": "tableToOwner",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "340:45:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 895,
                "keyType": {
                  "id": 893,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "340:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 894,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 900,
              "name": "ownerTableCount",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "391:41:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 899,
                "keyType": {
                  "id": 897,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "400:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "391:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 898,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "411:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 946,
                "nodeType": "Block",
                "src": "538:237:6",
                "statements": [
                  {
                    "assignments": [
                      912
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 912,
                        "name": "creationId",
                        "nodeType": "VariableDeclaration",
                        "scope": 946,
                        "src": "548:15:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 911,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "548:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 926,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 917,
                                    "name": "now",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1757,
                                    "src": "591:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 916,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "584:6:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint32_$",
                                    "typeString": "type(uint32)"
                                  },
                                  "typeName": "uint32"
                                },
                                "id": 918,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "584:11:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 919,
                                "name": "_tableId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 902,
                                "src": "597:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 920,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 904,
                                "src": "607:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 921,
                                "name": "_database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 906,
                                "src": "614:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 915,
                              "name": "Table",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 889,
                              "src": "578:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Table_$889_storage_ptr_$",
                                "typeString": "type(struct TableFactory.Table storage pointer)"
                              }
                            },
                            "id": 922,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "578:46:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Table_$889_memory",
                              "typeString": "struct TableFactory.Table memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Table_$889_memory",
                              "typeString": "struct TableFactory.Table memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 913,
                            "name": "tables",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 892,
                            "src": "566:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage",
                              "typeString": "struct TableFactory.Table storage ref[] storage ref"
                            }
                          },
                          "id": 914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "push",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "566:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Table_$889_storage_$returns$_t_uint256_$",
                            "typeString": "function (struct TableFactory.Table storage ref) returns (uint256)"
                          }
                        },
                        "id": 923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "566:59:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 924,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "628:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "566:63:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "548:81:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 927,
                          "name": "tableToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 896,
                          "src": "639:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 929,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 928,
                          "name": "creationId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 912,
                          "src": "652:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "639:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 930,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1755,
                          "src": "666:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "666:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "639:37:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 933,
                    "nodeType": "ExpressionStatement",
                    "src": "639:37:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "686:29:6",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 934,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "686:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 937,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1755,
                            "src": "702:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "702:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "686:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 939,
                    "nodeType": "ExpressionStatement",
                    "src": "686:29:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 941,
                          "name": "creationId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 912,
                          "src": "739:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 942,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 904,
                          "src": "751:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 943,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 906,
                          "src": "758:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 940,
                        "name": "NewTable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 880,
                        "src": "730:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory,string memory)"
                        }
                      },
                      "id": 944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "730:38:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 945,
                    "nodeType": "EmitStatement",
                    "src": "725:43:6"
                  }
                ]
              },
              "documentation": null,
              "id": 947,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 909,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 908,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "521:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "521:9:6"
                }
              ],
              "name": "createTable",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 907,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 902,
                    "name": "_tableId",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "460:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 901,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "460:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 904,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "475:19:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 903,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "475:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 906,
                    "name": "_database",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "496:23:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 905,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "496:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "459:61:6"
              },
              "returnParameters": {
                "id": 910,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "538:0:6"
              },
              "scope": 948,
              "src": "439:336:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "93:685:6"
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 949,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 866,
                "src": "802:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$866",
                  "typeString": "contract Ownable"
                }
              },
              "id": 950,
              "nodeType": "InheritanceSpecifier",
              "src": "802:7:6"
            }
          ],
          "contractDependencies": [
            866
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 1135,
          "linearizedBaseContracts": [
            1135,
            866
          ],
          "name": "Freezing",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 952,
              "name": "Freeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 951,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "887:2:6"
              },
              "src": "875:15:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 954,
              "name": "Unfreeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 953,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "907:2:6"
              },
              "src": "893:17:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 958,
              "name": "Freeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 957,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 956,
                    "indexed": false,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 958,
                    "src": "926:10:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 955,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "926:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "925:12:6"
              },
              "src": "913:25:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 962,
              "name": "UnfreezeOf",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 961,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 960,
                    "indexed": false,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 962,
                    "src": "958:10:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 959,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "958:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "957:12:6"
              },
              "src": "941:29:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 964,
              "name": "TransferAccessOn",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 963,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "995:2:6"
              },
              "src": "973:25:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 966,
              "name": "TransferAccessOff",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 965,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1024:2:6"
              },
              "src": "1001:26:6"
            },
            {
              "constant": false,
              "id": 969,
              "name": "freezed",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1031:27:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 967,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1031:4:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 968,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1053:5:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "false"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 973,
              "name": "freezeOf",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1063:41:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 972,
                "keyType": {
                  "id": 970,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1072:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1063:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 971,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1083:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 977,
              "name": "transferAccess",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1108:47:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 976,
                "keyType": {
                  "id": 974,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1117:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1108:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 975,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1128:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 985,
                "nodeType": "Block",
                "src": "1185:35:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1199:8:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 980,
                            "name": "freezed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 969,
                            "src": "1200:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 979,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1191:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1191:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 983,
                    "nodeType": "ExpressionStatement",
                    "src": "1191:17:6"
                  },
                  {
                    "id": 984,
                    "nodeType": "PlaceholderStatement",
                    "src": "1214:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 986,
              "name": "whenNotFreeze",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 978,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1182:2:6"
              },
              "src": "1160:60:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 993,
                "nodeType": "Block",
                "src": "1246:34:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 989,
                          "name": "freezed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 969,
                          "src": "1260:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 988,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1252:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1252:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 991,
                    "nodeType": "ExpressionStatement",
                    "src": "1252:16:6"
                  },
                  {
                    "id": 992,
                    "nodeType": "PlaceholderStatement",
                    "src": "1274:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 994,
              "name": "whenFreeze",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 987,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1243:2:6"
              },
              "src": "1224:56:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1006,
                "nodeType": "Block",
                "src": "1327:46:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1341:19:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 999,
                              "name": "freezeOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 973,
                              "src": "1342:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 1001,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1000,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 996,
                              "src": "1351:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1342:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 998,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1333:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1333:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1004,
                    "nodeType": "ExpressionStatement",
                    "src": "1333:28:6"
                  },
                  {
                    "id": 1005,
                    "nodeType": "PlaceholderStatement",
                    "src": "1367:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1007,
              "name": "whenNotFreezeOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 997,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 996,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1007,
                    "src": "1309:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 995,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1309:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1308:18:6"
              },
              "src": "1284:89:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1018,
                "nodeType": "Block",
                "src": "1417:45:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1012,
                            "name": "freezeOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 973,
                            "src": "1431:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 1014,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1013,
                            "name": "_account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1009,
                            "src": "1440:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1431:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1011,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1423:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1015,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1423:27:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1016,
                    "nodeType": "ExpressionStatement",
                    "src": "1423:27:6"
                  },
                  {
                    "id": 1017,
                    "nodeType": "PlaceholderStatement",
                    "src": "1456:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1019,
              "name": "whenFreezeOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1010,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1009,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1019,
                    "src": "1399:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1008,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1399:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1398:18:6"
              },
              "src": "1377:85:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1030,
                "nodeType": "Block",
                "src": "1510:55:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1024,
                            "name": "transferAccess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 977,
                            "src": "1526:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 1026,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1025,
                            "name": "_account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1021,
                            "src": "1541:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1526:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1023,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1518:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1027,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1518:33:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1028,
                    "nodeType": "ExpressionStatement",
                    "src": "1518:33:6"
                  },
                  {
                    "id": 1029,
                    "nodeType": "PlaceholderStatement",
                    "src": "1559:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1031,
              "name": "onTransferAccess",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1022,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1021,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1031,
                    "src": "1492:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1020,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1492:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1491:18:6"
              },
              "src": "1466:99:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1043,
                "nodeType": "Block",
                "src": "1614:56:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1630:25:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1036,
                              "name": "transferAccess",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 977,
                              "src": "1631:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 1038,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1037,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1033,
                              "src": "1646:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1631:24:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1035,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1622:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1040,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:34:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1041,
                    "nodeType": "ExpressionStatement",
                    "src": "1622:34:6"
                  },
                  {
                    "id": 1042,
                    "nodeType": "PlaceholderStatement",
                    "src": "1664:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1044,
              "name": "offTransferAccess",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1034,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1033,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1044,
                    "src": "1596:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1032,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1596:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1595:18:6"
              },
              "src": "1569:101:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1058,
                "nodeType": "Block",
                "src": "1723:44:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "freezed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 969,
                        "src": "1729:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1739:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "1729:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1054,
                    "nodeType": "ExpressionStatement",
                    "src": "1729:14:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1055,
                        "name": "Freeze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          952,
                          958
                        ],
                        "referencedDeclaration": 952,
                        "src": "1754:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1754:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1057,
                    "nodeType": "EmitStatement",
                    "src": "1749:13:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1059,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1047,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1046,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "1692:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1692:9:6"
                },
                {
                  "arguments": null,
                  "id": 1049,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1048,
                    "name": "whenNotFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 986,
                    "src": "1702:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1702:13:6"
                }
              ],
              "name": "freeze",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1045,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1689:2:6"
              },
              "returnParameters": {
                "id": 1050,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1723:0:6"
              },
              "scope": 1135,
              "src": "1674:93:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1073,
                "nodeType": "Block",
                "src": "1819:47:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1066,
                        "name": "freezed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 969,
                        "src": "1825:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1835:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1825:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1069,
                    "nodeType": "ExpressionStatement",
                    "src": "1825:15:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1070,
                        "name": "Unfreeze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 954,
                        "src": "1851:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1851:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1072,
                    "nodeType": "EmitStatement",
                    "src": "1846:15:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1074,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1062,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1061,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "1791:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1791:9:6"
                },
                {
                  "arguments": null,
                  "id": 1064,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "whenFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 994,
                    "src": "1801:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1801:10:6"
                }
              ],
              "name": "unfreeze",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1060,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1788:2:6"
              },
              "returnParameters": {
                "id": 1065,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1819:0:6"
              },
              "scope": 1135,
              "src": "1771:95:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1093,
                "nodeType": "Block",
                "src": "2077:68:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1083,
                          "name": "freezeOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 973,
                          "src": "2083:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1085,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1084,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1076,
                          "src": "2092:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2083:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2104:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "2083:26:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1088,
                    "nodeType": "ExpressionStatement",
                    "src": "2083:26:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1090,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1076,
                          "src": "2131:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1089,
                        "name": "UnfreezeOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 962,
                        "src": "2120:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 1091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2120:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1092,
                    "nodeType": "EmitStatement",
                    "src": "2115:25:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1094,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1079,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1078,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2048:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2048:9:6"
                },
                {
                  "arguments": null,
                  "id": 1081,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1080,
                    "name": "whenFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 994,
                    "src": "2058:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2058:10:6"
                }
              ],
              "name": "unfreezeOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1077,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1076,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1094,
                    "src": "2030:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1075,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2030:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2029:18:6"
              },
              "returnParameters": {
                "id": 1082,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2077:0:6"
              },
              "scope": 1135,
              "src": "2010:135:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1113,
                "nodeType": "Block",
                "src": "2238:75:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1104,
                          "name": "transferAccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 977,
                          "src": "2246:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1106,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1105,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1096,
                          "src": "2261:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2246:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2273:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "2246:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1109,
                    "nodeType": "ExpressionStatement",
                    "src": "2246:31:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1110,
                        "name": "TransferAccessOn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 964,
                        "src": "2290:16:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2290:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1112,
                    "nodeType": "EmitStatement",
                    "src": "2285:23:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1114,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1099,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1098,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2193:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2193:9:6"
                },
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 1101,
                      "name": "_account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1096,
                      "src": "2221:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 1102,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1100,
                    "name": "offTransferAccess",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1044,
                    "src": "2203:17:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_address_$",
                      "typeString": "modifier (address)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2203:27:6"
                }
              ],
              "name": "transferAccessOn",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1097,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1096,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1114,
                    "src": "2175:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1095,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2175:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2174:18:6"
              },
              "returnParameters": {
                "id": 1103,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2238:0:6"
              },
              "scope": 1135,
              "src": "2149:164:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1133,
                "nodeType": "Block",
                "src": "2406:77:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1124,
                          "name": "transferAccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 977,
                          "src": "2414:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1126,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1125,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1116,
                          "src": "2429:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2414:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2441:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "2414:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1129,
                    "nodeType": "ExpressionStatement",
                    "src": "2414:32:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1130,
                        "name": "TransferAccessOff",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 966,
                        "src": "2459:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2459:19:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1132,
                    "nodeType": "EmitStatement",
                    "src": "2454:24:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1134,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1119,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1118,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2362:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2362:9:6"
                },
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 1121,
                      "name": "_account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1116,
                      "src": "2389:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 1122,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1120,
                    "name": "onTransferAccess",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1031,
                    "src": "2372:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_address_$",
                      "typeString": "modifier (address)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2372:26:6"
                }
              ],
              "name": "transferAccessOff",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1117,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1116,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1134,
                    "src": "2344:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1115,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2344:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2343:18:6"
              },
              "returnParameters": {
                "id": 1123,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2406:0:6"
              },
              "scope": 1135,
              "src": "2317:166:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "781:1705:6"
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1136,
                "name": "TableFactory",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 948,
                "src": "2519:12:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_TableFactory_$948",
                  "typeString": "contract TableFactory"
                }
              },
              "id": 1137,
              "nodeType": "InheritanceSpecifier",
              "src": "2519:12:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1138,
                "name": "SchwabToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 700,
                "src": "2533:11:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SchwabToken_$700",
                  "typeString": "contract SchwabToken"
                }
              },
              "id": 1139,
              "nodeType": "InheritanceSpecifier",
              "src": "2533:11:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1140,
                "name": "Freezing",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1135,
                "src": "2546:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Freezing_$1135",
                  "typeString": "contract Freezing"
                }
              },
              "id": 1141,
              "nodeType": "InheritanceSpecifier",
              "src": "2546:8:6"
            }
          ],
          "contractDependencies": [
            544,
            647,
            691,
            700,
            866,
            948,
            1135,
            1389,
            1583,
            1593
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 1286,
          "linearizedBaseContracts": [
            1286,
            1135,
            700,
            691,
            1389,
            544,
            647,
            1583,
            1593,
            948,
            866
          ],
          "name": "UserAuthenticate",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 1144,
              "libraryName": {
                "contractScope": null,
                "id": 1142,
                "name": "SafeMath",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1721,
                "src": "2566:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeMath_$1721",
                  "typeString": "library SafeMath"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "2560:27:6",
              "typeName": {
                "id": 1143,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2579:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "constant": false,
              "id": 1148,
              "name": "tableApprovals",
              "nodeType": "VariableDeclaration",
              "scope": 1286,
              "src": "2591:40:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 1147,
                "keyType": {
                  "id": 1145,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2600:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2591:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 1146,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2608:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1162,
                "nodeType": "Block",
                "src": "2675:107:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1153,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1755,
                              "src": "2730:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2730:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1155,
                              "name": "tableToOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 896,
                              "src": "2744:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 1157,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1156,
                              "name": "_creationId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1150,
                              "src": "2757:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2744:25:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2730:39:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1152,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "2722:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2722:48:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1160,
                    "nodeType": "ExpressionStatement",
                    "src": "2722:48:6"
                  },
                  {
                    "id": 1161,
                    "nodeType": "PlaceholderStatement",
                    "src": "2776:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1163,
              "name": "onlyOwnerOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1151,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1150,
                    "name": "_creationId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1163,
                    "src": "2657:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1149,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2657:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2656:18:6"
              },
              "src": "2636:146:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1182,
                "nodeType": "Block",
                "src": "2890:63:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1177,
                          "name": "_tableId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1165,
                          "src": "2921:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1178,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1167,
                          "src": "2931:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1179,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1169,
                          "src": "2938:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1174,
                          "name": "TableFactory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 948,
                          "src": "2896:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_TableFactory_$948_$",
                            "typeString": "type(contract TableFactory)"
                          }
                        },
                        "id": 1176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "createTable",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 947,
                        "src": "2896:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory,string memory)"
                        }
                      },
                      "id": 1180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2896:52:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1181,
                    "nodeType": "ExpressionStatement",
                    "src": "2896:52:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1183,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1172,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1171,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2873:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2873:9:6"
                }
              ],
              "name": "createTableToken",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1170,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1165,
                    "name": "_tableId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2812:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1164,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2812:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1167,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2827:19:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1166,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2827:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1169,
                    "name": "_database",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2848:23:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1168,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2848:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2811:61:6"
              },
              "returnParameters": {
                "id": 1173,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2890:0:6"
              },
              "scope": 1286,
              "src": "2786:167:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1194,
                "nodeType": "Block",
                "src": "3023:84:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1190,
                        "name": "ownerTableCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 900,
                        "src": "3036:15:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1192,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1191,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "3052:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3036:23:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1189,
                    "id": 1193,
                    "nodeType": "Return",
                    "src": "3029:30:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1195,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1186,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1185,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1195,
                    "src": "2977:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1184,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2977:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2976:16:6"
              },
              "returnParameters": {
                "id": 1189,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1188,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1195,
                    "src": "3014:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1187,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3014:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3013:9:6"
              },
              "scope": 1286,
              "src": "2958:149:6",
              "stateMutability": "view",
              "superFunction": 74,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1206,
                "nodeType": "Block",
                "src": "3176:71:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1202,
                        "name": "tableToOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 896,
                        "src": "3189:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 1204,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1203,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1197,
                        "src": "3202:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3189:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 1201,
                    "id": 1205,
                    "nodeType": "Return",
                    "src": "3182:29:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1207,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "ownerOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1198,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1197,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1207,
                    "src": "3128:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1196,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3128:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3127:18:6"
              },
              "returnParameters": {
                "id": 1201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1200,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1207,
                    "src": "3167:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1199,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3167:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3166:9:6"
              },
              "scope": 1286,
              "src": "3111:136:6",
              "stateMutability": "view",
              "superFunction": 98,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1252,
                "nodeType": "Block",
                "src": "3324:238:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1216,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "3362:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1218,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1217,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1211,
                          "src": "3378:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3362:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3410:1:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1219,
                              "name": "ownerTableCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 900,
                              "src": "3385:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1221,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1220,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1211,
                              "src": "3401:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3385:20:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1700,
                          "src": "3385:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3385:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3362:50:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1226,
                    "nodeType": "ExpressionStatement",
                    "src": "3362:50:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1227,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "3418:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1230,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1228,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1755,
                            "src": "3434:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3434:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3418:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3480:1:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1231,
                              "name": "ownerTableCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 900,
                              "src": "3448:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1234,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1232,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3464:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1233,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3464:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3448:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1676,
                          "src": "3448:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3448:34:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3418:64:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1239,
                    "nodeType": "ExpressionStatement",
                    "src": "3418:64:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1240,
                          "name": "tableToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 896,
                          "src": "3488:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 1242,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1241,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1213,
                          "src": "3501:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3488:22:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1243,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1211,
                        "src": "3513:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3488:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1245,
                    "nodeType": "ExpressionStatement",
                    "src": "3488:28:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1247,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1209,
                          "src": "3536:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1248,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1211,
                          "src": "3543:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1249,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1213,
                          "src": "3548:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1246,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 557,
                        "src": "3527:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3527:30:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1251,
                    "nodeType": "EmitStatement",
                    "src": "3522:35:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1253,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1214,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1209,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3270:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3270:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1211,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3285:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1210,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3285:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1213,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3298:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1212,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3298:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3269:46:6"
              },
              "returnParameters": {
                "id": 1215,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3324:0:6"
              },
              "scope": 1286,
              "src": "3251:311:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 1284,
                "nodeType": "Block",
                "src": "3641:195:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 1275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1263,
                                "name": "tableToOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 896,
                                "src": "3715:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                  "typeString": "mapping(uint256 => address)"
                                }
                              },
                              "id": 1265,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1264,
                                "name": "_tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1259,
                                "src": "3728:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3715:22:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1266,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3741:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3741:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3715:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1274,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1269,
                                "name": "tableApprovals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1148,
                                "src": "3755:14:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                  "typeString": "mapping(uint256 => address)"
                                }
                              },
                              "id": 1271,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1270,
                                "name": "_tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1259,
                                "src": "3770:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3755:24:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1272,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3783:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3783:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3755:38:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3715:78:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1262,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "3706:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3706:88:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1277,
                    "nodeType": "ExpressionStatement",
                    "src": "3706:88:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1279,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1255,
                          "src": "3810:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1280,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1257,
                          "src": "3817:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1281,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1259,
                          "src": "3822:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1278,
                        "name": "_transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1253,
                        "src": "3800:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3800:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1283,
                    "nodeType": "ExpressionStatement",
                    "src": "3800:31:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1285,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1260,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1255,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3588:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1254,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3588:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1257,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3603:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1256,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3603:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1259,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3616:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1258,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3616:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3587:46:6"
              },
              "returnParameters": {
                "id": 1261,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3641:0:6"
              },
              "scope": 1286,
              "src": "3566:270:6",
              "stateMutability": "nonpayable",
              "superFunction": 232,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "2490:1599:6"
        }
      ],
      "src": "0:4090:6"
    },
    "legacyAST": {
      "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/UserAuthenticate.sol",
      "exportedSymbols": {
        "Freezing": [
          1135
        ],
        "TableFactory": [
          948
        ],
        "UserAuthenticate": [
          1286
        ]
      },
      "id": 1287,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 868,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:32:6"
        },
        {
          "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/Ownable.sol",
          "file": "./Ownable.sol",
          "id": 869,
          "nodeType": "ImportDirective",
          "scope": 1287,
          "sourceUnit": 867,
          "src": "33:23:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/Users/dohyunshin/Projects/UTProjects/schwack-end/smart_contracts/contracts/ERC721/SchwabToken.sol",
          "file": "./ERC721/SchwabToken.sol",
          "id": 870,
          "nodeType": "ImportDirective",
          "scope": 1287,
          "sourceUnit": 701,
          "src": "57:34:6",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 871,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 866,
                "src": "118:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$866",
                  "typeString": "contract Ownable"
                }
              },
              "id": 872,
              "nodeType": "InheritanceSpecifier",
              "src": "118:7:6"
            }
          ],
          "contractDependencies": [
            866
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 948,
          "linearizedBaseContracts": [
            948,
            866
          ],
          "name": "TableFactory",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 880,
              "name": "NewTable",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 879,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 874,
                    "indexed": false,
                    "name": "creationId",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "148:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 873,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "148:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 876,
                    "indexed": false,
                    "name": "name",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "165:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 875,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "165:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 878,
                    "indexed": false,
                    "name": "database",
                    "nodeType": "VariableDeclaration",
                    "scope": 880,
                    "src": "178:15:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 877,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "178:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "147:47:6"
              },
              "src": "133:62:6"
            },
            {
              "canonicalName": "TableFactory.Table",
              "id": 889,
              "members": [
                {
                  "constant": false,
                  "id": 882,
                  "name": "creationId",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "222:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 881,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "222:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 884,
                  "name": "tableId",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "245:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 883,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:4:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 886,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "265:11:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 885,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 888,
                  "name": "database",
                  "nodeType": "VariableDeclaration",
                  "scope": 889,
                  "src": "284:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 887,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:6:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Table",
              "nodeType": "StructDefinition",
              "scope": 948,
              "src": "201:105:6",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 892,
              "name": "tables",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "312:21:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage",
                "typeString": "struct TableFactory.Table[]"
              },
              "typeName": {
                "baseType": {
                  "contractScope": null,
                  "id": 890,
                  "name": "Table",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 889,
                  "src": "312:5:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Table_$889_storage_ptr",
                    "typeString": "struct TableFactory.Table"
                  }
                },
                "id": 891,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "312:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage_ptr",
                  "typeString": "struct TableFactory.Table[]"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 896,
              "name": "tableToOwner",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "340:45:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 895,
                "keyType": {
                  "id": 893,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "349:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "340:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 894,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 900,
              "name": "ownerTableCount",
              "nodeType": "VariableDeclaration",
              "scope": 948,
              "src": "391:41:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 899,
                "keyType": {
                  "id": 897,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "400:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "391:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 898,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "411:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 946,
                "nodeType": "Block",
                "src": "538:237:6",
                "statements": [
                  {
                    "assignments": [
                      912
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 912,
                        "name": "creationId",
                        "nodeType": "VariableDeclaration",
                        "scope": 946,
                        "src": "548:15:6",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 911,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "548:4:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 926,
                    "initialValue": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 925,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 917,
                                    "name": "now",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1757,
                                    "src": "591:3:6",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 916,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "584:6:6",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint32_$",
                                    "typeString": "type(uint32)"
                                  },
                                  "typeName": "uint32"
                                },
                                "id": 918,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "584:11:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 919,
                                "name": "_tableId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 902,
                                "src": "597:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 920,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 904,
                                "src": "607:5:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 921,
                                "name": "_database",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 906,
                                "src": "614:9:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 915,
                              "name": "Table",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 889,
                              "src": "578:5:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Table_$889_storage_ptr_$",
                                "typeString": "type(struct TableFactory.Table storage pointer)"
                              }
                            },
                            "id": 922,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "578:46:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Table_$889_memory",
                              "typeString": "struct TableFactory.Table memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Table_$889_memory",
                              "typeString": "struct TableFactory.Table memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 913,
                            "name": "tables",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 892,
                            "src": "566:6:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Table_$889_storage_$dyn_storage",
                              "typeString": "struct TableFactory.Table storage ref[] storage ref"
                            }
                          },
                          "id": 914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "push",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "566:11:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Table_$889_storage_$returns$_t_uint256_$",
                            "typeString": "function (struct TableFactory.Table storage ref) returns (uint256)"
                          }
                        },
                        "id": 923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "566:59:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 924,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "628:1:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "566:63:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "548:81:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 932,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 927,
                          "name": "tableToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 896,
                          "src": "639:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 929,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 928,
                          "name": "creationId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 912,
                          "src": "652:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "639:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 930,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1755,
                          "src": "666:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "666:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "639:37:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 933,
                    "nodeType": "ExpressionStatement",
                    "src": "639:37:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "686:29:6",
                      "subExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 934,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "686:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 937,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 935,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1755,
                            "src": "702:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "702:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "686:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 939,
                    "nodeType": "ExpressionStatement",
                    "src": "686:29:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 941,
                          "name": "creationId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 912,
                          "src": "739:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 942,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 904,
                          "src": "751:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 943,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 906,
                          "src": "758:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 940,
                        "name": "NewTable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 880,
                        "src": "730:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory,string memory)"
                        }
                      },
                      "id": 944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "730:38:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 945,
                    "nodeType": "EmitStatement",
                    "src": "725:43:6"
                  }
                ]
              },
              "documentation": null,
              "id": 947,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 909,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 908,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "521:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "521:9:6"
                }
              ],
              "name": "createTable",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 907,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 902,
                    "name": "_tableId",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "460:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 901,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "460:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 904,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "475:19:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 903,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "475:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 906,
                    "name": "_database",
                    "nodeType": "VariableDeclaration",
                    "scope": 947,
                    "src": "496:23:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 905,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "496:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "459:61:6"
              },
              "returnParameters": {
                "id": 910,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "538:0:6"
              },
              "scope": 948,
              "src": "439:336:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "93:685:6"
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 949,
                "name": "Ownable",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 866,
                "src": "802:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Ownable_$866",
                  "typeString": "contract Ownable"
                }
              },
              "id": 950,
              "nodeType": "InheritanceSpecifier",
              "src": "802:7:6"
            }
          ],
          "contractDependencies": [
            866
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 1135,
          "linearizedBaseContracts": [
            1135,
            866
          ],
          "name": "Freezing",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "documentation": null,
              "id": 952,
              "name": "Freeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 951,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "887:2:6"
              },
              "src": "875:15:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 954,
              "name": "Unfreeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 953,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "907:2:6"
              },
              "src": "893:17:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 958,
              "name": "Freeze",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 957,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 956,
                    "indexed": false,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 958,
                    "src": "926:10:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 955,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "926:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "925:12:6"
              },
              "src": "913:25:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 962,
              "name": "UnfreezeOf",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 961,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 960,
                    "indexed": false,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "scope": 962,
                    "src": "958:10:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 959,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "958:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "957:12:6"
              },
              "src": "941:29:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 964,
              "name": "TransferAccessOn",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 963,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "995:2:6"
              },
              "src": "973:25:6"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 966,
              "name": "TransferAccessOff",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 965,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1024:2:6"
              },
              "src": "1001:26:6"
            },
            {
              "constant": false,
              "id": 969,
              "name": "freezed",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1031:27:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "typeName": {
                "id": 967,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1031:4:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "66616c7365",
                "id": 968,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "bool",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1053:5:6",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "value": "false"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 973,
              "name": "freezeOf",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1063:41:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 972,
                "keyType": {
                  "id": 970,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1072:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1063:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 971,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1083:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 977,
              "name": "transferAccess",
              "nodeType": "VariableDeclaration",
              "scope": 1135,
              "src": "1108:47:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 976,
                "keyType": {
                  "id": 974,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1117:7:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1108:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 975,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1128:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 985,
                "nodeType": "Block",
                "src": "1185:35:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1199:8:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 980,
                            "name": "freezed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 969,
                            "src": "1200:7:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 979,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1191:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 982,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1191:17:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 983,
                    "nodeType": "ExpressionStatement",
                    "src": "1191:17:6"
                  },
                  {
                    "id": 984,
                    "nodeType": "PlaceholderStatement",
                    "src": "1214:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 986,
              "name": "whenNotFreeze",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 978,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1182:2:6"
              },
              "src": "1160:60:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 993,
                "nodeType": "Block",
                "src": "1246:34:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 989,
                          "name": "freezed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 969,
                          "src": "1260:7:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 988,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1252:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1252:16:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 991,
                    "nodeType": "ExpressionStatement",
                    "src": "1252:16:6"
                  },
                  {
                    "id": 992,
                    "nodeType": "PlaceholderStatement",
                    "src": "1274:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 994,
              "name": "whenFreeze",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 987,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1243:2:6"
              },
              "src": "1224:56:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1006,
                "nodeType": "Block",
                "src": "1327:46:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1341:19:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 999,
                              "name": "freezeOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 973,
                              "src": "1342:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 1001,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1000,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 996,
                              "src": "1351:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1342:18:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 998,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1333:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1333:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1004,
                    "nodeType": "ExpressionStatement",
                    "src": "1333:28:6"
                  },
                  {
                    "id": 1005,
                    "nodeType": "PlaceholderStatement",
                    "src": "1367:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1007,
              "name": "whenNotFreezeOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 997,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 996,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1007,
                    "src": "1309:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 995,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1309:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1308:18:6"
              },
              "src": "1284:89:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1018,
                "nodeType": "Block",
                "src": "1417:45:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1012,
                            "name": "freezeOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 973,
                            "src": "1431:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 1014,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1013,
                            "name": "_account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1009,
                            "src": "1440:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1431:18:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1011,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1423:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1015,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1423:27:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1016,
                    "nodeType": "ExpressionStatement",
                    "src": "1423:27:6"
                  },
                  {
                    "id": 1017,
                    "nodeType": "PlaceholderStatement",
                    "src": "1456:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1019,
              "name": "whenFreezeOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1010,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1009,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1019,
                    "src": "1399:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1008,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1399:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1398:18:6"
              },
              "src": "1377:85:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1030,
                "nodeType": "Block",
                "src": "1510:55:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1024,
                            "name": "transferAccess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 977,
                            "src": "1526:14:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 1026,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1025,
                            "name": "_account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1021,
                            "src": "1541:8:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1526:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1023,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1518:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1027,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1518:33:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1028,
                    "nodeType": "ExpressionStatement",
                    "src": "1518:33:6"
                  },
                  {
                    "id": 1029,
                    "nodeType": "PlaceholderStatement",
                    "src": "1559:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1031,
              "name": "onTransferAccess",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1022,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1021,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1031,
                    "src": "1492:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1020,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1492:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1491:18:6"
              },
              "src": "1466:99:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1043,
                "nodeType": "Block",
                "src": "1614:56:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1630:25:6",
                          "subExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1036,
                              "name": "transferAccess",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 977,
                              "src": "1631:14:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 1038,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1037,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1033,
                              "src": "1646:8:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1631:24:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1035,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "1622:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1040,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1622:34:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1041,
                    "nodeType": "ExpressionStatement",
                    "src": "1622:34:6"
                  },
                  {
                    "id": 1042,
                    "nodeType": "PlaceholderStatement",
                    "src": "1664:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1044,
              "name": "offTransferAccess",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1034,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1033,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1044,
                    "src": "1596:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1032,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1596:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1595:18:6"
              },
              "src": "1569:101:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1058,
                "nodeType": "Block",
                "src": "1723:44:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "freezed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 969,
                        "src": "1729:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1739:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "1729:14:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1054,
                    "nodeType": "ExpressionStatement",
                    "src": "1729:14:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1055,
                        "name": "Freeze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          952,
                          958
                        ],
                        "referencedDeclaration": 952,
                        "src": "1754:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1754:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1057,
                    "nodeType": "EmitStatement",
                    "src": "1749:13:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1059,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1047,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1046,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "1692:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1692:9:6"
                },
                {
                  "arguments": null,
                  "id": 1049,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1048,
                    "name": "whenNotFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 986,
                    "src": "1702:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1702:13:6"
                }
              ],
              "name": "freeze",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1045,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1689:2:6"
              },
              "returnParameters": {
                "id": 1050,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1723:0:6"
              },
              "scope": 1135,
              "src": "1674:93:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1073,
                "nodeType": "Block",
                "src": "1819:47:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 1066,
                        "name": "freezed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 969,
                        "src": "1825:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1835:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "1825:15:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1069,
                    "nodeType": "ExpressionStatement",
                    "src": "1825:15:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1070,
                        "name": "Unfreeze",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 954,
                        "src": "1851:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1851:10:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1072,
                    "nodeType": "EmitStatement",
                    "src": "1846:15:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1074,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1062,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1061,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "1791:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1791:9:6"
                },
                {
                  "arguments": null,
                  "id": 1064,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "whenFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 994,
                    "src": "1801:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1801:10:6"
                }
              ],
              "name": "unfreeze",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1060,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1788:2:6"
              },
              "returnParameters": {
                "id": 1065,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1819:0:6"
              },
              "scope": 1135,
              "src": "1771:95:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1093,
                "nodeType": "Block",
                "src": "2077:68:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1083,
                          "name": "freezeOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 973,
                          "src": "2083:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1085,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1084,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1076,
                          "src": "2092:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2083:18:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2104:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "2083:26:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1088,
                    "nodeType": "ExpressionStatement",
                    "src": "2083:26:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1090,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1076,
                          "src": "2131:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 1089,
                        "name": "UnfreezeOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 962,
                        "src": "2120:10:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 1091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2120:20:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1092,
                    "nodeType": "EmitStatement",
                    "src": "2115:25:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1094,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1079,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1078,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2048:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2048:9:6"
                },
                {
                  "arguments": null,
                  "id": 1081,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1080,
                    "name": "whenFreeze",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 994,
                    "src": "2058:10:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2058:10:6"
                }
              ],
              "name": "unfreezeOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1077,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1076,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1094,
                    "src": "2030:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1075,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2030:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2029:18:6"
              },
              "returnParameters": {
                "id": 1082,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2077:0:6"
              },
              "scope": 1135,
              "src": "2010:135:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1113,
                "nodeType": "Block",
                "src": "2238:75:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1108,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1104,
                          "name": "transferAccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 977,
                          "src": "2246:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1106,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1105,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1096,
                          "src": "2261:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2246:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 1107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2273:4:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "2246:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1109,
                    "nodeType": "ExpressionStatement",
                    "src": "2246:31:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1110,
                        "name": "TransferAccessOn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 964,
                        "src": "2290:16:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2290:18:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1112,
                    "nodeType": "EmitStatement",
                    "src": "2285:23:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1114,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1099,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1098,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2193:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2193:9:6"
                },
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 1101,
                      "name": "_account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1096,
                      "src": "2221:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 1102,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1100,
                    "name": "offTransferAccess",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1044,
                    "src": "2203:17:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_address_$",
                      "typeString": "modifier (address)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2203:27:6"
                }
              ],
              "name": "transferAccessOn",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1097,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1096,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1114,
                    "src": "2175:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1095,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2175:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2174:18:6"
              },
              "returnParameters": {
                "id": 1103,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2238:0:6"
              },
              "scope": 1135,
              "src": "2149:164:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1133,
                "nodeType": "Block",
                "src": "2406:77:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1124,
                          "name": "transferAccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 977,
                          "src": "2414:14:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 1126,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1125,
                          "name": "_account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1116,
                          "src": "2429:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2414:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 1127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2441:5:6",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      },
                      "src": "2414:32:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1129,
                    "nodeType": "ExpressionStatement",
                    "src": "2414:32:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 1130,
                        "name": "TransferAccessOff",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 966,
                        "src": "2459:17:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 1131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2459:19:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1132,
                    "nodeType": "EmitStatement",
                    "src": "2454:24:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1134,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1119,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1118,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2362:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2362:9:6"
                },
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 1121,
                      "name": "_account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1116,
                      "src": "2389:8:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 1122,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1120,
                    "name": "onTransferAccess",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1031,
                    "src": "2372:16:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$_t_address_$",
                      "typeString": "modifier (address)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2372:26:6"
                }
              ],
              "name": "transferAccessOff",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1117,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1116,
                    "name": "_account",
                    "nodeType": "VariableDeclaration",
                    "scope": 1134,
                    "src": "2344:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1115,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2344:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2343:18:6"
              },
              "returnParameters": {
                "id": 1123,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2406:0:6"
              },
              "scope": 1135,
              "src": "2317:166:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "781:1705:6"
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1136,
                "name": "TableFactory",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 948,
                "src": "2519:12:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_TableFactory_$948",
                  "typeString": "contract TableFactory"
                }
              },
              "id": 1137,
              "nodeType": "InheritanceSpecifier",
              "src": "2519:12:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1138,
                "name": "SchwabToken",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 700,
                "src": "2533:11:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SchwabToken_$700",
                  "typeString": "contract SchwabToken"
                }
              },
              "id": 1139,
              "nodeType": "InheritanceSpecifier",
              "src": "2533:11:6"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 1140,
                "name": "Freezing",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1135,
                "src": "2546:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Freezing_$1135",
                  "typeString": "contract Freezing"
                }
              },
              "id": 1141,
              "nodeType": "InheritanceSpecifier",
              "src": "2546:8:6"
            }
          ],
          "contractDependencies": [
            544,
            647,
            691,
            700,
            866,
            948,
            1135,
            1389,
            1583,
            1593
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 1286,
          "linearizedBaseContracts": [
            1286,
            1135,
            700,
            691,
            1389,
            544,
            647,
            1583,
            1593,
            948,
            866
          ],
          "name": "UserAuthenticate",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 1144,
              "libraryName": {
                "contractScope": null,
                "id": 1142,
                "name": "SafeMath",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1721,
                "src": "2566:8:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_SafeMath_$1721",
                  "typeString": "library SafeMath"
                }
              },
              "nodeType": "UsingForDirective",
              "src": "2560:27:6",
              "typeName": {
                "id": 1143,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2579:7:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "constant": false,
              "id": 1148,
              "name": "tableApprovals",
              "nodeType": "VariableDeclaration",
              "scope": 1286,
              "src": "2591:40:6",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                "typeString": "mapping(uint256 => address)"
              },
              "typeName": {
                "id": 1147,
                "keyType": {
                  "id": 1145,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "2600:4:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "2591:25:6",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                  "typeString": "mapping(uint256 => address)"
                },
                "valueType": {
                  "id": 1146,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "2608:7:6",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                }
              },
              "value": null,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1162,
                "nodeType": "Block",
                "src": "2675:107:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 1158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1153,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1755,
                              "src": "2730:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1154,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2730:10:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1155,
                              "name": "tableToOwner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 896,
                              "src": "2744:12:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                "typeString": "mapping(uint256 => address)"
                              }
                            },
                            "id": 1157,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1156,
                              "name": "_creationId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1150,
                              "src": "2757:11:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2744:25:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2730:39:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1152,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "2722:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2722:48:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1160,
                    "nodeType": "ExpressionStatement",
                    "src": "2722:48:6"
                  },
                  {
                    "id": 1161,
                    "nodeType": "PlaceholderStatement",
                    "src": "2776:1:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1163,
              "name": "onlyOwnerOf",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 1151,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1150,
                    "name": "_creationId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1163,
                    "src": "2657:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1149,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2657:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2656:18:6"
              },
              "src": "2636:146:6",
              "visibility": "internal"
            },
            {
              "body": {
                "id": 1182,
                "nodeType": "Block",
                "src": "2890:63:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1177,
                          "name": "_tableId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1165,
                          "src": "2921:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1178,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1167,
                          "src": "2931:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1179,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1169,
                          "src": "2938:9:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 1174,
                          "name": "TableFactory",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 948,
                          "src": "2896:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_TableFactory_$948_$",
                            "typeString": "type(contract TableFactory)"
                          }
                        },
                        "id": 1176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "createTable",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 947,
                        "src": "2896:24:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory,string memory)"
                        }
                      },
                      "id": 1180,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2896:52:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1181,
                    "nodeType": "ExpressionStatement",
                    "src": "2896:52:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1183,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 1172,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 1171,
                    "name": "onlyOwner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 800,
                    "src": "2873:9:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2873:9:6"
                }
              ],
              "name": "createTableToken",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1170,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1165,
                    "name": "_tableId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2812:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1164,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2812:4:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1167,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2827:19:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1166,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2827:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1169,
                    "name": "_database",
                    "nodeType": "VariableDeclaration",
                    "scope": 1183,
                    "src": "2848:23:6",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 1168,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2848:6:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2811:61:6"
              },
              "returnParameters": {
                "id": 1173,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2890:0:6"
              },
              "scope": 1286,
              "src": "2786:167:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1194,
                "nodeType": "Block",
                "src": "3023:84:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1190,
                        "name": "ownerTableCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 900,
                        "src": "3036:15:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 1192,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1191,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1185,
                        "src": "3052:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3036:23:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 1189,
                    "id": 1193,
                    "nodeType": "Return",
                    "src": "3029:30:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1195,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1186,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1185,
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 1195,
                    "src": "2977:14:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1184,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2977:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2976:16:6"
              },
              "returnParameters": {
                "id": 1189,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1188,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1195,
                    "src": "3014:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1187,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3014:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3013:9:6"
              },
              "scope": 1286,
              "src": "2958:149:6",
              "stateMutability": "view",
              "superFunction": 74,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1206,
                "nodeType": "Block",
                "src": "3176:71:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1202,
                        "name": "tableToOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 896,
                        "src": "3189:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                          "typeString": "mapping(uint256 => address)"
                        }
                      },
                      "id": 1204,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1203,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1197,
                        "src": "3202:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3189:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 1201,
                    "id": 1205,
                    "nodeType": "Return",
                    "src": "3182:29:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1207,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "ownerOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1198,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1197,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1207,
                    "src": "3128:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1196,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3128:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3127:18:6"
              },
              "returnParameters": {
                "id": 1201,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1200,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 1207,
                    "src": "3167:7:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1199,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3167:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3166:9:6"
              },
              "scope": 1286,
              "src": "3111:136:6",
              "stateMutability": "view",
              "superFunction": 98,
              "visibility": "public"
            },
            {
              "body": {
                "id": 1252,
                "nodeType": "Block",
                "src": "3324:238:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1216,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "3362:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1218,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1217,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1211,
                          "src": "3378:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3362:20:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3410:1:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1219,
                              "name": "ownerTableCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 900,
                              "src": "3385:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1221,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1220,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1211,
                              "src": "3401:3:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3385:20:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "add",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1700,
                          "src": "3385:24:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3385:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3362:50:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1226,
                    "nodeType": "ExpressionStatement",
                    "src": "3362:50:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1227,
                          "name": "ownerTableCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 900,
                          "src": "3418:15:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 1230,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1228,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1755,
                            "src": "3434:3:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3434:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3418:27:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3480:1:6",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1231,
                              "name": "ownerTableCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 900,
                              "src": "3448:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 1234,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1232,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3464:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1233,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3464:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3448:27:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 1235,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1676,
                          "src": "3448:31:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 1237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3448:34:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3418:64:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1239,
                    "nodeType": "ExpressionStatement",
                    "src": "3418:64:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1244,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1240,
                          "name": "tableToOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 896,
                          "src": "3488:12:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                            "typeString": "mapping(uint256 => address)"
                          }
                        },
                        "id": 1242,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1241,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1213,
                          "src": "3501:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3488:22:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 1243,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1211,
                        "src": "3513:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "3488:28:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 1245,
                    "nodeType": "ExpressionStatement",
                    "src": "3488:28:6"
                  },
                  {
                    "eventCall": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1247,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1209,
                          "src": "3536:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1248,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1211,
                          "src": "3543:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1249,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1213,
                          "src": "3548:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1246,
                        "name": "Transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 557,
                        "src": "3527:8:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3527:30:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1251,
                    "nodeType": "EmitStatement",
                    "src": "3522:35:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1253,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1214,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1209,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3270:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3270:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1211,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3285:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1210,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3285:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1213,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1253,
                    "src": "3298:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1212,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3298:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3269:46:6"
              },
              "returnParameters": {
                "id": 1215,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3324:0:6"
              },
              "scope": 1286,
              "src": "3251:311:6",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 1284,
                "nodeType": "Block",
                "src": "3641:195:6",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 1275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1263,
                                "name": "tableToOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 896,
                                "src": "3715:12:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                  "typeString": "mapping(uint256 => address)"
                                }
                              },
                              "id": 1265,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1264,
                                "name": "_tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1259,
                                "src": "3728:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3715:22:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1266,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3741:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3741:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3715:36:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1274,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 1269,
                                "name": "tableApprovals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1148,
                                "src": "3755:14:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_address_$",
                                  "typeString": "mapping(uint256 => address)"
                                }
                              },
                              "id": 1271,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 1270,
                                "name": "_tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1259,
                                "src": "3770:8:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3755:24:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1272,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1755,
                                "src": "3783:3:6",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1273,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3783:10:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "3755:38:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3715:78:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 1262,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1758,
                          1759
                        ],
                        "referencedDeclaration": 1758,
                        "src": "3706:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 1276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3706:88:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1277,
                    "nodeType": "ExpressionStatement",
                    "src": "3706:88:6"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 1279,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1255,
                          "src": "3810:5:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1280,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1257,
                          "src": "3817:3:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 1281,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1259,
                          "src": "3822:8:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 1278,
                        "name": "_transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1253,
                        "src": "3800:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 1282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3800:31:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1283,
                    "nodeType": "ExpressionStatement",
                    "src": "3800:31:6"
                  }
                ]
              },
              "documentation": null,
              "id": 1285,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 1260,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1255,
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3588:13:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1254,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3588:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1257,
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3603:11:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1256,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3603:7:6",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1259,
                    "name": "_tokenId",
                    "nodeType": "VariableDeclaration",
                    "scope": 1285,
                    "src": "3616:16:6",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1258,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3616:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "3587:46:6"
              },
              "returnParameters": {
                "id": 1261,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3641:0:6"
              },
              "scope": 1286,
              "src": "3566:270:6",
              "stateMutability": "nonpayable",
              "superFunction": 232,
              "visibility": "public"
            }
          ],
          "scope": 1287,
          "src": "2490:1599:6"
        }
      ],
      "src": "0:4090:6"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {
          "0x615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de": {
            "anonymous": false,
            "inputs": [],
            "name": "Freeze",
            "type": "event",
            "signature": "0x615acbaede366d76a8b8cb2a9ada6a71495f0786513d71aa97aaf0c3910b78de"
          },
          "0x2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded": {
            "anonymous": false,
            "inputs": [],
            "name": "Unfreeze",
            "type": "event",
            "signature": "0x2f05ba71d0df11bf5fa562a6569d70c4f80da84284badbe015ce1456063d0ded"
          },
          "0xaf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc323049": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "to",
                "type": "address"
              }
            ],
            "name": "Freeze",
            "type": "event",
            "signature": "0xaf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc323049"
          },
          "0x8c6eeed3d39dffff685e18609fe88a9ac5445fe9e5e040bad017160a1c36a38c": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "to",
                "type": "address"
              }
            ],
            "name": "UnfreezeOf",
            "type": "event",
            "signature": "0x8c6eeed3d39dffff685e18609fe88a9ac5445fe9e5e040bad017160a1c36a38c"
          },
          "0x6ca27a1cd0d569bf14783cb6e210f86fde6257948765cf6b00e203620a66f336": {
            "anonymous": false,
            "inputs": [],
            "name": "TransferAccessOn",
            "type": "event",
            "signature": "0x6ca27a1cd0d569bf14783cb6e210f86fde6257948765cf6b00e203620a66f336"
          },
          "0x6c2d504e07f6ab725bcb41deee55a5809ecdca13297f060fa925865af3915fbd": {
            "anonymous": false,
            "inputs": [],
            "name": "TransferAccessOff",
            "type": "event",
            "signature": "0x6c2d504e07f6ab725bcb41deee55a5809ecdca13297f060fa925865af3915fbd"
          },
          "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "account",
                "type": "address"
              }
            ],
            "name": "MinterAdded",
            "type": "event",
            "signature": "0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"
          },
          "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "account",
                "type": "address"
              }
            ],
            "name": "MinterRemoved",
            "type": "event",
            "signature": "0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event",
            "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event",
            "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
          },
          "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event",
            "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
          },
          "0x047e617a8af48c14ec140c1e3b1f1920821ca1675d0c19756be36bfbe772b8ca": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "creationId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "name",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "database",
                "type": "string"
              }
            ],
            "name": "NewTable",
            "type": "event",
            "signature": "0x047e617a8af48c14ec140c1e3b1f1920821ca1675d0c19756be36bfbe772b8ca"
          },
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event",
            "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
          }
        },
        "links": {},
        "address": "0x924c12DBbD8F945525240c99eCF35bCA86EE766d",
        "transactionHash": "0x1fd625fbfd2a9bedc50166c39a4c300f9560f27d014d267c5bfdc4e255fe3b9c"
      }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2019-01-26T07:13:47.413Z",
    "devdoc": {
      "methods": {
        "approve(address,uint256)": {
          "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
          "params": {
            "to": "address to be approved for the given token ID",
            "tokenId": "uint256 ID of the token to be approved"
          }
        },
        "getApproved(uint256)": {
          "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
          "params": {
            "tokenId": "uint256 ID of the token to query the approval of"
          },
          "return": "address currently approved for the given token ID"
        },
        "isApprovedForAll(address,address)": {
          "details": "Tells whether an operator is approved by a given owner",
          "params": {
            "operator": "operator address which you want to query the approval of",
            "owner": "owner address which you want to query the approval of"
          },
          "return": "bool whether the given operator is approved by the given owner"
        },
        "isOwner()": {
          "return": "true if `msg.sender` is the owner of the contract."
        },
        "mint(address,uint256)": {
          "details": "Function to mint tokens",
          "params": {
            "to": "The address that will receive the minted tokens.",
            "tokenId": "The token id to mint."
          },
          "return": "A boolean that indicates if the operation was successful."
        },
        "owner()": {
          "return": "the address of the owner."
        },
        "renounceOwnership()": {
          "details": "Allows the current owner to relinquish control of the contract."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
          "params": {
            "from": "current owner of the token",
            "to": "address to receive the ownership of the given token ID",
            "tokenId": "uint256 ID of the token to be transferred"
          }
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
          "params": {
            "_data": "bytes data to send along with a safe transfer check",
            "from": "current owner of the token",
            "to": "address to receive the ownership of the given token ID",
            "tokenId": "uint256 ID of the token to be transferred"
          }
        },
        "setApprovalForAll(address,bool)": {
          "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
          "params": {
            "approved": "representing the status of the approval to be set",
            "to": "operator address to set the approval"
          }
        },
        "supportsInterface(bytes4)": {
          "details": "implement supportsInterface(bytes4) using a lookup table"
        },
        "transferOwnership(address)": {
          "details": "Allows the current owner to transfer control of the contract to a newOwner.",
          "params": {
            "newOwner": "The address to transfer ownership to."
          }
        }
      }
    },
    "userdoc": {
      "methods": {
        "renounceOwnership()": {
          "notice": "Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore."
        }
      }
    }
  }
]

module.exports = userauthenticate_abi
