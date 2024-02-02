export const SupplyLogicABI = [
  {
    inputs: [],
    name: 'InvalidAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPairId',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isStable',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'suppliedAmount',
        type: 'uint256',
      },
    ],
    name: 'TokenSupplied',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isStable',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'finalWithdrawnAmount',
        type: 'uint256',
      },
    ],
    name: 'TokenWithdrawn',
    type: 'event',
  },
] as const
