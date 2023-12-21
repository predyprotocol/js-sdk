export const DirectSettlementABI = [
  {
    inputs: [
      {
        internalType: 'contract ILendingPool',
        name: 'predyPool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CallerIsNotLendingPool',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'quoteTokenAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'baseTokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'getSettlementParams',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'settlementContractAddress',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'encodedData',
            type: 'bytes',
          },
        ],
        internalType: 'struct ISettlement.SettlementData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'settlementData',
        type: 'bytes',
      },
      {
        internalType: 'int256',
        name: 'baseAmountDelta',
        type: 'int256',
      },
    ],
    name: 'predySettlementCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'settlementData',
        type: 'bytes',
      },
      {
        internalType: 'int256',
        name: 'baseAmountDelta',
        type: 'int256',
      },
    ],
    name: 'quoteSettlement',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
] as const
