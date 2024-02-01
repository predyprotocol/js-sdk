export const ReallocationLogicABI = [
  {
    "inputs": [],
    "name": "BaseTokenNotSettled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidPairId",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "locker",
        "type": "address"
      }
    ],
    "name": "LockedBy",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QuoteTokenNotSettled",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "R",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "T",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "pairId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "relocationOccurred",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "int24",
        "name": "tickLower",
        "type": "int24"
      },
      {
        "indexed": false,
        "internalType": "int24",
        "name": "tickUpper",
        "type": "int24"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "deltaPositionBase",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "deltaPositionQuote",
        "type": "int256"
      }
    ],
    "name": "Rebalanced",
    "type": "event"
  }
] as const 
