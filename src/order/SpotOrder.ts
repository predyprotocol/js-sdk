import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { BigNumber, ethers } from 'ethers'

import { BaseValidationData, SpotOrderParams } from './types'

export const SPOT_ORDER_TYPES = {
  SpotOrder: [
    { name: 'info', type: 'OrderInfo' },
    { name: 'quoteToken', type: 'address' },
    { name: 'baseToken', type: 'address' },
    { name: 'baseTokenAmount', type: 'int256' },
    { name: 'quoteTokenAmount', type: 'uint256' },
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

const SPOT_ORDER_ABI = [
  'tuple(' +
    [
      'tuple(address,address,uint256,uint256)',
      'address',
      'address',
      'int256',
      'uint256',
      'address',
      'bytes',
    ].join(',') +
    ')',
]

export class SpotOrder {
  public permit2Address: string

  constructor(
    public readonly spotOrder: SpotOrderParams,
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

    return abiCoder.encode(SPOT_ORDER_ABI, [
      [
        [
          this.spotOrder.orderInfo.market,
          this.spotOrder.orderInfo.trader,
          this.spotOrder.orderInfo.nonce,
          this.spotOrder.orderInfo.deadline,
        ],
        this.spotOrder.quoteToken,
        this.spotOrder.baseToken,
        this.spotOrder.baseTokenAmount,
        this.spotOrder.quoteTokenAmount,
        this.spotOrder.validatorAddress,
        this.spotOrder.validationData,
      ],
    ])
  }

  static parse(encoded: string, chainId: number, permit2?: string): SpotOrder {
    const abiCoder = new ethers.utils.AbiCoder()
    const decoded = abiCoder.decode(SPOT_ORDER_ABI, encoded)

    const [
      [
        [market, trader, nonce, deadline],
        quoteToken,
        baseToken,
        baseTokenAmount,
        quoteTokenAmount,
        validatorAddress,
        validationData,
      ],
    ] = decoded

    return new SpotOrder(
      {
        orderInfo: {
          market,
          trader,
          nonce,
          deadline: deadline.toNumber(),
        },
        quoteToken,
        baseToken,
        baseTokenAmount,
        quoteTokenAmount,
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
        market: this.spotOrder.orderInfo.market,
        trader: this.spotOrder.orderInfo.trader,
        nonce: this.spotOrder.orderInfo.nonce,
        deadline: this.spotOrder.orderInfo.deadline,
      },
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      validatorAddress: this.spotOrder.validatorAddress,
      validationData: this.spotOrder.validationData,
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
    let token = ''
    let amount = BigNumber.from(0)

    if (this.spotOrder.baseTokenAmount.gt(0)) {
      token = this.spotOrder.quoteToken
      amount = this.spotOrder.quoteTokenAmount
    } else {
      token = this.spotOrder.baseToken
      amount = this.spotOrder.baseTokenAmount
    }

    return {
      permitted: {
        token,
        amount,
      },
      spender: this.spotOrder.orderInfo.market,
      nonce: this.spotOrder.orderInfo.nonce,
      deadline: this.spotOrder.orderInfo.deadline,
    }
  }

  private witness(): Witness {
    return {
      witness: this.witnessInfo(),
      witnessTypeName: 'SpotOrder',
      witnessType: SPOT_ORDER_TYPES,
    }
  }

  hash(): string {
    return ethers.utils._TypedDataEncoder
      .from(SPOT_ORDER_TYPES)
      .hash(this.witnessInfo())
  }
}

const DUTCH_ORDER_VALIDATION_ABI = [
  'tuple(' + ['uint256', 'uint256', 'uint256', 'uint256'].join(',') + ')',
]

export class SpotDutchOrderValidationData extends BaseValidationData {
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
  'tuple(' + ['address', 'uint256'].join(',') + ')',
]

export class SpotLimitOrderValidationData extends BaseValidationData {
  constructor(public filler: string, public limitQuoteTokenAmount: number) {
    super()
  }

  serialize(): string {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      this.filler,
      this.limitQuoteTokenAmount,
    ])
  }
}
