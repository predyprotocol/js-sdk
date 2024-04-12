export const GammaTradeMarketQuoterABI = [
  {
    inputs: [
      {
        internalType: 'contract GammaTradeMarket',
        name: '_gammaTradeMarket',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'gammaTradeMarket',
    outputs: [
      {
        internalType: 'contract GammaTradeMarket',
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
            internalType: 'uint256',
            name: 'positionId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'entryTokenAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'quantity',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'quantitySqrt',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'marginAmount',
            type: 'int256',
          },
          {
            internalType: 'bool',
            name: 'closePosition',
            type: 'bool',
          },
          {
            internalType: 'int256',
            name: 'limitValue',
            type: 'int256',
          },
          {
            internalType: 'uint8',
            name: 'leverage',
            type: 'uint8',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'isEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint64',
                name: 'expiration',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'lowerLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'upperLimit',
                type: 'uint256',
              },
              {
                internalType: 'uint32',
                name: 'hedgeInterval',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'sqrtPriceTrigger',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'minSlippageTolerance',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'maxSlippageTolerance',
                type: 'uint32',
              },
              {
                internalType: 'uint16',
                name: 'auctionPeriod',
                type: 'uint16',
              },
              {
                internalType: 'uint32',
                name: 'auctionRange',
                type: 'uint32',
              },
            ],
            internalType: 'struct GammaModifyInfo',
            name: 'modifyInfo',
            type: 'tuple',
          },
        ],
        internalType: 'struct GammaOrder',
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
        name: 'settlementData',
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
] as const
