import { PERMIT2_MAPPING } from '@uniswap/uniswapx-sdk'
import { decodeAbiParameters, encodeAbiParameters } from 'viem'

import { Address, Bytes } from '../types'
import { abs } from '../utils'

import {
  BaseValidationData,
  ORDER_INFO_TYPES,
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
  {
    name: 'SpotOrder',
    type: 'tuple',
    components: [
      {
        name: 'info',
        type: 'tuple',
        components: [
          { name: 'market', type: 'address' },
          { name: 'trader', type: 'address' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      },
      { name: 'quoteToken', type: 'address' },
      { name: 'baseToken', type: 'address' },
      { name: 'baseTokenAmount', type: 'int256' },
      { name: 'quoteTokenAmount', type: 'uint256' },
      { name: 'validatorAddress', type: 'address' },
      { name: 'validationData', type: 'bytes' },
    ],
  },
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
    return encodeAbiParameters(SPOT_ORDER_ABI, [this.spotOrder]) as Bytes
  }

  static parse(encoded: Bytes, chainId: number, permit2?: Address): SpotOrder {
    const decoded = decodeAbiParameters(SPOT_ORDER_ABI, encoded)

    const order = decoded[0] as SpotOrderParams

    return new SpotOrder(order, chainId, permit2)
  }

  public witnessInfo() {
    return {
      info: this.spotOrder.info,
      quoteToken: this.spotOrder.quoteToken,
      baseToken: this.spotOrder.baseToken,
      baseTokenAmount: this.spotOrder.baseTokenAmount,
      quoteTokenAmount: this.spotOrder.quoteTokenAmount,
      validatorAddress: this.spotOrder.validatorAddress,
      validationData: this.spotOrder.validationData,
    }
  }

  toPermit() {
    let token = ''
    let amount = 0n

    if (this.spotOrder.baseTokenAmount > 0n) {
      token = this.spotOrder.quoteToken
      amount = this.spotOrder.quoteTokenAmount
    } else {
      token = this.spotOrder.baseToken
      amount = abs(this.spotOrder.baseTokenAmount)
    }

    return {
      permitted: {
        token,
        amount,
      },
      spender: this.spotOrder.info.market,
      nonce: this.spotOrder.info.nonce,
      deadline: this.spotOrder.info.deadline,
    }
  }

  permitData() {
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
        deadline: permit.deadline,
        nonce: permit.nonce,
        permitted: permit.permitted,
        spender: permit.spender,
        witness: this.witnessInfo(),
      },
    }
  }
}

const SPOT_DUTCH_ORDER_VALIDATION_ABI = [
  {
    name: 'SpotDutchOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'startPrice', type: 'uint256' },
      { name: 'endPrice', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
    ],
  },
]

export class SpotDutchOrderValidationData extends BaseValidationData {
  constructor(
    public startPrice: bigint,
    public endPrice: bigint,
    public startTime: number,
    public endTime: number
  ) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(SPOT_DUTCH_ORDER_VALIDATION_ABI, [
      {
        startPrice: this.startPrice,
        endPrice: this.endPrice,
        startTime: this.startTime,
        endTime: this.endTime,
      },
    ]) as Bytes
  }
}

const LIMIT_ORDER_VALIDATION_ABI = [
  {
    name: 'LimitOrderValidationData',
    type: 'tuple',
    components: [
      { name: 'filler', type: 'address' },
      { name: 'limitQuoteTokenAmount', type: 'uint256' },
    ],
  },
]

export class SpotLimitOrderValidationData extends BaseValidationData {
  constructor(public filler: string, public limitQuoteTokenAmount: bigint) {
    super()
  }

  serialize(): Bytes {
    return encodeAbiParameters(LIMIT_ORDER_VALIDATION_ABI, [
      { filler: this.filler, limitQuoteTokenAmount: this.limitQuoteTokenAmount },
    ]) as Bytes
  }
}
