export const UniswapSettlementABI = [
  {
    inputs: [
      {
        internalType: 'contract ILendingPool',
        name: 'predyPool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'swapRouterAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'quoterAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_filler',
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
    inputs: [],
    name: 'filler',
    outputs: [
      {
        internalType: 'address',
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
        internalType: 'bytes',
        name: 'path',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMinimumOrInMaximum',
        type: 'uint256',
      },
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
        internalType: 'int256',
        name: 'fee',
        type: 'int256',
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
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
