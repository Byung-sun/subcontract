const address = "0xb407730130331Ed641B4F992e07d71ad91998542";

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_contract_num",
				"type": "uint64"
			}
		],
		"name": "confirm_contract",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_contract_num",
				"type": "uint64"
			}
		],
		"name": "refuse_contract",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
			}
		],
		"name": "request_payment",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_contract_num",
				"type": "uint64"
			}
		],
		"name": "sign_contract",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
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
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
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
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
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
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = { address, abi };