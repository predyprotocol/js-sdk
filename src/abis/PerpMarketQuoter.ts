export const PerpMarketQuoterABI = [
  {
    inputs: [
      {
        internalType: 'contract PerpMarket',
        name: '_perpMarket',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'perpMarket',
    outputs: [
      {
        internalType: 'contract PerpMarket',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'market',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'trader',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
            ],
            internalType: 'struct OrderInfo',
            name: 'info',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'pairId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'entryTokenAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'tradeAmount',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'marginAmount',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'takeProfitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'stopLossPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'slippageTolerance',
            type: 'uint64',
          },
          {
            internalType: 'uint8',
            name: 'leverage',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'validationData',
            type: 'bytes',
          },
        ],
        internalType: 'struct PerpOrder',
        name: 'order',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'contractAddress',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'encodedData',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'maxQuoteAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
    ],
    name: 'quoteExecuteOrder',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256',
              },
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
