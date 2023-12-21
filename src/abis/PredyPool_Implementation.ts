export const PredyPool_ImplementationABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'BaseTokenNotSettled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerIsNotOperator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerIsNotPoolCreator',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerIsNotVaultOwner',
    type: 'error',
  },
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
    name: 'QuoteTokenNotSettled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'T',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TraderNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultAlreadyHasAnotherMarginId',
    type: 'error',
  },
  {
    inputs: [],
    name: 'VaultAlreadyHasAnotherPair',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'vaultValue',
        type: 'int256',
      },
      {
        internalType: 'int256',
        name: 'minMargin',
        type: 'int256',
      },
    ],
    name: 'VaultIsNotDanger',
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
        internalType: 'bool',
        name: 'isStable',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'CreatorRevenueWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'OperatorUpdated',
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
        internalType: 'bool',
        name: 'isStable',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ProtocolRevenueWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'RecepientUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'trader',
        type: 'address',
      },
    ],
    name: 'addWhitelistAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'trader',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'allowedTraders',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowedUniswapPools',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'createVault',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'closeRatio',
        type: 'uint256',
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
    name: 'execLiquidationCall',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256',
              },
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'getPairStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'marginId',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'poolOwner',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'supplyTokenAddress',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'totalCompoundDeposited',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'totalNormalDeposited',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'totalNormalBorrowed',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'assetScaler',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'assetGrowth',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'debtGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.AssetStatus',
                name: 'tokenStatus',
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
                internalType: 'struct InterestRateModel.IRMParams',
                name: 'irmParams',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'accumulatedProtocolRevenue',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accumulatedCreatorRevenue',
                type: 'uint256',
              },
            ],
            internalType: 'struct Perp.AssetPoolStatus',
            name: 'quotePool',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'supplyTokenAddress',
                type: 'address',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'totalCompoundDeposited',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'totalNormalDeposited',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'totalNormalBorrowed',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'assetScaler',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'assetGrowth',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'debtGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.AssetStatus',
                name: 'tokenStatus',
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
                internalType: 'struct InterestRateModel.IRMParams',
                name: 'irmParams',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'accumulatedProtocolRevenue',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'accumulatedCreatorRevenue',
                type: 'uint256',
              },
            ],
            internalType: 'struct Perp.AssetPoolStatus',
            name: 'basePool',
            type: 'tuple',
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
            internalType: 'struct Perp.AssetRiskParams',
            name: 'riskParams',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'uniswapPool',
                type: 'address',
              },
              {
                internalType: 'int24',
                name: 'tickLower',
                type: 'int24',
              },
              {
                internalType: 'int24',
                name: 'tickUpper',
                type: 'int24',
              },
              {
                internalType: 'uint64',
                name: 'numRebalance',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'totalAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'borrowedAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lastRebalanceTotalSquartAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lastFee0Growth',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'lastFee1Growth',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'borrowPremium0Growth',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'borrowPremium1Growth',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'fee0Growth',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'fee1Growth',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'positionAmount',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.UserStatus',
                name: 'rebalancePositionBase',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'positionAmount',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.UserStatus',
                name: 'rebalancePositionQuote',
                type: 'tuple',
              },
              {
                internalType: 'int256',
                name: 'rebalanceInterestGrowthBase',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'rebalanceInterestGrowthQuote',
                type: 'int256',
              },
            ],
            internalType: 'struct Perp.SqrtPerpAssetStatus',
            name: 'sqrtAssetStatus',
            type: 'tuple',
          },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isQuoteZero',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'whitelistEnabled',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: 'feeRatio',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'lastUpdateTimestamp',
            type: 'uint256',
          },
        ],
        internalType: 'struct DataType.PairStatus',
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
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'getSqrtIndexPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'getSqrtPrice',
    outputs: [
      {
        internalType: 'uint160',
        name: '',
        type: 'uint160',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
    ],
    name: 'getVault',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'marginId',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'margin',
            type: 'int256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'pairId',
                type: 'uint256',
              },
              {
                internalType: 'int24',
                name: 'rebalanceLastTickLower',
                type: 'int24',
              },
              {
                internalType: 'int24',
                name: 'rebalanceLastTickUpper',
                type: 'int24',
              },
              {
                internalType: 'uint64',
                name: 'lastNumRebalance',
                type: 'uint64',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'amount',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'entryValue',
                    type: 'int256',
                  },
                ],
                internalType: 'struct Perp.PositionStatus',
                name: 'perp',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'amount',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'entryValue',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'quoteRebalanceEntryValue',
                    type: 'int256',
                  },
                  {
                    internalType: 'int256',
                    name: 'baseRebalanceEntryValue',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryTradeFee0',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryTradeFee1',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct Perp.SqrtPositionStatus',
                name: 'sqrtPerp',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'positionAmount',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.UserStatus',
                name: 'basePosition',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'int256',
                    name: 'positionAmount',
                    type: 'int256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ScaledAsset.UserStatus',
                name: 'stablePosition',
                type: 'tuple',
              },
            ],
            internalType: 'struct Perp.UserStatus',
            name: 'openPosition',
            type: 'tuple',
          },
        ],
        internalType: 'struct DataType.Vault',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'globalData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pairsCount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'vaultCount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'uniswapFactory',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'locker',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'quoteReserve',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'baseReserve',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'pairId',
            type: 'uint256',
          },
        ],
        internalType: 'struct LockDataLibrary.LockData',
        name: 'lockData',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'uniswapFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'operator',
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
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
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
    name: 'reallocate',
    outputs: [
      {
        internalType: 'bool',
        name: 'relocationOccurred',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'marginId',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'poolOwner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'uniswapPool',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'priceFeed',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'whitelistEnabled',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: 'fee',
            type: 'uint8',
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
            internalType: 'struct Perp.AssetRiskParams',
            name: 'assetRiskParams',
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
            internalType: 'struct InterestRateModel.IRMParams',
            name: 'baseIrmParams',
            type: 'tuple',
          },
        ],
        internalType: 'struct AddPairLogic.AddPairParams',
        name: 'addPairParam',
        type: 'tuple',
      },
    ],
    name: 'registerPair',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'revertPairStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
    ],
    name: 'revertVaultStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOperator',
        type: 'address',
      },
    ],
    name: 'setOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isQuoteAsset',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'supplyAmount',
        type: 'uint256',
      },
    ],
    name: 'supply',
    outputs: [
      {
        internalType: 'uint256',
        name: 'finalSuppliedAmount',
        type: 'uint256',
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
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'pairId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'tradeAmount',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'tradeAmountSqrt',
            type: 'int256',
          },
          {
            internalType: 'bytes',
            name: 'extraData',
            type: 'bytes',
          },
        ],
        internalType: 'struct IPredyPool.TradeParams',
        name: 'tradeParams',
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
    name: 'trade',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'perpEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtEntryUpdate',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'perpPayoff',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'sqrtPayoff',
                type: 'int256',
              },
            ],
            internalType: 'struct IPredyPool.Payoff',
            name: 'payoff',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'minMargin',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'averagePrice',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtTwap',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct IPredyPool.TradeResult',
        name: 'tradeResult',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'uniswapV3MintCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
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
        internalType: 'struct Perp.AssetRiskParams',
        name: 'riskParams',
        type: 'tuple',
      },
    ],
    name: 'updateAssetRiskParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'feeRatio',
        type: 'uint8',
      },
    ],
    name: 'updateFeeRatio',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
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
        internalType: 'struct InterestRateModel.IRMParams',
        name: 'baseIrmParams',
        type: 'tuple',
      },
    ],
    name: 'updateIRMParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'poolOwner',
        type: 'address',
      },
    ],
    name: 'updatePoolOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'updateRecepient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isQuoteAsset',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'finalBurnAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finalWithdrawAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isQuoteToken',
        type: 'bool',
      },
    ],
    name: 'withdrawCreatorRevenue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isQuoteToken',
        type: 'bool',
      },
    ],
    name: 'withdrawProtocolRevenue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
