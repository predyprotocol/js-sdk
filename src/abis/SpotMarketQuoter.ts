export const SpotMarketQuoterABI = [
  {
    inputs: [
      {
        internalType: 'contract ISpotMarket',
        name: '_spotMarket',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
            internalType: 'address',
            name: 'quoteToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'baseToken',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'baseTokenAmount',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'quoteTokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitQuoteTokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'auctionData',
            type: 'bytes',
          },
        ],
        internalType: 'struct SpotOrder',
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
    ],
    name: 'quoteExecuteOrder',
    outputs: [
      {
        internalType: 'int256',
        name: 'quoteTokenAmount',
        type: 'int256',
      },
    ],
    stateMutability: 'nonpayable',
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
            internalType: 'address',
            name: 'quoteToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'baseToken',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'baseTokenAmount',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'quoteTokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitQuoteTokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'auctionData',
            type: 'bytes',
          },
        ],
        internalType: 'struct SpotOrder',
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
    ],
    name: 'quoteExecuteOrderWithTs',
    outputs: [
      {
        internalType: 'int256',
        name: 'quoteTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
