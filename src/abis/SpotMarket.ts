export const SpotMarketABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'permit2Address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'BaseCurrencyNotSettled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerIsNotFiller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DeadlinePassed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMarket',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'LockedBy',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RequiredQuoteAmountExceedsMax',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SignerIsNotVaultOwner',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'trader',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'baseToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'quoteToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'baseAmount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'quoteAmount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'validatorAddress',
        type: 'address',
      },
    ],
    name: 'SpotTraded',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes',
            name: 'order',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'sig',
            type: 'bytes',
          },
        ],
        internalType: 'struct IFillerMarket.SignedOrder',
        name: 'order',
        type: 'tuple',
      },
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
        name: 'settlementData',
        type: 'tuple',
      },
    ],
    name: 'executeOrder',
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
        internalType: 'bool',
        name: 'isQuoteAsset',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'take',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const