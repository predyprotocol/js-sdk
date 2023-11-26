import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { ethers } from 'ethers'

import { BaseValidationData, PerpOrderParams } from './types'

const PERP_ORDER_TYPES = {
  GeneralOrderParams: [
    { name: 'info', type: 'OrderInfo' },
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

const PERP_ORDER_ABI = [
  'tuple(' +
    [
      'tuple(address,address,uint256,uint256)',
      'uint256',
      'address',
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

export class PerpOrder {
  public permit2Address: string

  constructor(
    public readonly perpOrder: PerpOrderParams,
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

    return abiCoder.encode(PERP_ORDER_ABI, [
      [
        [
          this.perpOrder.orderInfo.market,
          this.perpOrder.orderInfo.trader,
          this.perpOrder.orderInfo.nonce,
          this.perpOrder.orderInfo.deadline,
        ],
        this.perpOrder.pairId,
        this.perpOrder.entryTokenAddress,
        this.perpOrder.tradeAmount,
        this.perpOrder.tradeAmountSqrt,
        this.perpOrder.marginAmount,
        this.perpOrder.canceler,
        this.perpOrder.takeProfitPrice,
        this.perpOrder.stopLossPrice,
        this.perpOrder.slippageTolerance,
        this.perpOrder.validatorAddress,
        this.perpOrder.validationData,
      ],
    ])
  }

  static parse(encoded: string, chainId: number, permit2?: string): PerpOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(PERP_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        pairId,
        entryTokenAddress,
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

    return new PerpOrder(
      {
        orderInfo: {
          market,
          trader,
          nonce,
          deadline: deadline.toNumber(),
        },
        pairId: pairId.toNumber(),
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
        market: this.perpOrder.orderInfo.market,
        trader: this.perpOrder.orderInfo.trader,
        nonce: this.perpOrder.orderInfo.nonce,
        deadline: this.perpOrder.orderInfo.deadline,
      },
      pairId: this.perpOrder.pairId,
      entryTokenAddress: this.perpOrder.entryTokenAddress,
      tradeAmount: this.perpOrder.tradeAmount,
      tradeAmountSqrt: this.perpOrder.tradeAmountSqrt,
      marginAmount: this.perpOrder.marginAmount,
      canceler: this.perpOrder.canceler,
      takeProfitPrice: this.perpOrder.takeProfitPrice,
      stopLossPrice: this.perpOrder.stopLossPrice,
      slippageTolerance: this.perpOrder.slippageTolerance,
      validatorAddress: this.perpOrder.validatorAddress,
      validationData: this.perpOrder.validationData,
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
        token: this.perpOrder.entryTokenAddress,
        amount: this.perpOrder.marginAmount,
      },
      spender: this.perpOrder.orderInfo.market,
      nonce: this.perpOrder.orderInfo.nonce,
      deadline: this.perpOrder.orderInfo.deadline,
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'PerpOrder',
      witnessType: PERP_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(PERP_ORDER_TYPES)
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
  'tuple(' + ['uint256', 'uint256'].join(',') + ')',
]

export class LimitOrderValidationData extends BaseValidationData {
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
