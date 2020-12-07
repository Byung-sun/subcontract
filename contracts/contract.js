const address = "0x20228A305d348d83B0E2c971b7fA94974fdfFa02";

const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "payments",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "contract_num",
        "type": "uint64"
      },
      {
        "internalType": "uint8",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "total_cost",
        "type": "string"
      },
      {
        "internalType": "uint128",
        "name": "ready_made_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "labor_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "exception_cost",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "etc",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "_contract_info",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_total_cost",
        "type": "string"
      }
    ],
    "name": "enroll_contract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "sign_contract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "refuse_contract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "confirm_contract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "view_contract",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "_ready_made_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_labor_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_exception_cost",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "_etc",
        "type": "string"
      }
    ],
    "name": "request_payment",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "_ready_made_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_labor_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_exception_cost",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "_etc",
        "type": "string"
      }
    ],
    "name": "payment",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "_ready_made_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_labor_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_exception_cost",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "_etc",
        "type": "string"
      }
    ],
    "name": "confirm_payment",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "_ready_made_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_labor_cost",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_exception_cost",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "_etc",
        "type": "string"
      }
    ],
    "name": "refuse_payment",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "view_count",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "view_payment",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "view_payments",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_contract_num",
        "type": "uint64"
      }
    ],
    "name": "view_payment_state",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      },
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

module.exports = { address, abi };