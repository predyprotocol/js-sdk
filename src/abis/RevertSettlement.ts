export const RevertSettlementABI = [
  {
    inputs: [
      {
        internalType: 'contract ILendingPool',
        name: 'predyPool',
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
        internalType: 'bytes',
        name: '',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    name: 'quoteSettlement',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
] as const
