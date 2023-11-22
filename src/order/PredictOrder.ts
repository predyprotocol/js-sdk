import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { ethers } from 'ethers'

import { BaseValidationData, PredictOrderParams } from './types'

export const PREDICT_ORDER_TYPES = {
  PredictOrder: [
    { name: 'info', type: 'OrderInfo' },
    { name: 'pairId', type: 'uint64' },
    { name: 'duration', type: 'uint64' },
    { name: 'entryTokenAddress', type: 'address' },
    { name: 'tradeAmount', type: 'int256' },
    { name: 'tradeAmountSqrt', type: 'int256' },
    { name: 'marginAmount', type: 'uint256' },
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

const PREDICT_ORDER_ABI = [
  'tuple(' +
    [
      'tuple(address,address,uint256,uint256)',
      'uint64',
      'uint64',
      'address',
      'int256',
      'int256',
      'uint256',
      'address',
      'bytes',
    ].join(',') +
    ')',
]

export class PredictOrder {
  public permit2Address: string

  constructor(
    public readonly predictOrder: PredictOrderParams,
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

    return abiCoder.encode(PREDICT_ORDER_ABI, [
      [
        [
          this.predictOrder.orderInfo.market,
          this.predictOrder.orderInfo.trader,
          this.predictOrder.orderInfo.nonce,
          this.predictOrder.orderInfo.deadline,
        ],
        this.predictOrder.pairId,
        this.predictOrder.duration,
        this.predictOrder.entryTokenAddress,
        this.predictOrder.tradeAmount,
        this.predictOrder.tradeAmountSqrt,
        this.predictOrder.marginAmount,
        this.predictOrder.validatorAddress,
        this.predictOrder.validationData,
      ],
    ])
  }

  static parse(
    encoded: string,
    chainId: number,
    permit2?: string
  ): PredictOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(PREDICT_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        duration,
        entryTokenAddress,
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new PredictOrder(
      {
        orderInfo: {
          market,
          trader,
          nonce,
          deadline: deadline.toNumber(),
        },
        pairId: pairId.toNumber(),
        duration: duration.toNumber(),
        tradeAmount,
        tradeAmountSqrt,
        marginAmount,
        entryTokenAddress,
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
        market: this.predictOrder.orderInfo.market,
        trader: this.predictOrder.orderInfo.trader,
        nonce: this.predictOrder.orderInfo.nonce,
        deadline: this.predictOrder.orderInfo.deadline,
      },
      pairId: this.predictOrder.pairId,
      duration: this.predictOrder.duration,
      entryTokenAddress: this.predictOrder.entryTokenAddress,
      tradeAmount: this.predictOrder.tradeAmount,
      tradeAmountSqrt: this.predictOrder.tradeAmountSqrt,
      marginAmount: this.predictOrder.marginAmount,
      validatorAddress: this.predictOrder.validatorAddress,
      validationData: this.predictOrder.validationData,
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
        token: this.predictOrder.entryTokenAddress,
        amount: this.predictOrder.marginAmount,
      },
      spender: this.predictOrder.orderInfo.market,
      nonce: this.predictOrder.orderInfo.nonce,
      deadline: this.predictOrder.orderInfo.deadline,
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'PredictOrder',
      witnessType: PREDICT_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(PREDICT_ORDER_TYPES)
      .hash(this.witnessInfo())
  }
}

const DUTCH_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class PredictDutchOrderValidationData extends BaseValidationData {
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
  'tuple(' + ['uint256', 'uint256'].join(',') + ')',
]

export class PerpLimitOrderValidationData extends BaseValidationData {
  constructor(public triggerPrice: number, public limitPrice: number) {
    super()
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.triggerPrice,
      this.limitPrice,
    ])
  }
}
