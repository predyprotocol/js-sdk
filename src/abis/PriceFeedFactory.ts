export const PriceFeedFactoryABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'quotePrice',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'basePrice',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'decimalsDiff',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'priceFeed',
        type: 'address',
      },
    ],
    name: 'PriceFeedCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'quotePrice',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'basePrice',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'decimalsDiff',
        type: 'uint256',
      },
    ],
    name: 'createPriceFeed',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
