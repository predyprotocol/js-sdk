export const LimitOrderValidatorABI = [
  {
    "inputs": [],
    "name": "PriceGreaterThanLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PriceLessThanLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TriggerNotMatched",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "tradeAmount",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "tradeAmountSqrt",
        "type": "int256"
      },
      {
        "internalType": "bytes",
        "name": "validationData",
        "type": "bytes"
      },
      {
        "components": [
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
            "internalType": "struct IPredyPool.Payoff",
            "name": "payoff",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "vaultId",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "fee",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "minMargin",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "averagePrice",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "sqrtTwap",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sqrtPrice",
            "type": "uint256"
          }
        ],
        "internalType": "struct IPredyPool.TradeResult",
        "name": "tradeResult",
        "type": "tuple"
      }
    ],
    "name": "validate",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  }
] as const 
