export const LiquidationLogicABI = [
  {
    "inputs": [],
    "name": "InvalidAveragePrice",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OutOfAcceptablePriceRange",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SlippageTooLarge",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "T",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "vaultValue",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "minMargin",
        "type": "int256"
      }
    ],
    "name": "VaultIsNotDanger",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "vaultId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "pairId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "tradeAmount",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "tradeSqrtAmount",
        "type": "int256"
      },
      {
        "components": [
          {
            "internalType": "int256",
            "name": "perpEntryUpdate",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "sqrtEntryUpdate",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "sqrtRebalanceEntryUpdateUnderlying",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "sqrtRebalanceEntryUpdateStable",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "perpPayoff",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "sqrtPayoff",
            "type": "int256"
          }
        ],
        "indexed": false,
        "internalType": "struct IPredyPool.Payoff",
        "name": "payoff",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "fee",
        "type": "int256"
      }
    ],
    "name": "PositionLiquidated",
    "type": "event"
  }
] as const 
