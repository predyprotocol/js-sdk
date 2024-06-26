export const PerpMarket_ImplementationABI = [
  {
    inputs: [],
    name: 'AmountIsZero',
    type: 'error',
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
    name: 'EndTimeBeforeStartTime',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMarket',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LimitPriceDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LimitStopOrderDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MarketOrderDoesNotMatch',
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
    name: 'StopPriceDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TPSLConditionDoesNotMatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UpdateMarginMustNotBePositive',
    type: 'error',
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
        internalType: 'int256',
        name: 'tradeAmount',
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
      {
        indexed: false,
        internalType: 'int256',
        name: 'marginAmount',
        type: 'int256',
      },
    ],
    name: 'PerpTraded',
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
        internalType: 'int256',
        name: 'tradeAmount',
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
      {
        indexed: false,
        internalType: 'int256',
        name: 'marginAmount',
        type: 'int256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'orderId',
        type: 'uint64',
      },
    ],
    name: 'PerpTraded2',
    type: 'event',
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
            name: 'maxQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParamsV3',
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
            name: 'maxQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParamsV3',
        name: 'settlementParams',
        type: 'tuple',
      },
    ],
    name: 'executeOrderV3',
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
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marginAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'stopPrice',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'data1',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'auctionData',
            type: 'bytes',
          },
        ],
        internalType: 'struct PerpOrderV3L2',
        name: 'compressedOrder',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
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
            name: 'maxQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParamsV3',
        name: 'settlementParams',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'orderId',
        type: 'uint64',
      },
    ],
    name: 'executeOrderV3L2',
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
            name: 'takeProfitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'stopLossPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'slippageTolerance',
            type: 'uint64',
          },
          {
            internalType: 'uint8',
            name: 'lastLeverage',
            type: 'uint8',
          },
        ],
        internalType: 'struct PerpMarketV1.UserPosition',
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
        name: 'vaultStatus',
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
        name: 'vault',
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
            internalType: 'string',
            name: 'side',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'quantity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'marginAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'stopPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'leverage',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'reduceOnly',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'closePosition',
            type: 'bool',
          },
          {
            internalType: 'bytes',
            name: 'auctionData',
            type: 'bytes',
          },
        ],
        internalType: 'struct PerpOrderV3',
        name: 'perpOrder',
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
            name: 'maxQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParamsV3',
        name: 'settlementParams',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'filler',
        type: 'address',
      },
    ],
    name: 'quoteExecuteOrderV3',
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
            name: 'maxQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minQuoteAmountPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feePrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct IFillerMarket.SettlementParamsV3',
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
        name: 'takeProfitPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'stopLossPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'slippageTolerance',
        type: 'uint64',
      },
      {
        internalType: 'uint8',
        name: 'lastLeverage',
        type: 'uint8',
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
