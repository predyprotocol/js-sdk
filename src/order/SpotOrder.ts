import {
  PermitTransferFrom,
  PermitTransferFromData,
  SignatureTransfer,
  Witness,
} from '@uniswap/permit2-sdk'
import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { BigNumber, ethers } from 'ethers'

import { Address, Bytes } from '../types'

import {
  BaseValidationData,
  ORDER_INFO_TYPES,
  OrderInfo,
  PERMIT_WITNESS_TRANSFER_FROM_TYPES,
  SpotOrderParams,
  TOKEN_PERMISSION_TYPES,
} from './types'

const SPOT_ORDER_TYPES_SINGLE = [
  { name: 'info', type: 'OrderInfo' },
  { name: 'quoteToken', type: 'address' },
  { name: 'baseToken', type: 'address' },
  { name: 'baseTokenAmount', type: 'int256' },
  { name: 'quoteTokenAmount', type: 'uint256' },
  { name: 'validatorAddress', type: 'address' },
  { name: 'validationData', type: 'bytes' },
]
export const SPOT_ORDER_TYPES = {
  SpotOrder: SPOT_ORDER_TYPES_SINGLE,
  OrderInfo: ORDER_INFO_TYPES,
}

export const SPOT_ORDER_PERMIT2_TYPES = {
  PermitWitnessTransferFrom: PERMIT_WITNESS_TRANSFER_FROM_TYPES('SpotOrder'),
  OrderInfo: ORDER_INFO_TYPES,
  SpotOrder: SPOT_ORDER_TYPES_SINGLE,
  TokenPermissions: TOKEN_PERMISSION_TYPES,
} as const

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
  public permit2Address: Address

  constructor(
    public readonly spotOrder: SpotOrderParams,
    readonly chainId: number,
    readonly _permit2Address?: Address
  ) {
    if (_permit2Address) {
      this.permit2Address = _permit2Address
    } else {
      this.permit2Address = PERMIT2_MAPPING[chainId] as Address
    }
  }

  serialize(): Bytes {
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
    ]) as Bytes
  }

  witnessInfoForViem() {
    return {
      info: this.spotOrder.orderInfo.toWitnessDataForViem(),
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: BigInt(this.spotOrder.baseTokenAmount.toString()),
      quoteTokenAmount: BigInt(this.spotOrder.quoteTokenAmount.toString()),
      validatorAddress: this.spotOrder.validatorAddress,
      validationData: this.spotOrder.validationData,
    }
  }

  static parse(encoded: string, chainId: number, permit2?: Address): SpotOrder {
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
        orderInfo: new OrderInfo(market, trader, nonce, deadline.toNumber()),
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

  permitData() {
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

  permitDataForViem() {
    const permit = this.toPermit()

    return {
      primaryType: 'PermitWitnessTransferFrom',
      domain: {
        name: 'Permit2',
        chainId: this.chainId,
        verifyingContract: this.permit2Address,
      },
      types: SPOT_ORDER_PERMIT2_TYPES,
      message: {
        deadline: BigInt(permit.deadline.toString()),
        nonce: BigInt(permit.nonce.toString()),
        permitted: {
          token: permit.permitted.token,
          amount: BigInt(permit.permitted.amount.toString()),
        },
        spender: permit.spender,
        witness: this.witnessInfoForViem(),
      },
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
    public startPrice: BigNumber,
    public endPrice: BigNumber,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(DUTCH_ORDER_VALIDATION_ABI, [
      [this.startPrice, this.endPrice, this.startTime, this.endTime],
    ]) as Bytes
  }
}

const LIMIT_ORDER_VALIDATION_ABI = [
  'tuple(' + ['address', 'uint256'].join(',') + ')',
]

export class SpotLimitOrderValidationData extends BaseValidationData {
  constructor(public filler: string, public limitQuoteTokenAmount: BigNumber) {
    super()
  }

  serialize(): Bytes {
    const abiCoder = new ethers.utils.AbiCoder()

    return abiCoder.encode(LIMIT_ORDER_VALIDATION_ABI, [
      [this.filler, this.limitQuoteTokenAmount],
    ]) as Bytes
  }
}
