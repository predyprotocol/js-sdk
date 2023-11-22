import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { ethers } from 'ethers'

import { BaseValidationData, GammaOrderParams } from './types'

const GAMMA_ORDER_TYPES = {
  GeneralOrderParams: [
    { name: 'info', type: 'OrderInfo' },
    { name: 'positionId', type: 'uint256' },
    { name: 'pairId', type: 'uint256' },
    { name: 'entryTokenAddress', type: 'address' },
    { name: 'tradeAmount', type: 'int256' },
    { name: 'tradeAmountSqrt', type: 'int256' },
    { name: 'marginAmount', type: 'int256' },
    { name: 'canceler', type: 'address' },
    { name: 'takeProfitPrice', type: 'uint256' },
    { name: 'stopLossPrice', type: 'uint256' },
    { name: 'slippageTolerance', type: 'uint64' },
    { name: 'validatorAddress', type: 'address' },
    { name: 'validationData', type: 'bytes' },
  ],
  OrderInfo: [
    { name: 'market', type: 'address' },
    { name: 'trader', type: 'address' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
}

const GAMMA_ORDER_ABI = [
  'tuple(' +
    [
      'tuple(address,address,uint256,uint256)',
      'uint256',
      'address',
      'uint256',
      'int256',
      'int256',
      'int256',
      'address',
      'uint256',
      'uint256',
      'uint64',
      'address',
      'bytes',
    ].join(',') +
    ')',
]

export class GammaOrder {
  public permit2Address: string

  constructor(
    public readonly gammaOrder: GammaOrderParams,
    readonly chainId: number,
    readonly _permit2Address?: string
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId]
    }
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(GAMMA_ORDER_ABI, [
      [
        [
          this.gammaOrder.orderInfo.market,
          this.gammaOrder.orderInfo.trader,
          this.gammaOrder.orderInfo.nonce,
          this.gammaOrder.orderInfo.deadline,
        ],
        this.gammaOrder.pairId,
        this.gammaOrder.entryTokenAddress,
        this.gammaOrder.positionId,
        this.gammaOrder.tradeAmount,
        this.gammaOrder.tradeAmountSqrt,
        this.gammaOrder.marginAmount,
        this.gammaOrder.canceler,
        this.gammaOrder.takeProfitPrice,
        this.gammaOrder.stopLossPrice,
        this.gammaOrder.slippageTolerance,
        this.gammaOrder.validatorAddress,
        this.gammaOrder.validationData,
      ],
    ])
  }

  static parse(encoded: string, chainId: number, permit2?: string): GammaOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(GAMMA_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        entryTokenAddress,
        positionId,
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        canceler,
        takeProfitPrice,
        stopLossPrice,
        slippageTolerance,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new GammaOrder(
      {
        orderInfo: {
          market,
          trader,
          nonce,
          deadline: deadline.toNumber(),
        },
        pairId: pairId.toNumber(),
        positionId: positionId.toNumber(),
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        entryTokenAddress,
        canceler,
        takeProfitPrice,
        stopLossPrice,
        slippageTolerance: slippageTolerance.toNumber(),
        validatorAddress,
        validationData,
        chainId,
      },
      chainId,
      permit2
    )
  }

  private witnessInfo() {
    return {
      info: {
        market: this.gammaOrder.orderInfo.market,
        trader: this.gammaOrder.orderInfo.trader,
        nonce: this.gammaOrder.orderInfo.nonce,
        deadline: this.gammaOrder.orderInfo.deadline,
      },
      positionId: this.gammaOrder.positionId,
      pairId: this.gammaOrder.pairId,
      entryTokenAddress: this.gammaOrder.entryTokenAddress,
      tradeAmount: this.gammaOrder.tradeAmount,
      tradeAmountSqrt: this.gammaOrder.tradeAmountSqrt,
      marginAmount: this.gammaOrder.marginAmount,
      canceler: this.gammaOrder.canceler,
      takeProfitPrice: this.gammaOrder.takeProfitPrice,
      stopLossPrice: this.gammaOrder.stopLossPrice,
      slippageTolerance: this.gammaOrder.slippageTolerance,
      validatorAddress: this.gammaOrder.validatorAddress,
      validationData: this.gammaOrder.validationData,
    }
  }

  permitData(): PermitTransferFromData {
    return SignatureTransfer.getPermitData(
      this.toPermit(),
      this.permit2Address,
      this.chainId,
      this.witness()
    ) as PermitTransferFromData
  }

  toPermit(): PermitTransferFrom {
    return {
      permitted: {
        token: this.gammaOrder.entryTokenAddress,
        amount: this.gammaOrder.marginAmount,
      },
      spender: this.gammaOrder.orderInfo.market,
      nonce: this.gammaOrder.orderInfo.nonce,
      deadline: this.gammaOrder.orderInfo.deadline,
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'GammaOrder',
      witnessType: GAMMA_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(GAMMA_ORDER_TYPES)
      .hash(this.witnessInfo())
  }
}

const DUTCH_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class DutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: number,
    public endPrice: number,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(DUTCH_ORDER_VALIDATION_ABI, [
      this.startPrice,
      this.endPrice,
      this.startTime,
      this.endTime,
    ])
  }
}

const LIMIT_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class LimitOrderValidationData extends BaseValidationData {
  constructor(
    public triggerPrice: number,
    public triggerPriceSqrt: number,
    public limitPrice: number,
    public limitPriceSqrt: number
  ) {
    super()
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.triggerPrice,
      this.triggerPriceSqrt,
      this.limitPrice,
      this.limitPriceSqrt,
    ])
  }
}
