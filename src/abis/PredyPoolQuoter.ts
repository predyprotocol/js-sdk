export const PredyPoolQuoterABI = [
  {
    inputs: [
      {
        internalType: 'contract IPredyPool',
        name: '_predyPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CallerIsNotPredyPool',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'quoteToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'baseToken',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
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
        name: '',
        type: 'tuple',
      },
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
    name: 'predyTradeAfterCallback',
    outputs: [],
    stateMutability: 'view',
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
    ],
    name: 'quoteBaseAmountDelta',
    outputs: [
      {
        internalType: 'int256',
        name: 'baseAmountDelta',
        type: 'int256',
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
    ],
    name: 'quoteLiquidation',
    outputs: [
      {
        internalType: 'int256',
        name: 'baseAmountDelta',
        type: 'int256',
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
    name: 'quotePairStatus',
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
        name: 'pairStatus',
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
    name: 'quoteReallocation',
    outputs: [
      {
        internalType: 'int256',
        name: 'baseAmountDelta',
        type: 'int256',
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
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'contractAddress',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'encodedData',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'maxQuoteAmount',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'partialBaseAmount',
                type: 'uint256',
              },
            ],
            internalType: 'struct IFillerMarket.SettlementParamsItem[]',
            name: 'items',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
        type: 'tuple',
      },
    ],
    name: 'quoteTrade',
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
        name: 'vaultId',
        type: 'uint256',
      },
    ],
    name: 'quoteVaultStatus',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
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
          {
            internalType: 'uint256',
            name: 'oraclePrice',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'int256',
                name: 'feeAmountBase',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'feeAmountQuote',
                type: 'int256',
              },
            ],
            internalType: 'struct DataType.FeeAmount',
            name: 'feeAmount',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'amountQuote',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'amountSqrt',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'amountBase',
                type: 'int256',
              },
            ],
            internalType: 'struct IPredyPool.Position',
            name: 'position',
            type: 'tuple',
          },
        ],
        internalType: 'struct IPredyPool.VaultStatus',
        name: 'vaultStatus',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
