export const PriceFeedFactoryABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pyth',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
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
        internalType: 'bytes32',
        name: 'priceId',
        type: 'bytes32',
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
        internalType: 'bytes32',
        name: 'priceId',
        type: 'bytes32',
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
