export const GammaTradeMarket_ImplementationABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CallerIsNotFiller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerIsNotPredyPool',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DeadlinePassed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HedgeTriggerNotMatched',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAveragePrice',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMarket',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OutOfAcceptablePriceRange',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SettlementContractIsNotWhitelisted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SignerIsNotVaultOwner',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SlippageTooLarge',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TooShortHedgeInterval',
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
        internalType: 'uint256',
        name: 'sqrtPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'delta',
        type: 'int256',
      },
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
        indexed: false,
        internalType: 'struct IPredyPool.Payoff',
        name: 'payoff',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'fee',
        type: 'int256',
      },
    ],
    name: 'GammaPositionHedged',
    type: 'event',
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
        internalType: 'uint256',
        name: 'hedgeInterval',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sqrtPriceTrigger',
        type: 'uint256',
      },
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
        indexed: false,
        internalType: 'struct IPredyPool.Payoff',
        name: 'payoff',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'fee',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'int256',
        name: 'marginAmount',
        type: 'int256',
      },
    ],
    name: 'GammaPositionTraded',
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
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
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
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
        type: 'tuple',
      },
    ],
    name: 'execDeltaHedge',
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
      {
        internalType: 'uint256',
        name: 'closeRatio',
        type: 'uint256',
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
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
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
        name: '',
        type: 'tuple',
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
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
        type: 'tuple',
      },
    ],
    name: 'executeOrder',
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
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'getUserPosition',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'vaultId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastHedgedTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'hedgeInterval',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastHedgedSqrtPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtPriceTrigger',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'minSlippageTolerance',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'maxSlippageTolerance',
            type: 'uint64',
          },
        ],
        internalType: 'struct GammaTradeMarket.UserPosition',
        name: 'userPosition',
        type: 'tuple',
      },
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
        name: '',
        type: 'tuple',
      },
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
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IPredyPool',
        name: 'predyPool',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'permit2Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'whitelistFiller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'quoterAddress',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
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
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'market',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'trader',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'nonce',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'deadline',
                type: 'uint256',
              },
            ],
            internalType: 'struct OrderInfo',
            name: 'info',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'pairId',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'entryTokenAddress',
            type: 'address',
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
            internalType: 'int256',
            name: 'marginAmount',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'hedgeInterval',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'sqrtPriceTrigger',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'minSlippageTolerance',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'maxSlippageTolerance',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'validatorAddress',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'validationData',
            type: 'bytes',
          },
        ],
        internalType: 'struct GammaOrder',
        name: 'gammaOrder',
        type: 'tuple',
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
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
        type: 'tuple',
      },
    ],
    name: 'quoteExecuteOrder',
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
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'fee',
            type: 'int256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParams',
        name: 'settlementParams',
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
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'updateQuoteTokenMap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newWhitelistFiller',
        type: 'address',
      },
    ],
    name: 'updateWhitelistFiller',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'settlementContractAddress',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isEnabled',
        type: 'bool',
      },
    ],
    name: 'updateWhitelistSettlement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pairId',
        type: 'uint256',
      },
    ],
    name: 'userPositions',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vaultId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastHedgedTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'hedgeInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastHedgedSqrtPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'sqrtPriceTrigger',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'minSlippageTolerance',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'maxSlippageTolerance',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelistFiller',
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
] as const
