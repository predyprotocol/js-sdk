export const TradeABI = [
  {
    inputs: [],
    name: 'BaseTokenNotSettled',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'locker',
        type: 'address',
      },
    ],
    name: 'LockedBy',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoCFMMLiquidityError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OutOfRangeError',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuoteTokenNotSettled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SqrtAssetCanNotCoverBorrow',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'settledQuoteAmount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'settledBaseAmount',
        type: 'int256',
      },
    ],
    name: 'Swapped',
    type: 'event',
  },
] as const
