const address = "0x7451f0e04bC5C01D10aa46FE2741B3dD974caA53";

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
				"internalType": "string",
				"name": "_contract_info",
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
				"internalType": "string",
				"name": "_contract_info",
				"type": "string"
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
				"internalType": "string",
				"name": "_contract_info",
				"type": "string"
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
	}
];

module.exports = { address, abi };