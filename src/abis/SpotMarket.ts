export const SpotMarketABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "permit2Address",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dutchOrderValidator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "limitOrderValidator",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "BaseCurrencyNotSettled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerIsNotFiller",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "DeadlinePassed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidMarket",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RequiredQuoteAmountExceedsMax",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SettlementContractIsNotWhitelisted",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SignerIsNotVaultOwner",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "trader",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "filler",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "baseToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "quoteToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "baseAmount",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "quoteAmount",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "validatorAddress",
        "type": "address"
      }
    ],
    "name": "SpotTraded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "order",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "sig",
            "type": "bytes"
          }
        ],
        "internalType": "struct IFillerMarket.SignedOrder",
        "name": "order",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "fee",
            "type": "int256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "encodedData",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "maxQuoteAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "partialBaseAmount",
                "type": "uint256"
              }
            ],
            "internalType": "struct IFillerMarket.SettlementParamsItem[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IFillerMarket.SettlementParams",
        "name": "settlementParams",
        "type": "tuple"
      }
    ],
    "name": "executeOrder",
    "outputs": [
      {
        "internalType": "int256",
        "name": "quoteTokenAmount",
        "type": "int256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "trader",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "quoteToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "baseToken",
            "type": "address"
          },
          {
            "internalType": "int256",
            "name": "baseTokenAmount",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "quoteTokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "params1",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "params2",
            "type": "uint256"
          }
        ],
        "internalType": "struct SpotOrderV2",
        "name": "orderV2",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "sig",
        "type": "bytes"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "fee",
            "type": "int256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "encodedData",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "maxQuoteAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "partialBaseAmount",
                "type": "uint256"
              }
            ],
            "internalType": "struct IFillerMarket.SettlementParamsItem[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IFillerMarket.SettlementParams",
        "name": "settlementParams",
        "type": "tuple"
      }
    ],
    "name": "executeOrderV2",
    "outputs": [
      {
        "internalType": "int256",
        "name": "quoteTokenAmount",
        "type": "int256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "fee",
            "type": "int256"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "encodedData",
                "type": "bytes"
              },
              {
                "internalType": "uint256",
                "name": "maxQuoteAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "partialBaseAmount",
                "type": "uint256"
              }
            ],
            "internalType": "struct IFillerMarket.SettlementParamsItem[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct IFillerMarket.SettlementParams",
        "name": "settlementParams",
        "type": "tuple"
      },
      {
        "internalType": "int256",
        "name": "baseAmountDelta",
        "type": "int256"
      }
    ],
    "name": "quoteSettlement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "settlementContractAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isEnabled",
        "type": "bool"
      }
    ],
    "name": "updateWhitelistSettlement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const 
