export const PerpMarketABI = [
  {
    type: 'function',
    name: 'execLiquidationCall',
    inputs: [
      {
        name: 'vaultId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'closeRatio',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'executeOrder',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SignedOrder',
        components: [
          {
            name: 'order',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'sig',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'executeOrderV2',
    inputs: [
      {
        name: 'orderV2',
        type: 'tuple',
        internalType: 'struct PerpOrderV2',
        components: [
          {
            name: 'trader',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'nonce',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadlinePairIdLev',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'tradeAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'marginAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'validatorAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'validationData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'sig',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'executeOrderV3',
    inputs: [
      {
        name: 'order',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SignedOrder',
        components: [
          {
            name: 'order',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'sig',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '',
        type: 'tuple',
        internalType: 'struct DataType.Vault',
        components: [
          {
            name: 'id',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'marginId',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'margin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'openPosition',
            type: 'tuple',
            internalType: 'struct Perp.UserStatus',
            components: [
              {
                name: 'pairId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'rebalanceLastTickLower',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'rebalanceLastTickUpper',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'lastNumRebalance',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'perp',
                type: 'tuple',
                internalType: 'struct Perp.PositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                ],
              },
              {
                name: 'sqrtPerp',
                type: 'tuple',
                internalType: 'struct Perp.SqrtPositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'quoteRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'baseRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryTradeFee0',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'entryTradeFee1',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'basePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'stablePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'executeOrderV3L2',
    inputs: [
      {
        name: 'compressedOrder',
        type: 'tuple',
        internalType: 'struct PerpOrderV3L2',
        components: [
          {
            name: 'trader',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'nonce',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'tradeAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'marginAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'limitPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'stopPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'data1',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'auctionData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'sig',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '',
        type: 'tuple',
        internalType: 'struct DataType.Vault',
        components: [
          {
            name: 'id',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'marginId',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'margin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'openPosition',
            type: 'tuple',
            internalType: 'struct Perp.UserStatus',
            components: [
              {
                name: 'pairId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'rebalanceLastTickLower',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'rebalanceLastTickUpper',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'lastNumRebalance',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'perp',
                type: 'tuple',
                internalType: 'struct Perp.PositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                ],
              },
              {
                name: 'sqrtPerp',
                type: 'tuple',
                internalType: 'struct Perp.SqrtPositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'quoteRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'baseRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryTradeFee0',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'entryTradeFee1',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'basePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'stablePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getUserPosition',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'pairId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'userPosition',
        type: 'tuple',
        internalType: 'struct PerpMarketV1.UserPosition',
        components: [
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'takeProfitPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'stopLossPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'slippageTolerance',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'lastLeverage',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
      },
      {
        name: 'vaultStatus',
        type: 'tuple',
        internalType: 'struct IPredyPool.VaultStatus',
        components: [
          {
            name: 'id',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'vaultValue',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'oraclePrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'feeAmount',
            type: 'tuple',
            internalType: 'struct DataType.FeeAmount',
            components: [
              {
                name: 'feeAmountBase',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'feeAmountQuote',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'position',
            type: 'tuple',
            internalType: 'struct IPredyPool.Position',
            components: [
              {
                name: 'margin',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'amountQuote',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'amountSqrt',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'amountBase',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
        ],
      },
      {
        name: 'vault',
        type: 'tuple',
        internalType: 'struct DataType.Vault',
        components: [
          {
            name: 'id',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'marginId',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'margin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'openPosition',
            type: 'tuple',
            internalType: 'struct Perp.UserStatus',
            components: [
              {
                name: 'pairId',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'rebalanceLastTickLower',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'rebalanceLastTickUpper',
                type: 'int24',
                internalType: 'int24',
              },
              {
                name: 'lastNumRebalance',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'perp',
                type: 'tuple',
                internalType: 'struct Perp.PositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                ],
              },
              {
                name: 'sqrtPerp',
                type: 'tuple',
                internalType: 'struct Perp.SqrtPositionStatus',
                components: [
                  {
                    name: 'amount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'quoteRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'baseRebalanceEntryValue',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'entryTradeFee0',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                  {
                    name: 'entryTradeFee1',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'basePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
              {
                name: 'stablePosition',
                type: 'tuple',
                internalType: 'struct ScaledAsset.UserStatus',
                components: [
                  {
                    name: 'positionAmount',
                    type: 'int256',
                    internalType: 'int256',
                  },
                  {
                    name: 'lastFeeGrowth',
                    type: 'uint256',
                    internalType: 'uint256',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: 'predyPool',
        type: 'address',
        internalType: 'contract IPredyPool',
      },
      {
        name: 'permit2Address',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'whitelistFiller',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'quoterAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'predySettlementCallback',
    inputs: [
      {
        name: 'quoteToken',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'baseToken',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'settlementData',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'baseAmountDelta',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'predyTradeAfterCallback',
    inputs: [
      {
        name: 'tradeParams',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeParams',
        components: [
          {
            name: 'pairId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'tradeAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'tradeAmountSqrt',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'extraData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'tradeResult',
        type: 'tuple',
        internalType: 'struct IPredyPool.TradeResult',
        components: [
          {
            name: 'payoff',
            type: 'tuple',
            internalType: 'struct IPredyPool.Payoff',
            components: [
              {
                name: 'perpEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtEntryUpdate',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateUnderlying',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtRebalanceEntryUpdateStable',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'perpPayoff',
                type: 'int256',
                internalType: 'int256',
              },
              {
                name: 'sqrtPayoff',
                type: 'int256',
                internalType: 'int256',
              },
            ],
          },
          {
            name: 'vaultId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'minMargin',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'averagePrice',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtTwap',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'sqrtPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'quoteExecuteOrder',
    inputs: [
      {
        name: 'perpOrder',
        type: 'tuple',
        internalType: 'struct PerpOrder',
        components: [
          {
            name: 'info',
            type: 'tuple',
            internalType: 'struct OrderInfo',
            components: [
              {
                name: 'market',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'trader',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'nonce',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'deadline',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'pairId',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'entryTokenAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tradeAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'marginAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'takeProfitPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'stopLossPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'slippageTolerance',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'leverage',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'validatorAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'validationData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
      {
        name: 'filler',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'quoteExecuteOrderV3',
    inputs: [
      {
        name: 'perpOrder',
        type: 'tuple',
        internalType: 'struct PerpOrderV3',
        components: [
          {
            name: 'info',
            type: 'tuple',
            internalType: 'struct OrderInfo',
            components: [
              {
                name: 'market',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'trader',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'nonce',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'deadline',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'pairId',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'entryTokenAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tradeAmount',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'marginAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'limitPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'stopPrice',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'leverage',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'reduceOnly',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'closePosition',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'auctionData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
      {
        name: 'filler',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'reallocate',
    inputs: [
      {
        name: 'pairId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'settlementParams',
        type: 'tuple',
        internalType: 'struct IFillerMarket.SettlementParams',
        components: [
          {
            name: 'contractAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'encodedData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'maxQuoteAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'fee',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
    ],
    outputs: [
      {
        name: 'relocationOccurred',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateQuoteTokenMap',
    inputs: [
      {
        name: 'pairId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateWhitelistFiller',
    inputs: [
      {
        name: 'newWhitelistFiller',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateWhitelistSettlement',
    inputs: [
      {
        name: 'settlementContractAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'isEnabled',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'userPositions',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'pairId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'vaultId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'takeProfitPrice',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'stopLossPrice',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'slippageTolerance',
        type: 'uint64',
        internalType: 'uint64',
      },
      {
        name: 'lastLeverage',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'whitelistFiller',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        name: 'version',
        type: 'uint8',
        indexed: false,
        internalType: 'uint8',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PerpClosedByTPSLOrder',
    inputs: [
      {
        name: 'trader',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'pairId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'tradeAmount',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'payoff',
        type: 'tuple',
        indexed: false,
        internalType: 'struct IPredyPool.Payoff',
        components: [
          {
            name: 'perpEntryUpdate',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtEntryUpdate',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtRebalanceEntryUpdateUnderlying',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtRebalanceEntryUpdateStable',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'perpPayoff',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtPayoff',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
      {
        name: 'fee',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'closeValue',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PerpTPSLOrderUpdated',
    inputs: [
      {
        name: 'trader',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'pairId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'takeProfitPrice',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'stopLossPrice',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PerpTraded',
    inputs: [
      {
        name: 'trader',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'pairId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'vaultId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'tradeAmount',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'payoff',
        type: 'tuple',
        indexed: false,
        internalType: 'struct IPredyPool.Payoff',
        components: [
          {
            name: 'perpEntryUpdate',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtEntryUpdate',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtRebalanceEntryUpdateUnderlying',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtRebalanceEntryUpdateStable',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'perpPayoff',
            type: 'int256',
            internalType: 'int256',
          },
          {
            name: 'sqrtPayoff',
            type: 'int256',
            internalType: 'int256',
          },
        ],
      },
      {
        name: 'fee',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'marginAmount',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AmountIsZero',
    inputs: [],
  },
  {
    type: 'error',
    name: 'CallerIsNotFiller',
    inputs: [],
  },
  {
    type: 'error',
    name: 'CallerIsNotPredyPool',
    inputs: [],
  },
  {
    type: 'error',
    name: 'DeadlinePassed',
    inputs: [],
  },
  {
    type: 'error',
    name: 'EndTimeBeforeStartTime',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidMarket',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LimitPriceDoesNotMatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LimitStopOrderDoesNotMatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MarketOrderDoesNotMatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SettlementContractIsNotWhitelisted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SignerIsNotVaultOwner',
    inputs: [],
  },
  {
    type: 'error',
    name: 'StopPriceDoesNotMatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TPSLConditionDoesNotMatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'UpdateMarginMustNotBePositive',
    inputs: [],
  },
] as const
