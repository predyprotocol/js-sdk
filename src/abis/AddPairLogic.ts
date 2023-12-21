export const AddPairLogicABI = [
  {
    inputs: [],
    name: 'InvalidUniswapPool',
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
        components: [
          {
            internalType: 'uint256',
            name: 'riskRatio',
            type: 'uint256',
          },
          {
            internalType: 'int24',
            name: 'rangeSize',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'rebalanceThreshold',
            type: 'int24',
          },
          {
            internalType: 'uint64',
            name: 'minSlippage',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'maxSlippage',
            type: 'uint64',
          },
        ],
        indexed: false,
        internalType: 'struct Perp.AssetRiskParams',
        name: 'riskParams',
        type: 'tuple',
      },
    ],
    name: 'AssetRiskParamsUpdated',
    type: 'event',
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
        internalType: 'uint8',
        name: 'feeRatio',
        type: 'uint8',
      },
    ],
    name: 'FeeRatioUpdated',
    type: 'event',
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
        components: [
          {
            internalType: 'uint256',
            name: 'baseRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'kinkRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slope1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slope2',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct InterestRateModel.IRMParams',
        name: 'quoteIrmParams',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'baseRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'kinkRate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slope1',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'slope2',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct InterestRateModel.IRMParams',
        name: 'baseIrmParams',
        type: 'tuple',
      },
    ],
    name: 'IRMParamsUpdated',
    type: 'event',
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
        internalType: 'address',
        name: 'marginId',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'uniswapPool',
        type: 'address',
      },
    ],
    name: 'PairAdded',
    type: 'event',
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
        internalType: 'address',
        name: 'poolOwner',
        type: 'address',
      },
    ],
    name: 'PoolOwnerUpdated',
    type: 'event',
  },
] as const
