export const SpotExclusiveLimitOrderValidatorABI = [
  {
    inputs: [],
    name: 'PriceGreaterThanLimit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PriceLessThanLimit',
    type: 'error',
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
        internalType: 'struct SpotOrder',
        name: 'spotOrder',
        type: 'tuple',
      },
      {
        internalType: 'int256',
        name: 'baseTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'quoteTokenAmount',
        type: 'int256',
      },
      {
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
    ],
    name: 'validate',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
] as const
